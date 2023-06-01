from django.db import models
from django.contrib.auth.models import AbstractUser, Group

class User(AbstractUser):
    name = models.CharField(max_length=200, null=True)
    email = models.EmailField(unique=True, null=True)
    bio = models.TextField(null=True)

    avatar = models.ImageField(null=True, default="avatar.svg")

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []
    
    ROLE_CHOICES = [
        ('owner', 'Room Owner'),
        ('admin', 'Room Administrator'),
        ('moderator', 'Room Moderator'),
        ('participant', 'Room Participant'),
    ]
    role = models.CharField(max_length=20, choices=ROLE_CHOICES, default='participant')

class Topic(models.Model):
    name = models.CharField(max_length=200)

    def __str__(self):
        return self.name
    
class Room(models.Model):
    host = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    topic = models.ForeignKey(Topic, on_delete=models.SET_NULL, null=True)
    name = models.CharField(max_length=200)
    description = models.TextField(null=True, blank=True)
    participants = models.ManyToManyField(User, related_name='participant_rooms', blank=True)
    updated = models.DateTimeField(auto_now=True)
    created = models.DateTimeField(auto_now_add=True)
    no_of_likes = models.IntegerField(default=0)
    
    moderators = models.ManyToManyField(User, related_name='moderated_rooms', blank=True)
    
    def ban_user(self, user, banned_by):
        BannedUser.objects.create(user=user, banned_by=banned_by)
        self.participants.remove(user)

    class Meta:
        ordering = ['-updated', '-created']

    def __str__(self):
        return self.name

class Message(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    room = models.ForeignKey(Room, on_delete=models.CASCADE)
    body = models.TextField()
    updated = models.DateTimeField(auto_now=True)
    created = models.DateTimeField(auto_now_add=True)

    def delete_message(self, deleted_by):
        DeletedMessage.objects.create(message=self, deleted_by=deleted_by)
        self.delete()

    class Meta:
        ordering = ['-updated', '-created']

    def __str__(self):
        return self.body[0:50]

class DeletedMessage(models.Model):
    message = models.ForeignKey(Message, on_delete=models.CASCADE)
    deleted_by = models.ForeignKey(User, on_delete=models.CASCADE)
    deleted_at = models.DateTimeField(auto_now_add=True)

class BannedUser(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='banned_users')
    banned_by = models.ForeignKey(User, on_delete=models.CASCADE, related_name='banning_users')
    banned_at = models.DateTimeField(auto_now_add=True)

class LikeRoom(models.Model):
    room_id = models.CharField(max_length=500)
    username = models.CharField(max_length=100)

    def __str__(self):
        return self.username
    
class FollowersCount(models.Model):
    follower = models.CharField(max_length=100)
    user = models.CharField(max_length=100)

    def __str__(self):
        return self.user

class TopicFollowersCount(models.Model):
    follower = models.CharField(max_length=100)
    topic_name = models.CharField(max_length=500)

    def __str__(self):
        return self.topic_name
