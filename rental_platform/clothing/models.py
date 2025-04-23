from django.db import models
from django.contrib.auth.models import AbstractUser
from django.db.models.signals import post_save

# Create your models here.
class ClothingItem(models.Model):
    name = models.CharField(max_length=100)
    image = models.ImageField(upload_to='clothing_images')
    size = models.CharField(max_length=10)
    color = models.CharField(max_length=20)
    price_per_day = models.DecimalField(max_digits=10, decimal_places=2)
    available = models.BooleanField(default=True)

    def __str__(self):
        return f"{self.name} - {self.size} - {self.color} - ${self.price_per_day}/day"
    