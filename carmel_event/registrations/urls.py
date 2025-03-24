from django.urls import path
from . views import *

urlpatterns = [
    path('', home, name='home'),
    path('register/', register, name='register'),
    path('about/', about, name='about'),
    path('confirmpage/', confirmpage, name='confirmpage'),
    path('result/', result, name='result'),
    path('rulesrootmap/', rulesrootmap, name='rulesrootmap'),
]