# Generated by Django 4.2.1 on 2023-06-02 23:07

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0008_room_moderators_user_role_alter_room_participants_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='room',
            name='banned_users',
            field=models.ManyToManyField(related_name='banned_rooms', to=settings.AUTH_USER_MODEL),
        ),
    ]
