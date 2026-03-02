export type VocabularyDetails = {
  target_word: string
  choices: string[]
}

export type FillInTheBlankDetails = {
  target_word: string
  choices: string[]
}

export type Question = {
  id: string
  sentence_id: string
  type: 'vocabulary' | 'fill_in_the_blank'
  question_text: string
  correct_answer: string
  explanation: string
  details: VocabularyDetails | FillInTheBlankDetails
  source: {
    title: string
    url: string | null
  }
  created_at: string
}

export type QuestionListResponse = {
  total: number
  limit: number
  offset: number
  items: Question[]
}

export type AnswerResponse = {
  question_id: string
  is_correct: boolean
  correct_answer: string
  explanation: string
}
