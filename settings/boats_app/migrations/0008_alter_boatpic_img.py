# Generated by Django 4.1.2 on 2022-10-13 05:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('boats_app', '0007_remove_boatpic_name'),
    ]

    operations = [
        migrations.AlterField(
            model_name='boatpic',
            name='img',
            field=models.ImageField(upload_to='images/<function uuid4 at 0x1038e1090>'),
        ),
    ]
