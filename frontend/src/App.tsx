import { BrowserRouter, Routes, Route } from 'react-router'
import TopPage from '@/pages/TopPage'
import QuizPage from '@/pages/QuizPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TopPage />} />
        <Route path="/quiz" element={<QuizPage />} />
      </Routes>
    </BrowserRouter>
  )
}
