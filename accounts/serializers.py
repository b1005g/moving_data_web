from rest_framework import serializers
from django.contrib.auth import get_user_model

User = get_user_model()

class SignupSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)
    class Meta:
        model = User
        fields = ("username","password","email")

    def create(self, validated):
        user = User(username=validated["username"], email=validated.get("email",""))
        user.set_password(validated["password"])
        user.save()
        return user

class UsernameCheckSerializer(serializers.Serializer):
    username = serializers.CharField()

# accounts/views.py
from rest_framework import generics, status
from rest_framework.response import Response
from django.contrib.auth import authenticate
from .serializers import SignupSerializer, UsernameCheckSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

class SignupView(generics.CreateAPIView):
    serializer_class = SignupSerializer

class UsernameCheckView(generics.GenericAPIView):
    serializer_class = UsernameCheckSerializer
    def post(self, req):
        name = req.data.get("username","")
        exists = User.objects.filter(username=name).exists()
        return Response({"exists":exists})

class LoginView(TokenObtainPairView):
    # POST username+password → {access, refresh}
    pass