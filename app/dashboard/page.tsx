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
  },
  {
    id: 2,
    type: "forum",
    title: "Создал пост в форуме 'Математика'",
    time: "5 часов назад",
  },
  {
    id: 3,
    type: "friend",
    title: "Добавил в друзья Аlex из 12A",
    time: "1 день назад",
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
    <div className="min-h-screen bg-white">
      {/* Навигация */}
      <div className="sticky top-0 z-10 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-black rounded-md flex items-center justify-center">
                <span className="text-lg font-bold text-white">IP</span>
              </div>
              <div>
                <span className="font-bold text-gray-900 text-lg">IgnitePride</span>
                <p className="text-xs text-gray-500">Обучающая сеть</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Button variant="ghost" size="sm" className="rounded-md">
                <Search className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="rounded-md">
                <Bell className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" onClick={() => router.push("/chat")} className="rounded-md">
                <MessageSquare className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="rounded-md">
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
            <Card className="border border-gray-200 bg-white">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <Avatar className="w-16 h-16 border-2 border-gray-200">
                    <AvatarImage src="/placeholder.svg?height=64&width=64" />
                    <AvatarFallback className="bg-gray-200 text-gray-800 text-xl font-bold">И</AvatarFallback>
                  </Avatar>
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">Привет, Ажар!</h2>
                    <p className="text-gray-600">Готов к новым знаниям?</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Статистика обучения */}
            <Card className="border border-gray-200 bg-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-gray-700" />
                  Твой прогресс
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-gray-50 border border-gray-200 rounded-md">
                    <div className="text-2xl font-bold text-gray-900">{LEARNING_STATS.coursesCompleted}</div>
                    <div className="text-sm text-gray-600">Курсов пройдено</div>
                  </div>
                  <div className="text-center p-3 bg-gray-50 border border-gray-200 rounded-md">
                    <div className="text-2xl font-bold text-gray-900">{LEARNING_STATS.studyStreak}</div>
                    <div className="text-sm text-gray-600">Дней подряд</div>
                  </div>
                  <div className="text-center p-3 bg-gray-50 border border-gray-200 rounded-md">
                    <div className="text-2xl font-bold text-gray-900">{LEARNING_STATS.forumPosts}</div>
                    <div className="text-sm text-gray-600">Постов в форуме</div>
                  </div>
                  <div className="text-center p-3 bg-gray-50 border border-gray-200 rounded-md">
                    <div className="text-2xl font-bold text-gray-900">{LEARNING_STATS.friendsCount}</div>
                    <div className="text-sm text-gray-600">Друзей</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Последняя активность */}
            <Card className="border border-gray-200 bg-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-gray-700" />
                  Последняя активность
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {RECENT_ACTIVITY.map((activity) => (
                  <div key={activity.id} className="flex items-start gap-3 p-3 bg-gray-50 border border-gray-200 rounded-md">
                    <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                      <span className="text-xs text-gray-600">{activity.id}</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">{activity.title}</p>
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
                className="h-24 bg-white border border-black text-black hover:bg-gray-50 rounded-md flex flex-col items-center justify-center gap-2"
              >
                <MessageSquare className="w-8 h-8" />
                <span className="font-semibold">Форум</span>
              </Button>
              <Button
                onClick={() => router.push("/courses")}
                className="h-24 bg-white border border-black text-black hover:bg-gray-50 rounded-md flex flex-col items-center justify-center gap-2"
              >
                <BookOpen className="w-8 h-8" />
                <span className="font-semibold">Курсы</span>
              </Button>
              <Button
                onClick={() => router.push("/study-groups")}
                className="h-24 bg-white border border-black text-black hover:bg-gray-50 rounded-md flex flex-col items-center justify-center gap-2"
              >
                <Users className="w-8 h-8" />
                <span className="font-semibold">Группы</span>
              </Button>
              <Button
                onClick={() => router.push("/discover")}
                className="h-24 bg-white border border-black text-black hover:bg-gray-50 rounded-md flex flex-col items-center justify-center gap-2"
              >
                <Users className="w-8 h-8" />
                <span className="font-semibold">Знакомства</span>
              </Button>
            </div>

            {/* Рекомендуемые курсы */}
            <Card className="border border-gray-200 bg-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Brain className="w-5 h-5 text-gray-700" />
                  Рекомендуемые курсы
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="p-4 border border-gray-200 rounded-md hover:border-gray-300 transition-colors cursor-pointer">
                    <div className="flex items-start gap-3">
                      <div className="w-12 h-12 bg-gray-200 rounded-md flex items-center justify-center">
                        <span className="text-xl text-gray-600">P</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900">Python для начинающих</h3>
                        <p className="text-sm text-gray-600">Изучи основы программирования</p>
                        <div className="flex items-center gap-2 mt-2">
                          <Badge className="bg-gray-100 text-gray-800 border border-gray-300">Программирование</Badge>
                          <span className="text-xs text-gray-500">4.8 • 2.3k студентов</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 border border-gray-200 rounded-md hover:border-gray-300 transition-colors cursor-pointer">
                    <div className="flex items-start gap-3">
                      <div className="w-12 h-12 bg-gray-200 rounded-md flex items-center justify-center">
                        <span className="text-xl text-gray-600">M</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900">Математика SAT 2025</h3>
                        <p className="text-sm text-gray-600">Подготовка к экзамену</p>
                        <div className="flex items-center gap-2 mt-2">
                          <Badge className="bg-gray-100 text-gray-800 border border-gray-300">Математика</Badge>
                          <span className="text-xs text-gray-500">4.9 • 1.8k студентов</span>
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
            <Card className="border border-gray-200 bg-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Fire className="w-5 h-5 text-gray-700" />
                  Горячие темы
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {TRENDING_TOPICS.map((topic, index) => (
                  <div
                    key={index}
                    className="p-3 bg-gray-50 border border-gray-200 rounded-md hover:bg-gray-100 transition-colors cursor-pointer"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium text-sm text-gray-900">{topic.name}</h4>
                        <p className="text-xs text-gray-500">{topic.posts} постов</p>
                      </div>
                      <Badge className="bg-gray-100 text-gray-800 border border-gray-300 text-xs">{topic.trend}</Badge>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Онлайн друзья */}
            <Card className="border border-gray-200 bg-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-gray-700" />
                  Друзья онлайн
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
                    className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-md transition-colors cursor-pointer"
                  >
                    <div className="relative">
                      <Avatar className="w-10 h-10 border border-gray-300">
                        <AvatarFallback className="bg-gray-200 text-gray-800 font-bold">{friend.avatar}</AvatarFallback>
                      </Avatar>
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-gray-500 border-2 border-white rounded-full"></div>
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-sm text-gray-900">{friend.name}</p>
                      <p className="text-xs text-gray-500">{friend.subject}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Мотивационная карточка */}
            <Card className="border border-gray-200 bg-white">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gray-200 rounded-full mx-auto mb-3 flex items-center justify-center">
                  <span className="text-xl text-gray-600">T</span>
                </div>
                <h3 className="font-bold text-lg mb-2 text-gray-900">Цель недели</h3>
                <p className="text-sm text-gray-600 mb-4">Пройди 3 урока по математике</p>
                <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
                  <div className="bg-gray-600 h-2 rounded-full" style={{ width: "60%" }}></div>
                </div>
                <p className="text-xs text-gray-500">2 из 3 уроков завершено</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <BottomNavigation />
    </div>
  )
}
