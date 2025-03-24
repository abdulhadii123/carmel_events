from django.shortcuts import render,redirect
from .models import *

# Create your views here.
def home(request):
    return render(request, 'index.html')

def register(request):
    collectionpoints = CollectionPoint.objects.all()
    categories=Category.objects.all()
    if request.method == "POST":
        fullnames = request.POST.getlist("fullname[]")
        phones = request.POST.getlist("phone[]")
        emails = request.POST.getlist("email[]")
        dates_of_birth = request.POST.getlist("date_of_birth[]")
        genders = request.POST.getlist("gender[]")
        categories_selected = request.POST.getlist("category[]")
        tshirt_sizes = request.POST.getlist("t_shirt_size[]")
        collection_points = request.POST.getlist("collection_point[]")

        # Validate and save each registration
        for i in range(len(fullnames)):
            if fullnames[i] and emails[i]:  # Ensure mandatory fields are filled
                category = Category.objects.get(id=categories_selected[i])
                collection_point = CollectionPoint.objects.get(id=collection_points[i])

                EventRegistration.objects.create(
                    fullname=fullnames[i],
                    phone=phones[i],
                    email=emails[i],
                    date_of_birth=dates_of_birth[i],
                    gender=genders[i],
                    category=category,
                    collection_point=collection_point,
                    t_shirt_size=tshirt_sizes[i],
                )

        
        return redirect("/")  # Redirect to the same page after saving
    
    
    context = {
        'collectionpoints': collectionpoints,
        'categories':categories,
    }
    
    return render(request, 'registerpage.html', context)

def about(request):
    return render(request, 'aboutpage.html')

def confirmpage(request):
    return render(request, 'confirmpage.html')

def result(request):
    return render(request, 'result.html')


def rulesrootmap(request):
    return render(request, 'rulesrootmap.html')