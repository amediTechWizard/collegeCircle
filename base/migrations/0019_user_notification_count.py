# Generated by Django 3.2.19 on 2023-06-06 14:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0018_auto_20230606_1247'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='notification_count',
            field=models.PositiveIntegerField(default=0),
        ),
    ]
