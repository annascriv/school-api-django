# Generated by Django 4.2.7 on 2023-11-22 19:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('subject_app', '0001_initial'),
        ('student_app', '0005_alter_student_locker_combination_and_more'),
    ]

    operations = [
        migrations.DeleteModel(
            name='Teacher',
        ),
        migrations.AddField(
            model_name='student',
            name='subjects',
            field=models.ManyToManyField(related_name='students', to='subject_app.subject'),
        ),
    ]
