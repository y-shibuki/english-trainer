from google.genai import types

from .client import get_client
from .schemas import VocabularyQuestion

MODEL = "gemini-2.0-flash-lite"

SYSTEM_PROMPT = """
あなたは日本人ソフトウェアエンジニア向けの英語学習クイズを作成する英語教師です。
与えられた英文から重要な技術用語を1つ抽出し、指定されたJSON形式で単語クイズを生成してください。
必ず有効なJSONのみで回答してください。
""".strip()

USER_PROMPT_TEMPLATE = """
以下の英文から重要な技術英単語を1つ抽出し、単語クイズを作成してください。

英文: {sentence}

出力要件:
- target_word: 抽出した英単語（小文字）
- question_text: target_word と同じ値（英単語そのものが問題になる）
- correct_answer: target_word の日本語訳
- choices: correct_answer を含む日本語の選択肢4つ（シャッフルした順序）
- explanation: ソフトウェアエンジニアリングの文脈でその単語の意味と使い方を説明する1〜2文の日本語解説
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
