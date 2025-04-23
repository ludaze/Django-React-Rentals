from rest_framework import serializers
from clothing.models import ClothingItem
from django.contrib.auth.models import User
from django.contrib.auth.password_validation import validate_password
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework import serializers

class ClothingItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = ClothingItem
        fields = ['id', 'name', 'image', 'size', 'color', 'price_per_day', 'available']