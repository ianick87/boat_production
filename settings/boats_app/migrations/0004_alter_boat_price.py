# Generated by Django 4.1.2 on 2022-10-13 05:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('boats_app', '0003_boat_price'),
    ]

    operations = [
        migrations.AlterField(
            model_name='boat',
            name='price',
            field=models.DecimalField(decimal_places=2, max_digits=11),
        ),
    ]
