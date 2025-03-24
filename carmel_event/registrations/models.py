from django.db import models

class Category(models.Model):
    name = models.CharField(max_length=255, unique=True, verbose_name="Category Name")
    fees = models.DecimalField(max_digits=10, decimal_places=2, verbose_name="Registration Fee")

    def __str__(self):
        return f"{self.name} - ${self.fees}"

    class Meta:
        verbose_name = "Category"
        verbose_name_plural = "Categories"


class CollectionPoint(models.Model):
    name = models.CharField(max_length=255, unique=True, verbose_name="Collection Point")

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = "Collection Point"
        verbose_name_plural = "Collection Points"


class EventRegistration(models.Model):

    TSHIRT_SIZE_CHOICES = [
        ('S', 'Small'),
        ('M', 'Medium'),
        ('L', 'Large'),
    ]
    GENDER_CHOICES = [
        ('Male', 'Male'),
        ('Female', 'Female'),
        ('Other', 'Other'),
    ]

    fullname = models.CharField(max_length=255, verbose_name="Full Name")
    phone = models.CharField(max_length=15, verbose_name="Phone Number")
    email = models.EmailField(unique=True, verbose_name="Email Address")
    date_of_birth = models.DateField(verbose_name="Date of Birth")
    gender = models.CharField(max_length=20, choices=GENDER_CHOICES, verbose_name="Gender")
    category = models.ForeignKey(Category, on_delete=models.CASCADE, verbose_name="Event Category")
    collection_point = models.ForeignKey(CollectionPoint, on_delete=models.CASCADE, verbose_name="Collection Point")
    t_shirt_size = models.CharField(max_length=1, choices=TSHIRT_SIZE_CHOICES, verbose_name="T-Shirt Size")
    date_registered = models.DateTimeField(auto_now_add=True, verbose_name="Registration Date")

    def __str__(self):
        return f"{self.fullname} - {self.category.name}"

    class Meta:
        verbose_name = "Event Registration"
        verbose_name_plural = "Event Registrations"
