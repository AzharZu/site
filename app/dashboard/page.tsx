"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  BookOpen,
  Users,
  MessageSquare,
  TrendingUp,
  Calendar,
  Search,
  Bell,
  Settings,
  FlameIcon as Fire,
  Brain,
} from "lucide-react"
import { useRouter } from "next/navigation"
import { BottomNavigation } from "@/components/navigation/bottom-nav"

// Моковые данные для дашборда
const LEARNING_STATS = {
  coursesCompleted: 12,
  studyStreak: 15,
  forumPosts: 8,
  friendsCount: 24,
}

const RECENT_ACTIVITY = [
  {
    id: 1,
    type: "course",
    title: "Завершил курс 'Основы программирования'",
    time: "2 часа назад",
    icon: "🎓",
    color: "bg-green-100 text-green-700",
  },
  {
    id: 2,
    type: "forum",
    title: "Создал пост в форуме 'Математика'",
    time: "5 часов назад",
    icon: "💬",
    color: "bg-blue-100 text-blue-700",
  },
  {
    id: 3,
    type: "friend",
    title: "Добавил в друзья Аlex из 12A",
    time: "1 день назад",
    icon: "👥",
    color: "bg-purple-100 text-purple-700",
  },
]

const TRENDING_TOPICS = [
  { name: "Подготовка к ЕНТ/SAT", posts: 156, trend: "+12%" },
  { name: "Программирование", posts: 89, trend: "+8%" },
  { name: "Английский язык", posts: 67, trend: "+15%" },
  { name: "Физика", posts: 45, trend: "+5%" },
]

export default function DashboardPage() {
  const router = useRouter()

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
                <span className="font-bold text-gray-900 text-lg">IgnitePride</span>
                <p className="text-xs text-gray-500">Обучающая сеть</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Button variant="ghost" size="sm" className="rounded-xl">
                <Search className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="rounded-xl">
                <Bell className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" onClick={() => router.push("/chat")} className="rounded-xl">
                <MessageSquare className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="rounded-xl">
                <Settings className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Левая колонка - Статистика */}
          <div className="space-y-6">
            {/* Приветствие */}
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <Avatar className="w-16 h-16 border-4 border-white shadow-lg">
                    <AvatarImage src="/placeholder.svg?height=64&width=64" />
                    <AvatarFallback className="ignite-gradient text-white text-xl font-bold">И</AvatarFallback>
                  </Avatar>
                  <div>
                    <h2 className="text-xl font-bold">Привет, Ажар!</h2>
                    <p className="text-gray-600">Готов к новым знаниям?</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Статистика обучения */}
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-orange-500" />
                  Твой прогресс 📊
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-green-50 rounded-xl">
                    <div className="text-2xl font-bold text-green-600">{LEARNING_STATS.coursesCompleted}</div>
                    <div className="text-sm text-green-700">Курсов пройдено</div>
                  </div>
                  <div className="text-center p-3 bg-orange-50 rounded-xl">
                    <div className="text-2xl font-bold text-orange-600">{LEARNING_STATS.studyStreak}</div>
                    <div className="text-sm text-orange-700">Дней подряд</div>
                  </div>
                  <div className="text-center p-3 bg-blue-50 rounded-xl">
                    <div className="text-2xl font-bold text-blue-600">{LEARNING_STATS.forumPosts}</div>
                    <div className="text-sm text-blue-700">Постов в форуме</div>
                  </div>
                  <div className="text-center p-3 bg-purple-50 rounded-xl">
                    <div className="text-2xl font-bold text-purple-600">{LEARNING_STATS.friendsCount}</div>
                    <div className="text-sm text-purple-700">Друзей</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Последняя активность */}
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-blue-500" />
                  Последняя активность 📝
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {RECENT_ACTIVITY.map((activity) => (
                  <div key={activity.id} className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${activity.color}`}>
                      <span className="text-sm">{activity.icon}</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">{activity.title}</p>
                      <p className="text-xs text-gray-500">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Центральная колонка - Основной контент */}
          <div className="space-y-6">
            {/* Быстрые действия */}
            <div className="grid grid-cols-2 gap-4">
              <Button
                onClick={() => router.push("/forum")}
                className="h-24 ignite-gradient hover:opacity-90 rounded-2xl flex flex-col items-center justify-center gap-2"
              >
                <MessageSquare className="w-8 h-8" />
                <span className="font-semibold">Форум</span>
              </Button>
              <Button
                onClick={() => router.push("/courses")}
                className="h-24 learning-gradient hover:opacity-90 rounded-2xl flex flex-col items-center justify-center gap-2"
              >
                <BookOpen className="w-8 h-8" />
                <span className="font-semibold">Курсы</span>
              </Button>
              <Button
                onClick={() => router.push("/study-groups")}
                className="h-24 pride-gradient hover:opacity-90 rounded-2xl flex flex-col items-center justify-center gap-2"
              >
                <Users className="w-8 h-8" />
                <span className="font-semibold">Группы</span>
              </Button>
              <Button
                onClick={() => router.push("/discover")}
                className="h-24 knowledge-gradient hover:opacity-90 rounded-2xl flex flex-col items-center justify-center gap-2"
              >
                <Users className="w-8 h-8" />
                <span className="font-semibold">Знакомства</span>
              </Button>
            </div>

            {/* Рекомендуемые курсы */}
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Brain className="w-5 h-5 text-purple-500" />
                  Рекомендуемые курсы 🎯
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="p-4 border border-gray-200 rounded-xl hover:border-orange-300 transition-colors cursor-pointer">
                    <div className="flex items-start gap-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                        <span className="text-xl">💻</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold">Python для начинающих</h3>
                        <p className="text-sm text-gray-600">Изучи основы программирования</p>
                        <div className="flex items-center gap-2 mt-2">
                          <Badge className="bg-blue-100 text-blue-700">Программирование</Badge>
                          <span className="text-xs text-gray-500">4.8 ⭐ • 2.3k студентов</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 border border-gray-200 rounded-xl hover:border-orange-300 transition-colors cursor-pointer">
                    <div className="flex items-start gap-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl flex items-center justify-center">
                        <span className="text-xl">🧮</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold">Математика SAT 2025</h3>
                        <p className="text-sm text-gray-600">Подготовка к экзамену</p>
                        <div className="flex items-center gap-2 mt-2">
                          <Badge className="bg-green-100 text-green-700">Математика</Badge>
                          <span className="text-xs text-gray-500">4.9 ⭐ • 1.8k студентов</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Правая колонка - Трендовые темы */}
          <div className="space-y-6">
            {/* Трендовые темы форума */}
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Fire className="w-5 h-5 text-red-500" />
                  Горячие темы 🔥
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {TRENDING_TOPICS.map((topic, index) => (
                  <div
                    key={index}
                    className="p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium text-sm">{topic.name}</h4>
                        <p className="text-xs text-gray-500">{topic.posts} постов</p>
                      </div>
                      <Badge className="bg-red-100 text-red-700 text-xs">{topic.trend}</Badge>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Онлайн друзья */}
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-green-500" />
                  Друзья онлайн 🟢
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  { name: "Аня", subject: "Изучает физику", avatar: "А" },
                  { name: "Максим", subject: "Решает задачи", avatar: "М" },
                  { name: "Лиза", subject: "Читает форум", avatar: "Л" },
                ].map((friend, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-xl transition-colors cursor-pointer"
                  >
                    <div className="relative">
                      <Avatar className="w-10 h-10">
                        <AvatarFallback className="pride-gradient text-white font-bold">{friend.avatar}</AvatarFallback>
                      </Avatar>
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-sm">{friend.name}</p>
                      <p className="text-xs text-gray-500">{friend.subject}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Мотивационная карточка */}
            <Card className="border-0 shadow-lg bg-gradient-to-r from-orange-500 to-red-500 text-white">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-3">🎯</div>
                <h3 className="font-bold text-lg mb-2">Цель недели</h3>
                <p className="text-sm opacity-90 mb-4">Пройди 3 урока по математике</p>
                <div className="w-full bg-white/20 rounded-full h-2 mb-3">
                  <div className="bg-white h-2 rounded-full" style={{ width: "60%" }}></div>
                </div>
                <p className="text-xs opacity-75">2 из 3 уроков завершено</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <BottomNavigation />
    </div>
  )
}
