from django.db import models
from django.core import validators as v
from student_app.models import Student
from subject_app.models import Subject

# Create your models here.

class Grade(models.Model):

    grade = models.DecimalField(decimal_places=2, max_digits=5, blank=True, default=100, unique=False, validators=[v.MinValueValidator(0.00), v.MaxValueValidator(100.00)])

    a_subject = models.ForeignKey(Subject, on_delete=models.SET_NULL, null=True, blank=True, unique=False)

    student = models.ForeignKey(Student, on_delete=models.SET_NULL, null=True, blank=True, unique=False)