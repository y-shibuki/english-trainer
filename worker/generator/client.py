import os

from dotenv import load_dotenv
from google import genai

load_dotenv()


def get_client() -> genai.Client:
    api_key = os.environ["GOOGLE_API_KEY"]
    return genai.Client(api_key=api_key)
