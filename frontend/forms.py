# forms.py
import pycountry

from django import forms





class NewsletterSubscribeForm(forms.Form):
    email = forms.EmailField(
        label="Email address",
        widget=forms.EmailInput(attrs={
            'class': 'form-control',
            'placeholder': 'Enter your email',
            'required': 'required',
        })
    )