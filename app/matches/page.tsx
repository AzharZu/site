"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, MessageCircle, Heart, Star, Calendar } from "lucide-react"
import { useRouter } from "next/navigation"
import { BottomNavigation } from "@/components/navigation/bottom-nav"

// Моковые данные матчей
const MATCHES = [
  {
    id: 1,
    name: "Аня",
    age: 16,
    school: "Гимназия №5",
    location: "Москва",
    avatar: "/placeholder.svg?height=100&width=100",
    compatibility: 92,
    commonInterests: ["Математика", "Подготовка к ЕНТ"],
    lastActive: "2 часа назад",
    matchedAt: "Сегодня",
    hasMessage: false,
  },
  {
    id: 2,
    name: "Максим",
    age: 17,
    school: "Лицей №12",
    location: "Санкт-Петербург",
    avatar: "/placeholder.svg?height=100&width=100",
    compatibility: 87,
    commonInterests: ["Программирование", "YouTube"],
    lastActive: "Онлайн",
    matchedAt: "Вчера",
    hasMessage: true,
  },
  {
    id: 3,
    name: "Лиза",
    age: 15,
    school: "Школа №7",
    location: "Москва",
    avatar: "/placeholder.svg?height=100&width=100",
    compatibility: 78,
    commonInterests: ["Английский язык", "Блоггинг"],
    lastActive: "5 минут назад",
    matchedAt: "3 дня назад",
    hasMessage: false,
  },
]

export default function MatchesPage() {
  const [selectedMatch, setSelectedMatch] = useState<number | null>(null)
  const router = useRouter()

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-purple-50">
      {/* Заголовок */}
      <div className="sticky top-0 z-10 bg-white/80 backdrop-blur-md border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="sm" onClick={() => router.push("/discover")} className="rounded-xl">
                <ArrowLeft className="w-5 h-5" />
              </Button>
              <div>
                <h1 className="text-xl font-bold flex items-center gap-2">💖 Мои матчи</h1>
                <p className="text-sm text-gray-500">Люди, которым ты понравился!</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Статистика */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <Card className="border-0 shadow-lg bg-gradient-to-r from-pink-500 to-red-500 text-white">
              <CardContent className="p-6 text-center">
                <Heart className="w-8 h-8 mx-auto mb-2" />
                <div className="text-2xl font-bold">{MATCHES.length}</div>
                <div className="text-sm opacity-90">Взаимных лайков</div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg bg-gradient-to-r from-purple-500 to-blue-500 text-white">
              <CardContent className="p-6 text-center">
                <MessageCircle className="w-8 h-8 mx-auto mb-2" />
                <div className="text-2xl font-bold">{MATCHES.filter((m) => m.hasMessage).length}</div>
                <div className="text-sm opacity-90">Начатых чатов</div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg bg-gradient-to-r from-orange-500 to-yellow-500 text-white">
              <CardContent className="p-6 text-center">
                <Star className="w-8 h-8 mx-auto mb-2" />
                <div className="text-2xl font-bold">85%</div>
                <div className="text-sm opacity-90">Средняя совместимость</div>
              </CardContent>
            </Card>
          </div>

          {/* Список матчей */}
          <div className="space-y-4">
            {MATCHES.map((match) => (
              <Card
                key={match.id}
                className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all cursor-pointer"
                onClick={() => setSelectedMatch(match.id)}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-6">
                    <div className="relative">
                      <Avatar className="w-20 h-20 border-4 border-white shadow-lg">
                        <AvatarImage src={match.avatar || "/placeholder.svg"} />
                        <AvatarFallback className="ignite-gradient text-white text-xl font-bold">
                          {match.name[0]}
                        </AvatarFallback>
                      </Avatar>
                      {match.lastActive === "Онлайн" && (
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 border-2 border-white rounded-full"></div>
                      )}
                    </div>

                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="text-xl font-bold flex items-center gap-2">
                            {match.name}, {match.age}
                            <Badge className="bg-orange-100 text-orange-700 flex items-center gap-1">
                              <Star className="w-3 h-3" />
                              {match.compatibility}%
                            </Badge>
                          </h3>
                          <p className="text-gray-600">{match.school}</p>
                          <p className="text-sm text-gray-500 flex items-center gap-1 mt-1">
                            📍 {match.location} • {match.lastActive}
                          </p>
                        </div>
                        <div className="text-right">
                          <Badge className="bg-pink-100 text-pink-700 mb-2">Матч {match.matchedAt}</Badge>
                          {match.hasMessage && (
                            <div className="text-xs text-green-600 font-medium">💬 Есть сообщения</div>
                          )}
                        </div>
                      </div>

                      <div className="mb-4">
                        <p className="text-sm text-gray-600 mb-2">Общие интересы:</p>
                        <div className="flex flex-wrap gap-2">
                          {match.commonInterests.map((interest) => (
                            <Badge key={interest} className="bg-purple-100 text-purple-700 border border-purple-200">
                              {interest}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <Button
                          onClick={(e) => {
                            e.stopPropagation()
                            router.push(`/chat?user=${match.id}`)
                          }}
                          className="flex-1 ignite-gradient hover:opacity-90 rounded-xl"
                        >
                          <MessageCircle className="w-4 h-4 mr-2" />
                          {match.hasMessage ? "Продолжить чат" : "Написать сообщение"}
                        </Button>
                        <Button
                          variant="outline"
                          onClick={(e) => {
                            e.stopPropagation()
                            // Логика для планирования встречи
                          }}
                          className="rounded-xl bg-transparent"
                        >
                          <Calendar className="w-4 h-4 mr-2" />
                          Встретиться
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Пустое состояние */}
          {MATCHES.length === 0 && (
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardContent className="p-12 text-center">
                <div className="text-8xl mb-6">💔</div>
                <h2 className="text-2xl font-bold text-gray-600 mb-3">Пока нет матчей</h2>
                <p className="text-gray-500 mb-6 max-w-md mx-auto">
                  Продолжай знакомиться! Чем больше людей ты лайкнешь, тем больше шансов найти классных друзей 🌟
                </p>
                <Button
                  onClick={() => router.push("/discover")}
                  className="ignite-gradient hover:opacity-90 rounded-xl px-8 py-3 text-lg font-semibold"
                >
                  Продолжить знакомства 🚀
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
      <BottomNavigation />
    </div>
  )
}
