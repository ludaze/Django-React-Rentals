from rest_framework import serializers
from api.models import CustomUser, Profile
from django.contrib.auth.password_validation import validate_password
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework import serializers

class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = ['verification_document', 'is_verified','phone_number']

class UserSerializer(serializers.ModelSerializer):
    profile = ProfileSerializer()

    class Meta:
        model = CustomUser
        fields = ['id', 'username','email','profile']

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        token['full_name'] = user.profile.full_name
        token['user_name'] = user.username
        token['email'] = user.email
        token['verification_document'] = user.profile.verification_document
        token['is_verified'] = user.profile.is_verified

        
        return token
    
class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, required=True, validators=[validate_password] )
    confirm_password = serializers.CharField(write_only = True, required=True)
    phone_number = serializers.CharField(write_only = True, required=True)

    class Meta:
        model = CustomUser
        fields = ['email', 'username','password','confirm_password', 'phone_number']

    def validate(self, attrs):
        # Check if password and confirm_password match
        if attrs['password'] != attrs['confirm_password']:
            raise serializers.ValidationError({"password": "Passwords do not match."})
        return attrs
    
    def create(self,validated_data):
        # validated_data.pop('confirm_password')
        # password = validated_data.pop('password', None)
        print("Validated Data:", validated_data)

        phone_number = validated_data.pop('phone_number')
        user = CustomUser.objects.create(
            username = validated_data['username'],
            email=validated_data['email'],
            
            # is_active=True,  
        )
        user.set_password(validated_data['password'])
        user.save()
        Profile.objects.create(user=user, phone_number=phone_number)

        return user