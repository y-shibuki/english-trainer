from google.genai import types

from .client import get_client
from .schemas import VocabularyQuestion

MODEL = "gemini-2.0-flash-lite"

SYSTEM_PROMPT = """
You are an expert English teacher creating vocabulary quiz questions for Japanese software engineers learning technical English.
Your role is to extract one important technical word from the given sentence and generate a vocabulary quiz question in the specified JSON format.
Always respond with valid JSON only.
""".strip()

USER_PROMPT_TEMPLATE = """
Extract one important technical English word from the following sentence and create a vocabulary quiz question.

Sentence: {sentence}

Requirements:
- target_word: The extracted English word (lowercase)
- question_text: Same as target_word (the word itself is the question)
- correct_answer: The Japanese translation of target_word
- choices: Array of exactly 4 Japanese options including correct_answer (shuffled order)
- explanation: 1-2 sentences in Japanese explaining the word's meaning and usage in software engineering context
""".strip()


def generate(sentence: str) -> VocabularyQuestion:
    client = get_client()
    response = client.models.generate_content(
        model=MODEL,
        contents=USER_PROMPT_TEMPLATE.format(sentence=sentence),
        config=types.GenerateContentConfig(
            system_instruction=SYSTEM_PROMPT,
            response_mime_type="application/json",
            response_schema=VocabularyQuestion,
        ),
    )
    return VocabularyQuestion.model_validate_json(response.text)
