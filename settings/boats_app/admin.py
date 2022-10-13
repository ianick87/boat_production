from django.contrib import admin
from .models import BoatPic, Boat

# Register your models here.


class BoatPicAdmin(admin.ModelAdmin):
  list_display = ['id', 'img']
  fields = ['img', 'boat']

class BoatPicInline(admin.TabularInline):
    model = BoatPic

class BoatAdmin(admin.ModelAdmin):
    model = Boat
    inlines = [
        BoatPicInline,
    ]


admin.site.register(Boat, BoatAdmin)
admin.site.register(BoatPic, BoatPicAdmin)

# admin.site.register(Boat)
# admin.site.register(BoatPic)