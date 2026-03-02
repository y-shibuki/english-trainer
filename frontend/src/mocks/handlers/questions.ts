import { http, HttpResponse } from 'msw'
import { mockQuestions } from '../data/questions'

export const questionHandlers = [
  http.get('http://localhost:8000/api/v1/questions', ({ request }) => {
    const url = new URL(request.url)
    const type = url.searchParams.get('type')
    const limit = Number(url.searchParams.get('limit') ?? 20)
    const offset = Number(url.searchParams.get('offset') ?? 0)

    let filtered = mockQuestions
    if (type === 'vocabulary' || type === 'fill_in_the_blank') {
      filtered = filtered.filter((q) => q.type === type)
    }

    const items = filtered.slice(offset, offset + limit)
    return HttpResponse.json({
      total: filtered.length,
      limit,
      offset,
      items,
    })
  }),

  http.post('http://localhost:8000/api/v1/questions/:id/answer', async ({ params, request }) => {
    const question = mockQuestions.find((q) => q.id === params['id'])
    if (!question) {
      return HttpResponse.json(
        { error: { code: 'NOT_FOUND', message: 'Question not found' } },
        { status: 404 },
      )
    }

    const body = (await request.json()) as { answer: string }
    const isCorrect =
      body.answer.trim().toLowerCase() === question.correct_answer.trim().toLowerCase()

    return HttpResponse.json({
      question_id: question.id,
      is_correct: isCorrect,
      correct_answer: question.correct_answer,
      explanation: question.explanation,
    })
  }),
]
