# Generated by Django 4.1.2 on 2022-10-13 05:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('boats_app', '0002_rename_boats_boat_rename_boatpics_boatpic'),
    ]

    operations = [
        migrations.AddField(
            model_name='boat',
            name='price',
            field=models.DecimalField(decimal_places=2, default=0, max_digits=6),
            preserve_default=False,
        ),
    ]
