# Generated by Django 4.2.2 on 2023-06-07 20:58

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0025_delete_uservote'),
    ]

    operations = [
        migrations.AddField(
            model_name='message',
            name='no_of_downvotes',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='message',
            name='no_of_upvotes',
            field=models.IntegerField(default=0),
        ),
        migrations.RemoveField(
            model_name='message',
            name='downvotes',
        ),
        migrations.RemoveField(
            model_name='message',
            name='upvotes',
        ),
        migrations.AddField(
            model_name='message',
            name='downvotes',
            field=models.ManyToManyField(related_name='downvoted_messages', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AddField(
            model_name='message',
            name='upvotes',
            field=models.ManyToManyField(related_name='upvoted_messages', to=settings.AUTH_USER_MODEL),
        ),
    ]