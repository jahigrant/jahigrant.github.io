import datetime
from django.conf import settings
from django.db import models
from django.db.models.signals import post_save
from django.dispatch import receiver
from django.utils.text import slugify
from markdownx.models import MarkdownxField

class Page(models.Model):
    title = models.CharField(max_length=200)
    subtitle = models.CharField(max_length=255, blank=True, null=True)
    slug = models.SlugField(unique=True, blank=True)
    content = MarkdownxField()
    image = models.ImageField(upload_to='page_images/', blank=True, null=True)
    image_url = models.URLField(blank=True, null=True)
    url = models.URLField(blank=True, null=True)
    link_page = models.ForeignKey('self', blank=True, null=True, on_delete=models.SET_NULL, related_name='linked_from')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)
        super().save(*args, **kwargs)
    def __str__(self):
        return self.title

class ContentBox(models.Model):
    page = models.ForeignKey(Page, related_name='content_boxes', on_delete=models.CASCADE)
    title = models.CharField(max_length=200, blank=True, null=True)
    content = MarkdownxField()
    image = models.ImageField(upload_to='contentbox_images/', blank=True, null=True)
    image_url = models.URLField(blank=True, null=True)
    order = models.PositiveIntegerField(default=0)
    class Meta:
        ordering = ['order']
    def __str__(self):
        return self.title or f"Box {self.order + 1}"

