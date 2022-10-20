from django.contrib import admin
from .models import BoatPic, Boat
from django.utils.html import format_html

# Register your models here.


class BoatPicAdmin(admin.ModelAdmin):
    # list_display = ['id', 'img']
    list_display = ['id','image_tag',]
    fields = ['image_tag', 'boat']

    def image_tag(self, obj):
        return format_html('<img src="{}" style="max-width:200px; max-height:200px"/>'.format(obj.img.url))


class BoatPicInline(admin.TabularInline):
    model = BoatPic
    
class BoatAdmin(admin.ModelAdmin):
    model = Boat
    inlines = [
        BoatPicInline,
    ]


admin.site.register(Boat, BoatAdmin)
admin.site.register(BoatPic, BoatPicAdmin)