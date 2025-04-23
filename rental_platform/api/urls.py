from django.urls import path,include
from .views import *
from django.contrib import admin
from api import views
from rest_framework_simplejwt.views import TokenRefreshView

urlpatterns = [
    
   
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),    
    path("register/", views.RegisterVIew.as_view()),
    path("dashboard/", views.dashboard),
    #path('logout/', views.LogoutView.as_view(), name='logout'),
]