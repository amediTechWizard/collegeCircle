# Generated by Django 4.2.2 on 2023-06-07 18:51

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0024_uservote'),
    ]

    operations = [
        migrations.DeleteModel(
            name='UserVote',
        ),
    ]
