import { useNavigate } from 'react-router'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function TopPage() {
  const navigate = useNavigate()

  const handleSelect = (type: 'vocabulary' | 'fill_in_the_blank') => {
    navigate(`/quiz?type=${type}`)
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">English Trainer</h1>
          <p className="text-muted-foreground">問題形式を選択してください</p>
        </div>

        <div className="grid gap-4">
          <Card
            className="cursor-pointer transition-colors hover:bg-accent"
            onClick={() => handleSelect('vocabulary')}
          >
            <CardHeader>
              <CardTitle>単語問題</CardTitle>
              <CardDescription>
                文中の空欄に入る単語を4択から選ぶ
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full" onClick={() => handleSelect('vocabulary')}>
                はじめる
              </Button>
            </CardContent>
          </Card>

          <Card
            className="cursor-pointer transition-colors hover:bg-accent"
            onClick={() => handleSelect('fill_in_the_blank')}
          >
            <CardHeader>
              <CardTitle>穴埋め問題</CardTitle>
              <CardDescription>
                文中の空欄に入る英単語を入力する
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full" variant="outline" onClick={() => handleSelect('fill_in_the_blank')}>
                はじめる
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
