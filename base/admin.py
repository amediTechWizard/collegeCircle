from django.contrib import admin

# Register your models here.

from .models import Room, Topic, Message, User, LikeRoom, FollowersCount, TopicFollowersCount

admin.site.register(User)
admin.site.register(Room)
admin.site.register(Topic)
admin.site.register(Message)
admin.site.register(LikeRoom)
admin.site.register(FollowersCount)
admin.site.register(TopicFollowersCount)
