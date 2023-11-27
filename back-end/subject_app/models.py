from django.db import models
from .validators import validate_subject_format, validate_professor_name

# Create your models here.

class Subject(models.Model):

    subject_name = models.CharField(blank=False, unique=True, validators=[validate_subject_format])

    professor = models.CharField(blank=False, default='Mr. Cahan', validators=[validate_professor_name])

    def __str__(self):
        return f"{self.subject_name} - {self.professor} - {self.students.count()}"
    

    def add_a_student(self, student_id):

        if self.students.count() < 31:
            self.students.add(student_id)
        else:
            raise Exception("This subject is full!")



    def drop_a_student(self, student_id):

        student_count=self.students.count()

        if student_count>0:
             self.students.remove(student_id)

        raise Exception("This subject is empty!")

