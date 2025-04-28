from django.db import models
from django.contrib.auth.models import AbstractUser
from django.db.models.signals import post_save

# Create your models here.
class ClothingItem(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)
    imageUrl = models.ImageField(upload_to='clothing_images')
    size = models.CharField(max_length=10)
    color = models.CharField(max_length=20)
    price_per_day = models.DecimalField(max_digits=10, decimal_places=2)
    available = models.BooleanField(default=True)
    owner = models.ForeignKey('api.CustomUser', on_delete=models.CASCADE, related_name='clothing_items', null=False)
    
    def __str__(self):
        return f"{self.name} - {self.size} - {self.color} - ${self.price_per_day}/day"
    