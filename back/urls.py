from django.urls import path
#urls app
from . import views as api

urlpatterns = [
   path('users', api.create_user, name="create_user"), 
   path('users/login', api.login, name="login"),
   path('users', api.get_users, name="get_users"),
   path('users', api.get_user, name="get_user"),
   path('users/<int:id_user>', api.update_user, name="update_user"),
   path('users/<int:id_user>', api.delete_user, name="delete_user"),
]

