from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view

# Create your views here.

@csrf_exempt

@api_view(['POST'])
def create_user():
     return JsonResponse("true")

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
