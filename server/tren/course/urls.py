from django.urls import path 
from . import views 




urlpatterns = [
    path('course-list', views.courseList, name='course-list'),
    path('course-detail/<str:pk>/', views.courseDetail, name='course-detail'),
    path('course-create/', views.courseCreate, name='course-create'),


]


