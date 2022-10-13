import uuid 
from django.db import models

# Create your models here.

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
    img = models.ImageField(upload_to="images")