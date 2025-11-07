import os
import json
import countryflag
from django.shortcuts import render, get_object_or_404, redirect
from django.contrib.auth.decorators import login_required
from django.views.generic import TemplateView
from django.http import JsonResponse
from django.conf import settings
from django.http import HttpResponse
from django.template import loader
from django.shortcuts import render, redirect 

from .models import Page
from .forms import (
    NewsletterSubscribeForm
)

def home_page_view(request):
    if request.method == 'POST' and 'newsletter_subscribe' in request.POST:
        form = NewsletterSubscribeForm(request.POST)
        if form.is_valid():
            # Here you would save the email to your database or send to a service
            messages.success(request, 'Thank you for subscribing!')
            form = NewsletterSubscribeForm()  # Reset form after success
    else:
        form = NewsletterSubscribeForm()
    # ...fetch your page and context as before...
    context = {
        # ...existing context...
        'form': form,
    }
    return render(request, 'home.html', context)

def page_detail(request, slug=None):
    # If no slug is provided, use 'home' as the default
    if not slug:
        slug = 'home'
    page = get_object_or_404(Page, slug=slug)
    # Try to use a template named after the slug, fallback to 'page.html'
    template_name = f"{slug}.html" if loader.get_template(f"{slug}.html") else "page.html"
    return render(request, template_name, {'page': page})

def newsletter_subscribe(request):
    if request.method == 'POST':
        form = NewsletterSubscribeForm(request.POST)
        if form.is_valid():
            # Here you would save the email to your database or send to a service
            messages.success(request, 'Thank you for subscribing!')
            return redirect(request.META.get('HTTP_REFERER', '/'))
    else:
        form = NewsletterSubscribeForm()
    return render(request, 'partials/newsletter_subscribe_form.html', {'form': form})