import os
from dotenv import load_dotenv

load_dotenv()

class Settings:
    APP_NAME = "AI Career Coach"
    ENV = os.getenv("ENV", "development")

settings = Settings()
