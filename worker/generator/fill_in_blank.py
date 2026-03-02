from google.genai import types

from .client import get_client
from .schemas import FillInBlankQuestion

MODEL = "gemini-2.0-flash-lite"

SYSTEM_PROMPT = """
あなたは日本人ソフトウェアエンジニア向けの英語学習クイズを作成する英語教師です。
与えられた英文の重要な技術用語を「___」に置き換えた穴埋め問題を、指定されたJSON形式で生成してください。
必ず有効なJSONのみで回答してください。
""".strip()

USER_PROMPT_TEMPLATE = """
以下の英文から重要な技術英単語を1つ「___」に置き換えた穴埋め問題を作成してください。

英文: {sentence}

出力要件:
- target_word: 「___」に置き換えた英単語（小文字）
- question_text: target_word を「___」に置き換えた元の英文
- correct_answer: target_word と同じ値
- choices: correct_answer を含む英単語の選択肢4つ（シャッフルした順序、すべて小文字）
- explanation: その英単語が文中でなぜ適切かとその意味を説明する1〜2文の日本語解説
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
