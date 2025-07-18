"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  ArrowLeft,
  Search,
  Plus,
  MessageSquare,
  ThumbsUp,
  Eye,
  Clock,
  Pin,
  TrendingUp,
  BookOpen,
  Users,
  Filter,
} from "lucide-react"
import { useRouter } from "next/navigation"
import { BottomNavigation } from "@/components/navigation/bottom-nav"

// Категории форума
const FORUM_CATEGORIES = [
  {
    id: 1,
    name: "Математика",
    description: "Алгебра, геометрия, подготовка к SAT",
    icon: "🧮",
    color: "bg-blue-100 text-blue-700 border-blue-200",
    posts: 234,
    members: 1250,
  },
  {
    id: 2,
    name: "Программирование",
    description: "Python, JavaScript, веб-разработка",
    icon: "💻",
    color: "bg-purple-100 text-purple-700 border-purple-200",
    posts: 189,
    members: 890,
  },
  {
    id: 3,
    name: "Физика",
    description: "Механика, электричество, оптика",
    icon: "⚡",
    color: "bg-yellow-100 text-yellow-700 border-yellow-200",
    posts: 156,
    members: 670,
  },
  {
    id: 4,
    name: "Английский язык",
    description: "Грамматика, разговорная практика",
    icon: "🇬🇧",
    color: "bg-green-100 text-green-700 border-green-200",
    posts: 298,
    members: 1450,
  },
  {
    id: 5,
    name: "Химия",
    description: "Органическая, неорганическая химия",
    icon: "🧪",
    color: "bg-red-100 text-red-700 border-red-200",
    posts: 123,
    members: 540,
  },
  {
    id: 6,
    name: "История",
    description: "Всемирная история, история России",
    icon: "📜",
    color: "bg-orange-100 text-orange-700 border-orange-200",
    posts: 167,
    members: 780,
  },
]

// Популярные посты
const POPULAR_POSTS = [
  {
    id: 1,
    title: "Как решать квадратные уравнения? Подробный гайд",
    author: "Анна К.",
    authorAvatar: "А",
    category: "Математика",
    replies: 23,
    views: 456,
    likes: 67,
    time: "2 часа назад",
    isPinned: true,
  },
  {
    id: 2,
    title: "Мой первый проект на Python - калькулятор",
    author: "Максим Р.",
    authorAvatar: "М",
    category: "Программирование",
    replies: 15,
    views: 234,
    likes: 42,
    time: "4 часа назад",
    isPinned: false,
  },
  {
    id: 3,
    title: "Подготовка к ЕНТ по физике - делимся материалами",
    author: "Елена С.",
    authorAvatar: "Е",
    category: "Физика",
    replies: 31,
    views: 678,
    likes: 89,
    time: "6 часов назад",
    isPinned: false,
  },
]

export default function ForumPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null)
  const router = useRouter()

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
                <h1 className="text-xl font-bold flex items-center gap-2">💬 Форум IgnitePride</h1>
                <p className="text-sm text-gray-500">Обсуждай, учись, помогай другим!</p>
              </div>
            </div>
            <Button className="ignite-gradient hover:opacity-90 rounded-xl">
              <Plus className="w-4 h-4 mr-2" />
              Создать пост
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Левая панель - Поиск и фильтры */}
          <div className="space-y-6">
            {/* Поиск */}
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardContent className="p-4">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Поиск по форуму..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 rounded-xl border-2 focus:border-orange-400"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Статистика форума */}
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <TrendingUp className="w-5 h-5 text-orange-500" />
                  Статистика
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Всего постов</span>
                  <span className="font-semibold">1,267</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Участников</span>
                  <span className="font-semibold">5,580</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Онлайн сейчас</span>
                  <span className="font-semibold text-green-600">234</span>
                </div>
              </CardContent>
            </Card>

            {/* Активные пользователи */}
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Users className="w-5 h-5 text-purple-500" />
                  Топ участники
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  { name: "Анна К.", posts: 45, avatar: "А" },
                  { name: "Максим Р.", posts: 38, avatar: "М" },
                  { name: "Елена С.", posts: 32, avatar: "Е" },
                ].map((user, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Avatar className="w-8 h-8">
                      <AvatarFallback className="pride-gradient text-white text-sm font-bold">
                        {user.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className="font-medium text-sm">{user.name}</p>
                      <p className="text-xs text-gray-500">{user.posts} постов</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Основной контент */}
          <div className="lg:col-span-3 space-y-6">
            {/* Категории форума */}
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-blue-500" />
                  Категории обсуждений 📚
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {FORUM_CATEGORIES.map((category) => (
                    <div
                      key={category.id}
                      className="forum-card p-4 bg-white rounded-xl cursor-pointer"
                      onClick={() => setSelectedCategory(category.id)}
                    >
                      <div className="flex items-start gap-3">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${category.color}`}>
                          <span className="text-2xl">{category.icon}</span>
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg mb-1">{category.name}</h3>
                          <p className="text-sm text-gray-600 mb-3">{category.description}</p>
                          <div className="flex items-center gap-4 text-xs text-gray-500">
                            <span className="flex items-center gap-1">
                              <MessageSquare className="w-3 h-3" />
                              {category.posts} постов
                            </span>
                            <span className="flex items-center gap-1">
                              <Users className="w-3 h-3" />
                              {category.members} участников
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Популярные посты */}
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-red-500" />
                    Популярные посты 🔥
                  </CardTitle>
                  <Button variant="outline" size="sm" className="rounded-xl bg-transparent">
                    <Filter className="w-4 h-4 mr-2" />
                    Фильтр
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {POPULAR_POSTS.map((post) => (
                  <div
                    key={post.id}
                    className="p-4 border border-gray-200 rounded-xl hover:border-orange-300 transition-colors cursor-pointer"
                  >
                    <div className="flex items-start gap-3">
                      <Avatar className="w-10 h-10">
                        <AvatarFallback className="ignite-gradient text-white font-bold">
                          {post.authorAvatar}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex items-center gap-2">
                            {post.isPinned && <Pin className="w-4 h-4 text-orange-500" />}
                            <h3 className="font-semibold hover:text-orange-600 transition-colors">{post.title}</h3>
                          </div>
                        </div>

                        <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                          <span>от {post.author}</span>
                          <Badge className="bg-gray-100 text-gray-700 text-xs">{post.category}</Badge>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {post.time}
                          </span>
                        </div>

                        <div className="flex items-center gap-6 text-sm text-gray-500">
                          <span className="flex items-center gap-1">
                            <MessageSquare className="w-4 h-4" />
                            {post.replies} ответов
                          </span>
                          <span className="flex items-center gap-1">
                            <Eye className="w-4 h-4" />
                            {post.views} просмотров
                          </span>
                          <span className="flex items-center gap-1">
                            <ThumbsUp className="w-4 h-4" />
                            {post.likes} лайков
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <BottomNavigation />
    </div>
  )
}
