from google.genai import types

from .client import get_client
from .schemas import FillInBlankQuestion

MODEL = "gemini-2.0-flash-lite"

SYSTEM_PROMPT = """
You are an expert English teacher creating fill-in-the-blank quiz questions for Japanese software engineers learning technical English.
Your role is to take an English sentence, replace one important technical word with "___", and generate a quiz question in the specified JSON format.
Always respond with valid JSON only.
""".strip()

USER_PROMPT_TEMPLATE = """
Create a fill-in-the-blank quiz question from the following English sentence by replacing one important technical word with "___".

Sentence: {sentence}

Requirements:
- target_word: The English word that was replaced with "___" (lowercase)
- question_text: The original sentence with target_word replaced by "___"
- correct_answer: Same as target_word
- choices: Array of exactly 4 English word options including correct_answer (shuffled order, all lowercase)
- explanation: 1-2 sentences in Japanese explaining why target_word fits and its meaning in context
""".strip()


def generate(sentence: str) -> FillInBlankQuestion:
    client = get_client()
    response = client.models.generate_content(
        model=MODEL,
        contents=USER_PROMPT_TEMPLATE.format(sentence=sentence),
        config=types.GenerateContentConfig(
            system_instruction=SYSTEM_PROMPT,
            response_mime_type="application/json",
            response_schema=FillInBlankQuestion,
        ),
    )
    return FillInBlankQuestion.model_validate_json(response.text)
