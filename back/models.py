from django.db import models

# migration user
class User(models.Model):
    first_name = models.CharField(max_length=50, null=True, blank=True)
    last_name = models.CharField(max_length=50, null=True, blank=True)
    date_birth = models.DateField(max_length=30, null=True, blank=True)
    address = models.TextField(max_length=80,null=True, blank=True)
    token = models.CharField(max_length=100, null=False)
    password = models.CharField(max_length=120, null=True, blank=True)
    mobile_phone = models.CharField(max_length=15)
    email = models.EmailField(max_length=70)

    def __str__(self):
        return f"{self.first_name} {self.last_name}"
