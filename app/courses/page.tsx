"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { ArrowLeft, Search, Play, Clock, Users, Star, BookOpen, Award, Filter, TrendingUp } from "lucide-react"
import { useRouter } from "next/navigation"
import { BottomNavigation } from "@/components/navigation/bottom-nav"

// Моковые данные курсов
const COURSES = [
  {
    id: 1,
    title: "Python для начинающих",
    description: "Изучи основы программирования с нуля",
    instructor: "Анна Петрова",
    duration: "8 недель",
    students: 2340,
    rating: 4.8,
    price: "Бесплатно",
    level: "Начинающий",
    category: "Программирование",
    progress: 0,
    thumbnail: "💻",
    color: "bg-blue-500",
  },
  {
    id: 2,
    title: "Математика SAT 2025",
    description: "Полная подготовка к экзамену",
    instructor: "Михаил Иванов",
    duration: "12 недель",
    students: 1890,
    rating: 4.9,
    price: "Бесплатно",
    level: "Продвинутый",
    category: "Математика",
    progress: 45,
    thumbnail: "🧮",
    color: "bg-green-500",
  },
  {
    id: 3,
    title: "Английский для подростков",
    description: "Разговорная практика и грамматика",
    instructor: "Елена Смирнова",
    duration: "6 недель",
    students: 3200,
    rating: 4.7,
    price: "Бесплатно",
    level: "Средний",
    category: "Языки",
    progress: 78,
    thumbnail: "🇬🇧",
    color: "bg-purple-500",
  },
  {
    id: 4,
    title: "Физика: Механика",
    description: "Основы механики для школьников",
    instructor: "Дмитрий Козлов",
    duration: "10 недель",
    students: 1560,
    rating: 4.6,
    price: "Бесплатно",
    level: "Средний",
    category: "Физика",
    progress: 0,
    thumbnail: "⚡",
    color: "bg-yellow-500",
  },
]

const CATEGORIES = [
  { name: "Все", count: 156 },
  { name: "Программирование", count: 45 },
  { name: "Математика", count: 38 },
  { name: "Физика", count: 29 },
  { name: "Языки", count: 44 },
]

export default function CoursesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("Все")
  const router = useRouter()

  const filteredCourses = COURSES.filter(
    (course) =>
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (selectedCategory === "Все" || course.category === selectedCategory),
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-purple-50">
      {/* Заголовок */}
      <div className="sticky top-0 z-10 bg-white/80 backdrop-blur-md border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="sm" onClick={() => router.push("/dashboard")} className="rounded-xl">
                <ArrowLeft className="w-5 h-5" />
              </Button>
              <div>
                <h1 className="text-xl font-bold flex items-center gap-2">📚 Курсы IgnitePride</h1>
                <p className="text-sm text-gray-500">Учись в своем темпе с лучшими преподавателями</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Левая панель */}
          <div className="space-y-6">
            {/* Поиск */}
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardContent className="p-4">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Поиск курсов..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 rounded-xl border-2 focus:border-orange-400"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Категории */}
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Filter className="w-5 h-5 text-blue-500" />
                  Категории
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {CATEGORIES.map((category) => (
                  <button
                    key={category.name}
                    onClick={() => setSelectedCategory(category.name)}
                    className={`w-full text-left p-3 rounded-xl transition-colors ${
                      selectedCategory === category.name ? "ignite-gradient text-white" : "hover:bg-gray-100"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{category.name}</span>
                      <span
                        className={`text-sm ${
                          selectedCategory === category.name ? "text-orange-100" : "text-gray-500"
                        }`}
                      >
                        {category.count}
                      </span>
                    </div>
                  </button>
                ))}
              </CardContent>
            </Card>

            {/* Мой прогресс */}
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <TrendingUp className="w-5 h-5 text-green-500" />
                  Мой прогресс
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">3</div>
                  <div className="text-sm text-gray-600">Курса в процессе</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">12</div>
                  <div className="text-sm text-gray-600">Курсов завершено</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600">156</div>
                  <div className="text-sm text-gray-600">Часов обучения</div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Основной контент */}
          <div className="lg:col-span-3 space-y-6">
            {/* Статистика */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                <CardContent className="p-6 text-center">
                  <BookOpen className="w-8 h-8 mx-auto mb-2" />
                  <div className="text-2xl font-bold">156</div>
                  <div className="text-sm opacity-90">Доступных курсов</div>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg bg-gradient-to-r from-green-500 to-blue-500 text-white">
                <CardContent className="p-6 text-center">
                  <Users className="w-8 h-8 mx-auto mb-2" />
                  <div className="text-2xl font-bold">12.5k</div>
                  <div className="text-sm opacity-90">Активных студентов</div>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg bg-gradient-to-r from-orange-500 to-red-500 text-white">
                <CardContent className="p-6 text-center">
                  <Award className="w-8 h-8 mx-auto mb-2" />
                  <div className="text-2xl font-bold">89%</div>
                  <div className="text-sm opacity-90">Успешных выпускников</div>
                </CardContent>
              </Card>
            </div>

            {/* Список курсов */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredCourses.map((course) => (
                <Card
                  key={course.id}
                  className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all cursor-pointer"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div
                        className={`w-16 h-16 ${course.color} rounded-2xl flex items-center justify-center text-2xl`}
                      >
                        {course.thumbnail}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-lg mb-1">{course.title}</h3>
                        <p className="text-gray-600 text-sm mb-2">{course.description}</p>
                        <div className="flex items-center gap-2 mb-2">
                          <Badge className="bg-orange-100 text-orange-700">{course.category}</Badge>
                          <Badge variant="outline">{course.level}</Badge>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-sm text-gray-600">
                        <span className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          {course.students.toLocaleString()} студентов
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {course.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-yellow-500" />
                          {course.rating}
                        </span>
                      </div>

                      {course.progress > 0 && (
                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-600">Прогресс</span>
                            <span className="font-medium">{course.progress}%</span>
                          </div>
                          <Progress value={course.progress} className="h-2" />
                        </div>
                      )}

                      <div className="flex items-center justify-between pt-2">
                        <div>
                          <div className="font-semibold text-green-600">{course.price}</div>
                          <div className="text-xs text-gray-500">от {course.instructor}</div>
                        </div>
                        <Button className="ignite-gradient hover:opacity-90 rounded-xl">
                          {course.progress > 0 ? (
                            <>
                              <Play className="w-4 h-4 mr-2" />
                              Продолжить
                            </>
                          ) : (
                            <>
                              <BookOpen className="w-4 h-4 mr-2" />
                              Начать
                            </>
                          )}
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredCourses.length === 0 && (
              <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardContent className="p-12 text-center">
                  <div className="text-6xl mb-4">🔍</div>
                  <h3 className="text-xl font-bold mb-2">Курсы не найдены</h3>
                  <p className="text-gray-600">Попробуйте изменить критерии поиска</p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
      <BottomNavigation />
    </div>
  )
}
