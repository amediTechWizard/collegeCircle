from django.shortcuts import render, redirect, get_object_or_404
from django.http import HttpResponse, JsonResponse
from django.contrib import messages
from django.contrib.auth.decorators import login_required
from django.db.models import Q
from .models import Room, Topic, Message, User, LikeRoom, FollowersCount, TopicFollowersCount, Notification, get_upload_path
# from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.forms import UserCreationForm
from .forms import RoomForm, userForm, MyUserCreationForm
from django.urls import reverse
import random, os
from django.core.paginator import Paginator
from django.core.files.storage import FileSystemStorage


def loginPage(request):
    page = 'login'
    if request.user.is_authenticated:
        return redirect('home')

    if request.method == 'POST':
        email = request.POST.get('email').lower()
        password = request.POST.get('password')

        try:
            user = User.objects.get(email=email)
        except:
                messages.error(request, 'user does not exist')

        user = authenticate(request, email=email, password=password)

        if user is not None:
            login(request, user)
            return redirect('home')
        else:
            messages.error(request, 'Email OR password does not exist')

    context = {'page': page}
    return render(request, 'base/login_register.html', context)

def logoutUser(request):
    logout(request)
    return redirect('home')

# def registerPage(request):
#     form = MyUserCreationForm()

#     if request.method == 'POST':
#         form = MyUserCreationForm(request.POST)
#         if form.is_valid():
#             user = form.save(commit=False)
#             user.username = user.username.lower()
#             user.save()
#             login(request, user)
#             return redirect('home')
#         else:
#             messages.error(request, 'An error occured during registrstion')
   
#     return render(request, 'base/login_register.html', {'form': form})

def registerPage(request):
    form = MyUserCreationForm()

    if request.method == 'POST':
        form = MyUserCreationForm(request.POST)
        if form.is_valid():
            user = form.save(commit=False)
            email = request.POST.get('email').lower()
            user.save()

            # Authenticate the user
            user = authenticate(request, email=email, password=form.cleaned_data['password1'])

            if user is not None:
                # Log in the authenticated user
                login(request, user)
                return redirect('home')
            else:
                messages.error(request, 'Failed to authenticate the user.')
        else:
            messages.error(request, 'An error occurred during registration')

    return render(request, 'base/login_register.html', {'form': form})

@login_required(login_url='login')
def notifications(request):
    user = request.user

    # Clear the notification count
    user.notification_count = 0
    user.save()

    # Fetch notifications for follow, upvote, and downvote types
    notifications = Notification.objects.filter(user=user).order_by('-created_at')
    return render(request, 'base/user_notifications.html', {'notifications': notifications})


@login_required(login_url='login')
def mark_notifications_as_read(request):
    user = request.user
    notifications = Notification.objects.filter(user=user, is_read=False)
    count = notifications.count()
    notifications.update(is_read=True)

    user.notification_count -= count
    user.save()
    return redirect('notifications')

def home(request):
    q = request.GET.get('q') if request.GET.get('q') else ''

    rooms = Room.objects.filter(
        Q(topic__name__icontains=q) |
        Q(name__icontains=q) |
        Q(description__icontains=q)
    )

    topics = Topic.objects.all()[:5]
    room_count = rooms.count()
    room_messages = Message.objects.filter(room__topic__name__icontains=q)

    current_user = request.user

    # Get suggested users
    users_not_following = User.objects.exclude(
        username__in=FollowersCount.objects.filter(follower=current_user.username).values('user')
    ).exclude(username=current_user.username)  # Exclude current user's username
    users_available = list(users_not_following)
    sample_size = min(5, len(users_available))  # Adjust sample size if necessary
    suggested_users = random.sample(users_available, sample_size)

    # set up pagination
    # P = Paginator (Topic.objects.all(), 1)
    P = Paginator(rooms, 25)
    page = request.GET.get('page')
    topics_list = P.get_page(page)

    context = {
        'rooms': topics_list,
        'topics': topics,
        'room_count': room_count,
        'room_messages': room_messages,
        'suggested_users': suggested_users,
        'topics_list' : topics_list
    }
    return render(request, 'base/home.html', context)

# @login_required(login_url='login')
def room(request, pk):
    room = Room.objects.get(id=pk)
    room_messages = room.message_set.all()
    participants = room.participants.all()

    if request.method == 'POST':
        if request.user not in room.banned_users.all():
            # Handle file upload
            file = request.FILES.get('file')
            body = request.POST.get('body')

            # Check if either file or body is provided
            if file or body:
                message = Message(user=request.user, room=room, body=body)

                # Handle file upload
                if file:
                    fs = FileSystemStorage()
                    filename = fs.save(get_upload_path(None, file.name), file)
                    message.file = fs.url(filename)

                message.save()
                room.participants.add(request.user)
            else:
                messages.error(request, "Please provide a file or message body.")
                # Increment the no_of_likes field based on upvotes and downvotes
                message.no_of_upvotes = message.upvotes.count()
                message.no_of_downvotes = message.downvotes.count()
                message.save()
        else:
            messages.error(request, "You have been banned from this room.")

        return redirect('room', pk=room.id)

    context = {'room': room, 'room_messages': room_messages, 'participants': participants}
    return render(request, 'base/room.html', context)

@login_required(login_url='login')
def createRoom(request):
    form = RoomForm()
    topics = Topic.objects.all()

    if request.method == 'POST':
        topic_name = request.POST.get('topic')
        topic, created = Topic.objects.get_or_create(name=topic_name)

        room = Room(
            host=request.user,
            topic=topic,
            name=request.POST.get('name'),
            description=request.POST.get('description'),
        )
        room.save()
        messages.success(request, 'Room created successfully.')
        return redirect('home')

    context = {'form': form, 'topics': topics}
    return render(request, 'base/room_form.html', context)

@login_required(login_url='login')
def updateRoom(request, pk):
    room = Room.objects.get(id=pk)
    form = RoomForm(instance=room)
    topics = Topic.objects.all()

    if request.user != room.host and not request.user.is_superuser and request.user not in room.moderators.all():
        return HttpResponse('You are not allowed here!!')

    if request.method == 'POST':
        topic_name = request.POST.get('topic')
        topic, created = Topic.objects.get_or_create(name=topic_name)
        form = RoomForm(request.POST, instance=room)
        room.name = request.POST.get('name')
        room.topic = topic
        room.description = request.POST.get('description')
        room.save()
        messages.success(request, 'Room updated successfully.')
        return redirect('home')

    context = {'form': form, 'topics': topics, 'room': room}
    return render(request, 'base/room_form.html', context)


def profile(request, username):
    user = get_object_or_404(User, username=username)
    rooms = user.room_set.all()
    user_rooms = rooms.count()
    room_messages = user.message_set.all()
    topics = Topic.objects.all()

    ###GET BACK TO THIS###
    # follower = username
    # user = pk
    # if FollowersCount.objects.filter(follower=follower, user=user).first():
    #     button_text = 'Unfolow'
    # else:
    #     button_text = 'Follow'

    user_followers = len(FollowersCount.objects.filter(user=username))
    user_following = len(FollowersCount.objects.filter(follower=username))
        
    context = {'user': user, 'rooms': rooms, 'user_rooms': user_rooms, 'room_messages': room_messages, 'topics': topics, 'user_followers': user_followers, 'user_following': user_following}
    return render(request, 'base/profile.html', context)

@login_required(login_url='login')
def deleteRoom(request, pk):
    room = Room.objects.get(id=pk)

    if request.user != room.host and not request.user.is_superuser and request.user not in room.moderators.all():
        return HttpResponse('You are not allowed here!!')

    if request.method == 'POST':
        room.delete()
        messages.success(request, 'Room deleted successfully.')
        return redirect('home')
    
    return render(request, 'base/delete.html', {'obj': room})

@login_required(login_url='login')
def deleteMessage(request, pk):
    message = Message.objects.get(id=pk)
    room = message.room

    if request.user != message.user and not request.user != room.host and not request.user.is_superuser and request.user not in room.moderators.all():
        return HttpResponse('You are not allowed here!!')

    if request.method == 'POST':
        message.delete()
        messages.success(request, 'Message deleted successfully.')
        return redirect('home')
    
    return render(request, 'base/delete.html', {'obj': message})


@login_required(login_url='login')
def updateUser(request):
    user = request.user
    form = userForm(instance=user)

    if request.method == 'POST':
        form = userForm(request.POST, request.FILES, instance=user)
        if form.is_valid():
            form.save()
            messages.success(request, 'User updated successfully.')
            return redirect('profile', user.username)

    return render(request, 'base/update-user.html', {'form': form})


def topicsPage(request):
    q = request.GET.get('q') if request.GET.get('q') != None else ''
    topics = Topic.objects.filter(name__icontains=q)
    return render(request, 'base/topics.html',{'topics': topics})

def activityPage(request):
    room_messages = Message.objects.all()
    return render(request, 'base/activity.html', {'room_messages': room_messages})

def hostsPage(request):
    current_user = request.user

    # Get suggested users
    users_not_following = User.objects.exclude(
        username__in=FollowersCount.objects.filter(follower=current_user.username).values('user')
    ).exclude(username=current_user.username)  # Exclude current user's username
    users_available = list(users_not_following)
    sample_size = min(5, len(users_available))  # Adjust sample size if necessary
    suggested_users = random.sample(users_available, sample_size)
    return render(request, 'base/tophosts.html', {'suggested_users': suggested_users})

@login_required(login_url='login')
def like_room(request):
    username = request.user.username
    room_id = request.GET.get('room_id')

    room = Room.objects.get(id=room_id)

    like_filter = LikeRoom.objects.filter(room_id=room_id, username=username).first()

    if like_filter is None:
        new_like = LikeRoom.objects.create(room_id=room_id, username=username)
        new_like.save()
        room.no_of_likes += 1
        room.save()
        messages.success(request, 'You have liked the room.')
    else:
        like_filter.delete()
        room.no_of_likes -= 1
        room.save()
        messages.success(request, 'You have unliked the room.')

    return redirect('home')

@login_required(login_url='login')
def follow(request):
    if request.method == 'POST':
        follower_username = request.POST['follower']
        user_username = request.POST['user']

        if FollowersCount.objects.filter(follower=follower_username, user=user_username).first():
            delete_follower = FollowersCount.objects.get(follower=follower_username, user=user_username)
            delete_follower.delete()
            messages.success(request, 'You have unfollowed '+user_username)
            return redirect('/profile/' + user_username)
        else:
            new_follower = FollowersCount.objects.create(follower=follower_username, user=user_username)
            new_follower.save()

            # Retrieve the user objects for the follower and the user being followed
            follower = User.objects.get(username=follower_username)
            user = User.objects.get(username=user_username)

            # Create a notification for the user being followed
            new_follow = Notification.objects.create(follower=follower, user=user, notification_type=Notification.FOLLOW)
            new_follow.save()
            user.notification_count += 1
            user.save()
            messages.success(request, 'You are now following '+user_username)

            return redirect('/profile/' + user_username)
    else:
        messages.error(request, 'Invalid request.')
        return redirect('home')


@login_required(login_url='login')
def follow_topic(request):
    if request.method == 'POST':
        follower = request.POST['follower']
        topic_name = request.POST['topic_name']

        if TopicFollowersCount.objects.filter(follower=follower, topic_name=topic_name).first():
            delete_follower = TopicFollowersCount.objects.get(follower=follower, topic_name=topic_name)
            delete_follower.delete()
            messages.success(request, 'You have followed '+topic_name)
            return redirect('home')
        else:
            new_follower = TopicFollowersCount.objects.create(follower=follower, topic_name=topic_name)
            new_follower.save()
            messages.success(request, 'You have unfollowed '+topic_name)
            return redirect('home')
    else:
        return redirect('home')

@login_required(login_url='login')
def assign_moderators(request, pk):
    room = get_object_or_404(Room, id=pk)

    # Ensure that only the room owner or an administrator can assign moderators
    if request.user != room.host and not request.user.is_superuser and request.user not in room.moderators.all():
        messages.error(request, 'You are not allowed here!!')
        return redirect('home')  # Redirect to the appropriate URL or template

    if request.method == 'POST':
        moderators = request.POST.getlist('moderators')
        room.moderators.set(moderators)  # Set the selected moderators for the room
        messages.success(request, 'Moderators have been assigned successfully.')
        return redirect('room', pk=pk)

    users = User.objects.all()
    context = {'room': room, 'users': users}
    return render(request, 'base/assign_moderators.html', context)


@login_required(login_url='login')
def ban_user(request, pk):
    room = Room.objects.get(id=pk)

    # Check if the user has the necessary permissions to ban
    if (request.user == room.host) or (request.user in room.moderators.all()):
        if request.method == 'POST':
            username = request.POST.get('username')
            user = User.objects.filter(username=username).first()

            if user is not None:
                # Check if the user to be banned is not the room host or a moderator
                if user != room.host and user not in room.moderators.all():
                    room.banned_users.add(user)
                    messages.success(request, f"{user.username} has been banned from the room.")
                else:
                    messages.error(request, f"You are not allowed to ban {user.username}.")
            else:
                messages.error(request, f"User '{username}' does not exist.")

            return redirect('room', pk=pk)
    else:
        return HttpResponse('You are not allowed to ban users in this room.')

@login_required(login_url='login')
def unban_user(request, pk, user_id):
    room = Room.objects.get(id=pk)
    user = User.objects.get(id=user_id)
    
    if user in room.banned_users.all():
        room.banned_users.remove(user)
        messages.success(request, "User has been unbanned.")
    else:
        messages.error(request, "User is not currently banned.")

    return redirect('room', pk=room.id)

@login_required(login_url='login')
def upvote_message(request, message_id):
    if request.method == 'GET':
        try:
            message = Message.objects.get(id=message_id)
            if request.user not in message.upvotes.all():
                message.upvotes.add(request.user)
                message.no_of_upvotes += 1
                message.save()

                # Create a notification for the user whose message was upvoted
                new_notification = Notification.objects.create(
                    follower=request.user,
                    user=message.user,
                    notification_type='upvote',
                    message=message
                )
                new_notification.save()
                message.user.notification_count += 1
                message.user.save()

                messages.success(request, "You have given an Upvote to the message")
            return redirect('room', pk=message.room.id)
        except Message.DoesNotExist:
            return HttpResponse(status=404)
        
@login_required(login_url='login')
def downvote_message(request, message_id):
    if request.method == 'GET':
        try:
            message = Message.objects.get(id=message_id)
            if request.user not in message.downvotes.all():
                message.downvotes.add(request.user)
                message.no_of_downvotes += 1
                message.save()

                # Create a notification for the user whose message was downvoted
                new_notification = Notification.objects.create(
                    follower=request.user,
                    user=message.user,
                    notification_type='downvote',
                    message=message
                )
                new_notification.save()
                message.user.notification_count += 1
                message.user.save()

                messages.success(request, "You have given a Downvote to the message")
            return redirect('room', pk=message.room.id)
        except Message.DoesNotExist:
            return HttpResponse(status=404)

