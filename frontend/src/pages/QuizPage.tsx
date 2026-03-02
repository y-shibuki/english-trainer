import { useState, useEffect } from 'react'
import { useSearchParams, useNavigate } from 'react-router'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { getQuestions, submitAnswer } from '@/api/questions'
import type { Question, AnswerResponse, VocabularyDetails, FillInTheBlankDetails } from '@/types/question'

type AnswerState = {
  response: AnswerResponse
  userAnswer: string
}

export default function QuizPage() {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const type = searchParams.get('type') as 'vocabulary' | 'fill_in_the_blank' | null

  const [questions, setQuestions] = useState<Question[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [answered, setAnswered] = useState<AnswerState | null>(null)
  const [results, setResults] = useState<boolean[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [submitting, setSubmitting] = useState(false)
  const [isConfirmOpen, setIsConfirmOpen] = useState(false)

  useEffect(() => {
    if (!type) return
    setLoading(true)
    getQuestions({ type, limit: 10 })
      .then((res) => setQuestions(res.items))
      .catch(() => setError('問題の取得に失敗しました'))
      .finally(() => setLoading(false))
  }, [type])

  if (!type || (type !== 'vocabulary' && type !== 'fill_in_the_blank')) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">問題形式が不正です。</p>
      </div>
    )
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">読み込み中...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-destructive">{error}</p>
      </div>
    )
  }

  if (questions.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">問題がありません。</p>
      </div>
    )
  }

  const isFinished = currentIndex >= questions.length

  if (isFinished) {
    const correctCount = results.filter(Boolean).length
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="w-full max-w-md text-center">
          <CardHeader>
            <CardTitle className="text-2xl">結果</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-5xl font-bold">
              {correctCount}
              <span className="text-2xl text-muted-foreground">/{questions.length}</span>
            </p>
            <p className="text-muted-foreground">
              正答率 {Math.round((correctCount / questions.length) * 100)}%
            </p>
          </CardContent>
          <CardFooter className="flex gap-2 justify-center">
            <Button onClick={() => navigate(`/quiz?type=${type}`)}>もう一度</Button>
            <Button variant="outline" onClick={() => navigate('/')}>トップへ</Button>
          </CardFooter>
        </Card>
      </div>
    )
  }

  const question = questions[currentIndex]

  const handleChoiceAnswer = async (choice: string) => {
    if (submitting || answered) return
    setSubmitting(true)
    try {
      const res = await submitAnswer(question.id, choice)
      setAnswered({ response: res, userAnswer: choice })
      setResults((prev) => [...prev, res.is_correct])
    } finally {
      setSubmitting(false)
    }
  }

  const handleNext = () => {
    setAnswered(null)
    setCurrentIndex((i) => i + 1)
  }

  const choices = question.type === 'vocabulary'
    ? (question.details as VocabularyDetails).choices
    : (question.details as FillInTheBlankDetails).choices

  return (
    <>
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-2xl space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsConfirmOpen(true)}
            >
              ← ホームへ
            </Button>
            <Badge variant="outline">
              {type === 'vocabulary' ? '単語問題' : '穴埋め問題'}
            </Badge>
          </div>
          <span className="text-sm text-muted-foreground">
            {currentIndex + 1} / {questions.length}
          </span>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-normal leading-relaxed">
              {question.question_text}
            </CardTitle>
          </CardHeader>

          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-2">
              {choices.map((choice) => {
                const isSelected = answered?.userAnswer === choice
                const isCorrect = answered?.response.correct_answer === choice
                let variant: 'default' | 'outline' | 'destructive' = 'outline'
                if (answered) {
                  if (isCorrect) variant = 'default'
                  else if (isSelected && !isCorrect) variant = 'destructive'
                }
                return (
                  <Button
                    key={choice}
                    variant={variant}
                    disabled={!!answered || submitting}
                    onClick={() => handleChoiceAnswer(choice)}
                    className="h-auto py-3 text-left justify-start whitespace-normal"
                  >
                    {choice}
                  </Button>
                )
              })}
            </div>

            {answered && (
              <div
                className={`rounded-lg p-4 space-y-2 ${
                  answered.response.is_correct
                    ? 'bg-green-50 border border-green-200 dark:bg-green-950 dark:border-green-800'
                    : 'bg-red-50 border border-red-200 dark:bg-red-950 dark:border-red-800'
                }`}
              >
                <p className={`font-semibold ${answered.response.is_correct ? 'text-green-700 dark:text-green-300' : 'text-red-700 dark:text-red-300'}`}>
                  {answered.response.is_correct ? '✓ 正解' : `✗ 不正解（正解: ${answered.response.correct_answer}）`}
                </p>
                <p className="text-sm text-foreground">{answered.response.explanation}</p>
              </div>
            )}
          </CardContent>

          <CardFooter className="flex items-center justify-between flex-wrap gap-2">
            <div className="text-xs text-muted-foreground">
              出典:{' '}
              {question.source.url ? (
                <a
                  href={question.source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-foreground"
                >
                  {question.source.title}
                </a>
              ) : (
                question.source.title
              )}
            </div>
            {answered && (
              <Button onClick={handleNext}>
                {currentIndex + 1 < questions.length ? '次の問題 →' : '結果を見る'}
              </Button>
            )}
          </CardFooter>
        </Card>
      </div>
    </div>

    <Dialog open={isConfirmOpen} onOpenChange={setIsConfirmOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>ホームに戻りますか？</DialogTitle>
          <DialogDescription>進行状況は保存されません。</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="outline" onClick={() => setIsConfirmOpen(false)}>キャンセル</Button>
          <Button variant="destructive" onClick={() => navigate('/')}>戻る</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
    </>
  )
}
