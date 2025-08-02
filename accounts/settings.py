AUTH_USER_MODEL = "accounts.User"
INSTALLED_APPS = [
    "rest_framework",
    "rest_framework_simplejwt.token_blacklist",
    "accounts",
]
REST_FRAMEWORK = {
    "DEFAULT_AUTHENTICATION_CLASSES": (
        "rest_framework_simplejwt.authentication.JWTAuthentication",
    ),
}