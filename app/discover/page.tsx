"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { MessageCircle, User, Settings, Search, Users, Heart, X, Star } from "lucide-react"
import { useRouter } from "next/navigation"

// Моковые данные подростков для знакомств
const MOCK_STUDENTS = [
  {
    id: 1,
    name: "Аня",
    age: 16,
    school: "Гимназия №5",
    grade: "10 класс",
    location: "Алматы",
    bio: "Обожаю математику и рисование! Готовлюсь к олимпиаде по алгебре. Ищу друзей для совместной подготовки к SAT 📚✨",
    interests: ["Математика", "Рисование", "K-Pop", "Подготовка к SAT"],
    studyGoals: ["SAT/IELTS", "Олимпиады"],
    avatar: "/placeholder.svg?height=400&width=400",
    online: true,
    compatibility: 92,
  },
  {
    id: 2,
    name: "Максат",
    age: 17,
    school: "Лицей №12",
    grade: "11 класс",
    location: "Петропавловск",
    bio: "Программирую на Python и изучаю машинное обучение. Создаю проекты и участвую в хакатонах. Давайте кодить вместе! 💻🚀",
    interests: ["Программирование", "ИИ", "Хакатоны", "YouTube"],
    studyGoals: ["Поступление в IT-вуз", "Изучение ML"],
    avatar: "/placeholder.svg?height=400&width=400",
    online: false,
    compatibility: 87,
  },
  {
    id: 3,
    name: "Лиза",
    age: 15,
    school: "Школа №7",
    grade: "9 класс",
    location: "Костанай",
    bio: "Изучаю английский и французский, мечтаю о путешествиях. Веду блог о языках и культуре. Ищу языковых партнеров! 🌍📖",
    interests: ["Английский язык", "Французский", "Путешествия", "Блоггинг"],
    studyGoals: ["Сдать IELTS", "Поступить на лингвистику"],
    avatar: "/placeholder.svg?height=400&width=400",
    online: true,
    compatibility: 78,
  },
  {
    id: 4,
    name: "Артем",
    age: 16,
    school: "Физмат лицей",
    grade: "10 класс",
    location: "Нью-Йорк",
    bio: "Увлекаюсь физикой и астрономией. Участвую в научных конференциях. Хочу стать астрофизиком! Ищу единомышленников 🔭⭐",
    interests: ["Физика", "Астрономия", "Наука", "Конференции"],
    studyGoals: ["Олимпиада по физике", "Научная работа"],
    avatar: "/placeholder.svg?height=400&width=400",
    online: true,
    compatibility: 85,
  },
]

export default function DiscoverPage() {
  const [currentUserIndex, setCurrentUserIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [matches, setMatches] = useState<number[]>([])
  const router = useRouter()

  const currentUser = MOCK_STUDENTS[currentUserIndex]

  const handleSwipe = (direction: "left" | "right") => {
    if (isAnimating) return

    setIsAnimating(true)

    // Добавляем в матчи при лайке
    if (direction === "right" && currentUser) {
      setMatches((prev) => [...prev, currentUser.id])
    }

    // Добавляем класс анимации
    const card = document.querySelector(".discover-card")
    if (card) {
      card.classList.add(direction === "right" ? "slide-right" : "slide-left")
    }

    setTimeout(() => {
      setCurrentUserIndex((prev) => (prev + 1) % MOCK_STUDENTS.length)
      setIsAnimating(false)

      // Убираем класс анимации
      if (card) {
        card.classList.remove("slide-right", "slide-left")
      }
    }, 300)
  }

  if (!currentUser) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-purple-50 flex items-center justify-center">
        <Card className="p-8 text-center max-w-md">
          <div className="text-6xl mb-4">🎉</div>
          <h2 className="text-2xl font-bold mb-4">Пока все! 🌟</h2>
          <p className="text-gray-600 mb-4">Попробуй расширить критерии поиска или зайди позже</p>
          <Button onClick={() => setCurrentUserIndex(0)} className="ignite-gradient hover:opacity-90 rounded-xl">
            Начать сначала 🔄
          </Button>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-purple-50">
      {/* Навигация */}
      <div className="sticky top-0 z-10 bg-white/80 backdrop-blur-md border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 ignite-gradient rounded-2xl flex items-center justify-center">
                <span className="text-lg font-bold text-white">🔥</span>
              </div>
              <div>
                <span className="font-bold text-gray-900 text-lg">Знакомства</span>
                <p className="text-xs text-gray-500">Найди друзей для учебы!</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Button variant="ghost" size="sm" className="rounded-xl">
                <Search className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" onClick={() => router.push("/matches")} className="rounded-xl relative">
                <Heart className="w-5 h-5" />
                {matches.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {matches.length}
                  </span>
                )}
              </Button>
              <Button variant="ghost" size="sm" onClick={() => router.push("/chat")} className="rounded-xl">
                <MessageCircle className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" onClick={() => router.push("/dashboard")} className="rounded-xl">
                <Settings className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Основной контент */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-sm mx-auto">
          <Card className="discover-card relative overflow-hidden shadow-2xl border-0 bg-white/90 backdrop-blur-sm">
            {/* Статус онлайн */}
            {currentUser.online && (
              <div className="absolute top-4 right-4 z-10 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                Онлайн
              </div>
            )}

            {/* Совместимость */}
            <div className="absolute top-4 left-4 z-10 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
              <Star className="w-3 h-3" />
              {currentUser.compatibility}% совместимость
            </div>

            {/* Фото пользователя */}
            <div className="relative h-96 bg-gradient-to-br from-orange-200 to-red-200">
              <Avatar className="w-full h-full rounded-none">
                <AvatarImage src={currentUser.avatar || "/placeholder.svg"} className="object-cover" />
                <AvatarFallback className="rounded-none text-6xl bg-gradient-to-br from-orange-400 to-red-400 text-white">
                  <User className="w-24 h-24" />
                </AvatarFallback>
              </Avatar>

              {/* Градиентный оверлей */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Информация поверх фото */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h2 className="text-2xl font-bold mb-1 flex items-center gap-2">
                  {currentUser.name}, {currentUser.age}
                  <span className="text-lg">✨</span>
                </h2>
                <p className="text-sm opacity-90 mb-1">{currentUser.school}</p>
                <p className="text-sm opacity-90 mb-1">{currentUser.grade}</p>
                <p className="text-sm opacity-75 flex items-center gap-1">📍 {currentUser.location}</p>
              </div>
            </div>

            <CardContent className="p-6">
              {/* Описание */}
              <div className="mb-4">
                <p className="text-gray-700 leading-relaxed">{currentUser.bio}</p>
              </div>

              {/* Учебные цели */}
              <div className="space-y-3 mb-4">
                <h3 className="font-semibold text-gray-900 flex items-center gap-2">
                  <span className="text-lg">🎯</span>
                  Учебные цели:
                </h3>
                <div className="flex flex-wrap gap-2">
                  {currentUser.studyGoals.map((goal) => (
                    <Badge
                      key={goal}
                      className="bg-orange-100 text-orange-700 hover:bg-orange-200 border border-orange-200 rounded-xl px-3 py-1"
                    >
                      {goal}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Интересы */}
              <div className="space-y-3">
                <h3 className="font-semibold text-gray-900 flex items-center gap-2">
                  <span className="text-lg">💫</span>
                  Интересы:
                </h3>
                <div className="flex flex-wrap gap-2">
                  {currentUser.interests.map((interest) => (
                    <Badge
                      key={interest}
                      className="bg-purple-100 text-purple-700 hover:bg-purple-200 border border-purple-200 rounded-xl px-3 py-1"
                    >
                      {interest}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Кнопки действий */}
          <div className="flex justify-center gap-6 mt-8">
            <Button
              size="lg"
              variant="outline"
              className="w-16 h-16 rounded-full border-3 border-red-200 hover:border-red-300 hover:bg-red-50 bg-white shadow-lg"
              onClick={() => handleSwipe("left")}
              disabled={isAnimating}
            >
              <X className="w-7 h-7 text-red-500" />
            </Button>

            <Button
              size="lg"
              className="w-20 h-20 rounded-full ignite-gradient hover:opacity-90 shadow-lg transform hover:scale-105 transition-all"
              onClick={() => handleSwipe("right")}
              disabled={isAnimating}
            >
              <Heart className="w-8 h-8 text-white" />
            </Button>
          </div>

          {/* Подсказки */}
          <div className="flex justify-between mt-6 px-4">
            <div className="text-center">
              <div className="text-2xl mb-1">❌</div>
              <p className="text-xs text-gray-500">Пропустить</p>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-1">💖</div>
              <p className="text-xs text-gray-500">Хочу дружить</p>
            </div>
          </div>

          {/* Индикатор прогресса */}
          <div className="flex justify-center mt-6">
            <div className="bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-sm">
              <p className="text-sm text-gray-600 flex items-center gap-2">
                <Users className="w-4 h-4" />
                {currentUserIndex + 1} из {MOCK_STUDENTS.length}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
