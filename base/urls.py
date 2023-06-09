from django.urls import path
from django.contrib.auth import views as auth_views
from . import views


urlpatterns = [
    path('login/', views.loginPage, name="login"),
    path('logout/', views.logoutUser, name="logout"),
    path('register/', views.registerPage, name="register"),
    path('like-room/', views.like_room, name="like-room"),
    path('follow-topic/', views.follow_topic, name="follow-topic"),
    path('follow/', views.follow, name="follow"),
    path('notifications/', views.notifications, name="notifications"),
    path('assign_moderators/<str:pk>/', views.assign_moderators, name='assign_moderators'),
    path('room/<str:pk>/ban/', views.ban_user, name='ban-user'),
    path('room/<str:pk>/unban/<int:user_id>/', views.unban_user, name='unban_user'),
    path('upvote/<int:message_id>/', views.upvote_message, name='upvote'),
    path('downvote/<int:message_id>/', views.downvote_message, name='downvote'),

    path('reset_password/', auth_views.PasswordResetView.as_view(template_name="base/password_reset.html"), name="reset_password"),
    path('reset_password_sent/', auth_views.PasswordResetDoneView.as_view(template_name="base/password_reset_sent.html"), name="password_reset_done"),
    path('reset/<uidb64>/<token>/', auth_views.PasswordResetConfirmView.as_view(template_name="base/password_reset_form"), name="password_reset_confirm"),
    path('reset_password_complete/', auth_views.PasswordResetCompleteView.as_view(template_name="base/password_reset_done.html"), name="password_reset_complete"),

    path('', views.home, name="home"),
    path('room/<str:pk>/', views.room, name="room"),
    path('profile/<str:username>/', views.profile, name="profile"),
    path('profile/', views.profile, name="profile"),

    path('create-room/', views.createRoom, name="create-room"),
    path('update-room/<str:pk>/', views.updateRoom, name="update-room"),
    path('delete-room/<str:pk>/', views.deleteRoom, name="delete-room"),
    path('delete-message/<str:pk>/', views.deleteMessage, name="delete-message"),
    path('update-user/', views.updateUser, name="update-user"),

    path('topics/', views.topicsPage, name="topics"),
    path('activity/', views.activityPage, name="activity"),
    path('tophosts/', views.hostsPage, name="tophosts"),
]
