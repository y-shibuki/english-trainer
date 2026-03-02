import { apiClient } from './client'
import type { AnswerResponse, QuestionListResponse } from '@/types/question'

export const getQuestions = (params: {
  type: 'vocabulary' | 'fill_in_the_blank'
  limit?: number
}) =>
  apiClient
    .get('api/v1/questions', { searchParams: params as Record<string, string | number> })
    .json<QuestionListResponse>()

export const submitAnswer = (id: string, answer: string) =>
  apiClient
    .post(`api/v1/questions/${id}/answer`, { json: { answer } })
    .json<AnswerResponse>()
