from django.urls import path,include
from .views import *
from django.contrib import admin
from clothing import views
from rest_framework_simplejwt.views import TokenRefreshView

urlpatterns = [    
    path('', views.ClothingItemListView.as_view(), name='clothing_list'),
    path('<int:pk>/', views.ClothingItemDetailView.as_view(), name='clothing_item_detail'),
]