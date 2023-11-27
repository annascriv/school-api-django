import re
from django.core.exceptions import ValidationError


def validate_subject_format(subject_name):

    regex =  r"^[A-Z][a-z0-9'’\- ]*$"

    good_name = re.match(regex, subject_name)

    if good_name:
        return subject_name
    
    raise ValidationError("Subject must be in title case format.")


def validate_professor_name(professor):

    regex = r"^Professor [A-Z][a-z\s]+$"

    good_name = re.match(regex, professor)

    if good_name:
        return professor
    
    raise ValidationError('Professor name must be in the format "Professor Adam".')

