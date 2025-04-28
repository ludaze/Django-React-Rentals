from django.shortcuts import render
from rest_framework import generics, viewsets, status
from .serializers import ClothingItemSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny
from .models import ClothingItem
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.views import APIView;

class ClothingItemListView(generics.ListCreateAPIView):
    queryset = ClothingItem.objects.all()
    serializer_class = ClothingItemSerializer
    permission_classes = [AllowAny]

    def getpermission(self):
        if self.request.method in ['POST']:
            return [IsAuthenticated()]
        return super().get_permissions()
    
    def perform_create(self, serializer):
        if serializer.is_valid():
            # Save the instance with the owner set to the current user
            serializer.save(owner=self.request.user)

class ClothingItemDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = ClothingItem.objects.all()
    serializer_class = ClothingItemSerializer
    permission_classes = [AllowAny]
