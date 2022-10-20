import uuid 
from django.db import models
import os

# Create your models here.

def path_and_rename(instance, filename):
    upload_to = 'images'
    ext = filename.split('.')[-1]
    # get filename
    if instance.pk:
        filename = '{}.{}'.format(instance.pk, ext)
    else:
        # set filename as random string
        filename = '{}.{}'.format(uuid.uuid4().hex, ext)
    # return the whole path to the file
    return  filename

class Boat(models.Model):
    id = models.UUIDField(primary_key = True, default = uuid.uuid4, editable = False)
    name = models.CharField(max_length=100)
    brand = models.CharField(max_length=100)
    location = models.CharField(max_length=100)
    year = models.IntegerField()
    description = models.TextField()
    status = models.BooleanField(default=False)
    price = models.DecimalField(max_digits=11, decimal_places=2)
    client_name = models.CharField(max_length=100, blank=True, null=True)

    def __str__(self):
        return self.name + " (" + str(self.client_name) +  "'s boat)"

class BoatPic(models.Model):
    boat = models.ForeignKey(Boat, on_delete=models.CASCADE)
    id = models.UUIDField(primary_key = True, default = uuid.uuid4, editable = False)
    img = models.ImageField(upload_to=path_and_rename)

    def delete(self, *args, **kwargs):
        # You have to prepare what you need before delete the model
        storage, path = self.img.storage, self.img.path
        # Delete the model before the file
        super(BoatPic, self).delete(*args, **kwargs)
        # Delete the file after the model
        storage.delete(path)

    def __str__(self):
        return str(self.id)