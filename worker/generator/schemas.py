from pydantic import BaseModel


class VocabularyQuestion(BaseModel):
    target_word: str
    question_text: str
    correct_answer: str
    choices: list[str]
    explanation: str


class FillInBlankQuestion(BaseModel):
    target_word: str
    question_text: str
    correct_answer: str
    choices: list[str]
    explanation: str
