# Generated by Django 3.2.19 on 2023-06-06 12:19

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0014_auto_20230606_1218'),
    ]

    operations = [
        migrations.AlterField(
            model_name='notification',
            name='follower',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='base.user'),
        ),
    ]
