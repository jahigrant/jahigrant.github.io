from django.urls import path, include 
from . import views
from django.contrib.auth import views as auth_views

urlpatterns = [
    path('', views.home_page_view, name='home'),
    path('pages/<slug:slug>/', views.page_detail, name='page_detail'),
]