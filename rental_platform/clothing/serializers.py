from rest_framework import serializers
from clothing.models import ClothingItem
from django.contrib.auth.models import User
from django.contrib.auth.password_validation import validate_password
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework import serializers

class ClothingItemSerializer(serializers.ModelSerializer):
    imageurl = serializers.SerializerMethodField()
    class Meta:
        model = ClothingItem
        fields = ['id', 'name', 'imageurl', 'size', 'color', 'price_per_day', 'available']

    def get_imageurl(self,obj):
        request= self.context.get('request')
        if obj.imageUrl:
            return request.build_absolute_uri(obj.imageUrl.url)
        return None
    def get_serializer_context(self):
        return {'request': self.request}