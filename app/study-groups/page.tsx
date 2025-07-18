"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Search, Plus, Users, Calendar, MapPin, Clock, BookOpen, MessageSquare, Star } from "lucide-react"
import { useRouter } from "next/navigation"

// Моковые данные учебных групп
const STUDY_GROUPS = [
  {
    id: 1,
    name: "Подготовка к SAT по math and verbal",
    description: "Решаем сложные задачи вместе, готовимся к экзамену",
    subject: "Математика",
    members: 12,
    maxMembers: 15,
    level: "Продвинутый",
    schedule: "Пн, Ср, Пт в 18:00",
    location: "Онлайн",
    admin: "Анна К.",
    adminAvatar: "А",
    nextMeeting: "Сегодня в 18:00",
    rating: 4.8,
    isJoined: true,
  },
  {
    id: 2,
    name: "Python для начинающих",
    description: "Изучаем основы программирования, делаем первые проекты",
    subject: "Программирование",
    members: 8,
    maxMembers: 12,
    level: "Начинающий",
    schedule: "Вт, Чт в 19:00",
    location: "Библиотека №5",
    admin: "Максим Р.",
    adminAvatar: "М",
    nextMeeting: "Завтра в 19:00",
    rating: 4.9,
    isJoined: false,
  },
  {
    id: 3,
    name: "Английский разговорный клуб",
    description: "Практикуем разговорный английский в дружеской атмосфере",
    subject: "Английский",
    members: 15,
    maxMembers: 20,
    level: "Средний",
    schedule: "Сб в 15:00",
    location: "Кафе 'Книжка'",
    admin: "Елена С.",
    adminAvatar: "Е",
    nextMeeting: "Суббота в 15:00",
    rating: 4.7,
    isJoined: true,
  },
  {
    id: 4,
    name: "Физика: решаем олимпиадные задачи",
    description: "Готовимся к олимпиадам, разбираем сложные задачи",
    subject: "Физика",
    members: 6,
    maxMembers: 10,
    level: "Продвинутый",
    schedule: "Вс в 16:00",
    location: "Онлайн",
    admin: "Дмитрий К.",
    adminAvatar: "Д",
    nextMeeting: "Воскресенье в 16:00",
    rating: 4.6,
    isJoined: false,
  },
]

const SUBJECTS = [
  { name: "Все", count: 24, color: "bg-gray-100 text-gray-700" },
  { name: "Математика", count: 8, color: "bg-blue-100 text-blue-700" },
  { name: "Программирование", count: 6, color: "bg-purple-100 text-purple-700" },
  { name: "Физика", count: 4, color: "bg-yellow-100 text-yellow-700" },
  { name: "Английский", count: 6, color: "bg-green-100 text-green-700" },
]

export default function StudyGroupsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("Все");
  const router = useRouter();

  const filteredGroups = STUDY_GROUPS.filter(
    (group) =>
      group.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (selectedSubject === "Все" || group.subject === selectedSubject)
  );

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Заголовок */}
      <div className="sticky top-0 z-10 bg-white/95 border-b shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="sm" onClick={() => router.push("/")} className="rounded-lg">
                <ArrowLeft className="w-5 h-5 text-neutral-500" />
              </Button>
              <div>
                <h1 className="text-2xl font-semibold flex items-center gap-2 text-neutral-800">Учебные группы</h1>
                <p className="text-sm text-neutral-500">Учись вместе с единомышленниками</p>
              </div>
            </div>
            <Button className="bg-neutral-800 hover:bg-neutral-700 text-white rounded-lg px-4 py-2 font-medium shadow-none">
              <Plus className="w-4 h-4 mr-2" />Создать группу
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          {/* Левая панель */}
          <div className="space-y-8">
            {/* Поиск */}
            <Card className="border shadow bg-white">
              <CardContent className="p-4">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-neutral-400" />
                  <Input
                    placeholder="Поиск групп..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 rounded-lg border focus:border-neutral-400 bg-neutral-50"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Предметы */}
            <Card className="border shadow bg-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base text-neutral-700">
                  <BookOpen className="w-5 h-5 text-neutral-400" />
                  Предметы
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {SUBJECTS.map((subject) => (
                  <button
                    key={subject.name}
                    onClick={() => setSelectedSubject(subject.name)}
                    className={`w-full text-left p-3 rounded-lg transition-colors font-medium text-neutral-700 ${
                      selectedSubject === subject.name ? "bg-neutral-800 text-white" : "hover:bg-neutral-100"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span>{subject.name}</span>
                      <span className="text-xs text-neutral-400">{subject.count}</span>
                    </div>
                  </button>
                ))}
              </CardContent>
            </Card>

            {/* Мои группы */}
            <Card className="border shadow bg-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base text-neutral-700">
                  <Users className="w-5 h-5 text-neutral-400" />
                  Мои группы
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {STUDY_GROUPS.filter((group) => group.isJoined).map((group) => (
                  <div key={group.id} className="p-3 bg-neutral-100 rounded-lg border border-neutral-200">
                    <h4 className="font-medium text-sm mb-1 text-neutral-800">{group.name}</h4>
                    <p className="text-xs text-neutral-500 mb-2">{group.nextMeeting}</p>
                    <Badge className="bg-neutral-200 text-neutral-700 text-xs">{group.subject}</Badge>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Основной контент */}
          <div className="lg:col-span-3 space-y-8">
            {/* Статистика */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border shadow bg-white">
                <CardContent className="p-6 text-center">
                  <Users className="w-8 h-8 mx-auto mb-2 text-neutral-400" />
                  <div className="text-2xl font-semibold text-neutral-800">24</div>
                  <div className="text-sm text-neutral-500">Активных групп</div>
                </CardContent>
              </Card>
              <Card className="border shadow bg-white">
                <CardContent className="p-6 text-center">
                  <MessageSquare className="w-8 h-8 mx-auto mb-2 text-neutral-400" />
                  <div className="text-2xl font-semibold text-neutral-800">156</div>
                  <div className="text-sm text-neutral-500">Участников</div>
                </CardContent>
              </Card>
              <Card className="border shadow bg-white">
                <CardContent className="p-6 text-center">
                  <Calendar className="w-8 h-8 mx-auto mb-2 text-neutral-400" />
                  <div className="text-2xl font-semibold text-neutral-800">12</div>
                  <div className="text-sm text-neutral-500">Встреч на неделе</div>
                </CardContent>
              </Card>
            </div>

            {/* Список групп */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredGroups.map((group) => (
                <Card
                  key={group.id}
                  className="border shadow bg-white hover:shadow-md transition-all rounded-xl"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-2 text-neutral-800">{group.name}</h3>
                        <p className="text-neutral-500 text-sm mb-3">{group.description}</p>
                      </div>
                      {group.isJoined && <Badge className="bg-neutral-200 text-neutral-700">Участвую</Badge>}
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center gap-4 text-sm text-neutral-500">
                        <Badge className="bg-neutral-100 text-neutral-700">{group.subject}</Badge>
                        <Badge variant="outline" className="border-neutral-200 text-neutral-500">{group.level}</Badge>
                        <span className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-yellow-400" />
                          {group.rating}
                        </span>
                      </div>

                      <div className="flex items-center justify-between text-sm text-neutral-500">
                        <span className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          {group.members}/{group.maxMembers} участников
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {group.schedule}
                        </span>
                      </div>

                      <div className="flex items-center gap-4 text-sm text-neutral-500">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {group.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {group.nextMeeting}
                        </span>
                      </div>

                      <div className="flex items-center gap-3 pt-2 border-t border-neutral-100">
                        <Avatar className="w-8 h-8">
                          <AvatarFallback className="bg-neutral-800 text-white text-sm font-bold">
                            {group.adminAvatar}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-neutral-700">Администратор: {group.admin}</p>
                        </div>
                      </div>

                      <div className="flex gap-2 pt-2">
                        {group.isJoined ? (
                          <>
                            <Button variant="outline" className="flex-1 rounded-lg bg-white border-neutral-200 text-neutral-700 hover:bg-neutral-100">
                              Покинуть группу
                            </Button>
                            <Button className="flex-1 bg-neutral-800 hover:bg-neutral-700 text-white rounded-lg">Открыть чат</Button>
                          </>
                        ) : (
                          <Button className="w-full bg-neutral-800 hover:bg-neutral-700 text-white rounded-lg">Присоединиться</Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredGroups.length === 0 && (
              <Card className="border shadow bg-white">
                <CardContent className="p-12 text-center">
                  <div className="text-6xl mb-4">🔍</div>
                  <h3 className="text-xl font-semibold mb-2 text-neutral-800">Группы не найдены</h3>
                  <p className="text-neutral-500 mb-4">Попробуйте изменить критерии поиска</p>
                  <Button className="bg-neutral-800 hover:bg-neutral-700 text-white rounded-lg">
                    <Plus className="w-4 h-4 mr-2" />Создать новую группу
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
