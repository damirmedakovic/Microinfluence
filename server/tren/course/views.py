from django.shortcuts import render
from django.http import JsonResponse


# Create your views here.


from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Course 
from .serializers import CourseSerializer

@api_view(['GET'])
def courseList(request):

    courses = Course.objects.all()

    serializer = CourseSerializer(courses, many=True)

    return Response(serializer.data)


@api_view(['GET'])
def courseDetail(request, pk):
    course = Course.objects.get(id=pk)
    serializer = CourseSerializer(task, many=False)

    return Response(serializer.data)



@api_view(['GET'])
def courseDetail(request, pk):
    course = Course.objects.get(id=pk)
    serializer = CourseSerializer(task, many=False)

    return Response(serializer.data)