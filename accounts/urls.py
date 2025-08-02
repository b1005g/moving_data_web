from django.urls import path
from .views import SignupView, UsernameCheckView, LoginView
urlpatterns = [
  path("signup/", SignupView.as_view()),
  path("check-username/", UsernameCheckView.as_view()),
  path("login/",        LoginView.as_view(), name="token_obtain_pair"),
]