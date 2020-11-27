from django.urls import path
from .views import UserList, CustomUserCreate


app_name = "users"



urlpatterns = [

    path("", UserList.as_view(), name="usercreate"),
    path("register/", CustomUserCreate.as_view(), name="create_user")

]