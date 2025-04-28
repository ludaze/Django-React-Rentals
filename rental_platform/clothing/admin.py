from django.contrib import admin
from clothing.models import ClothingItem
# Register your models here.

class ClothingItemAdmin(admin.ModelAdmin):
    list_display = ('name', 'size', 'color', 'price_per_day', 'owner')
    search_fields = ('name', 'size', 'color')
    list_filter = ('size', 'color')

admin.site.register(ClothingItem, ClothingItemAdmin)