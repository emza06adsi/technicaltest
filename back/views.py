from django.shortcuts import render
from django.http import JsonResponse
from django.core.exceptions import ValidationError
from django.core.validators import validate_email
from django.views.decorators.csrf import csrf_exempt

from back.models import User
from .serializer import UserSerializer
from .validators import myValidateUserCreate
from django.contrib.auth.hashers import make_password
from rest_framework.decorators import api_view 
from rest_framework.response import Response
from rest_framework import status

# Create your views here.

@csrf_exempt
@api_view(['POST'])
def create_user(request):
    """
    Create a new user.
    
    endpoint for user registration
    ---
    :param request: La solicitud HTTP que contiene los datos del usuario a crear.
      - return: Un objeto JSON que contiene los datos del usuario recién creado.
      - name: first_name
        type: string
        required: false
        description: The user's name.
      - name: last_name
        type: string
        required: false
        description: The user's last name.
      - name: date_birth
        type: date
        required: false
        description: The user's date of birth.
      - name: address
        type: string
        required: false
        description: The user's address.
      - name: token
        type: string
        required: true
        description: The user's token.
      - name: password
        type: string
        required: false
        description: The user's password.
      - name: mobile_phone
        type: string
        required: false
        description: The user's cell phone number.
      - name: email
        type: string
        required: false
    """
    if request.method == 'POST':
        u = User( 
                fullname = request.POST.get('fullname'),
                date_birth= request.POST.get('date_birth'),
                mobile_phone = request.POST.get('mobile_phone'),
                address = request.POST.get('address'),
                password = make_password(request.POST.get('password')),
                email = request.POST.get('email'),)
                  
        form = myValidateUserCreate(request.POST)

        if form.is_valid():
            u.save()
            data = {'message':'Successfully Created User!', 'user': str(u)}
            return JsonResponse(data, status=status.HTTP_201_CREATED)
        else:
            form_errors = form.errors
            data = {'message': 'Error, data not found ', 'errors': form_errors}
            return JsonResponse(data,  status=status.HTTP_400_BAD_REQUEST)

                
@csrf_exempt
@api_view(['POST'])
def login():
    return JsonResponse("true")


@csrf_exempt
@api_view(['GET'])
def get_users():
    return JsonResponse("true")


@csrf_exempt
@api_view(['GET'])
def get_user():
    return JsonResponse("true")


@csrf_exempt
@api_view(['PUT'])
def update_user():
    return JsonResponse("true")


@csrf_exempt
@api_view(['PUT'])
def delete_user():
    return JsonResponse("true")
