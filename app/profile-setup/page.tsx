"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Camera, X, User, MapPin, GraduationCap, Heart, Star } from "lucide-react"
import { useRouter } from "next/navigation"

const TEEN_INTERESTS = [
  { name: "Игры", emoji: "🎮", category: "развлечения" },
  { name: "Музыка", emoji: "🎵", category: "творчество" },
  { name: "Рисование", emoji: "🎨", category: "творчество" },
  { name: "Спорт", emoji: "⚽", category: "активность" },
  { name: "Фотография", emoji: "📸", category: "творчество" },
  { name: "Чтение", emoji: "📚", category: "учеба" },
  { name: "Программирование", emoji: "💻", category: "технологии" },
  { name: "Танцы", emoji: "💃", category: "активность" },
  { name: "Кино", emoji: "🎬", category: "развлечения" },
  { name: "Аниме", emoji: "🌸", category: "развлечения" },
  { name: "K-Pop", emoji: "🎤", category: "музыка" },
  { name: "TikTok", emoji: "📱", category: "соцсети" },
  { name: "YouTube", emoji: "📺", category: "соцсети" },
  { name: "Косплей", emoji: "🎭", category: "творчество" },
  { name: "Скейтборд", emoji: "🛹", category: "активность" },
  { name: "Путешествия", emoji: "✈️", category: "приключения" },
  { name: "Кулинария", emoji: "👨‍🍳", category: "хобби" },
  { name: "Мода", emoji: "👗", category: "стиль" },
  { name: "Наука", emoji: "🔬", category: "учеба" },
  { name: "Языки", emoji: "🌍", category: "учеба" },
]

export default function ProfileSetupPage() {
  const [selectedInterests, setSelectedInterests] = useState<string[]>([])
  const [profileData, setProfileData] = useState({
    name: "",
    school: "",
    grade: "",
    location: "",
    bio: "",
    avatar: "",
  })
  const router = useRouter()

  const toggleInterest = (interest: string) => {
    setSelectedInterests((prev) =>
      prev.includes(interest) ? prev.filter((i) => i !== interest) : prev.length < 8 ? [...prev, interest] : prev,
    )
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Сохранение профиля
    router.push("/dashboard")
  }

  const getInterestColor = (category: string) => {
    const colors = {
      развлечения: "bg-purple-100 text-purple-700 border-purple-200",
      творчество: "bg-pink-100 text-pink-700 border-pink-200",
      активность: "bg-green-100 text-green-700 border-green-200",
      учеба: "bg-blue-100 text-blue-700 border-blue-200",
      технологии: "bg-gray-100 text-gray-700 border-gray-200",
      музыка: "bg-red-100 text-red-700 border-red-200",
      соцсети: "bg-cyan-100 text-cyan-700 border-cyan-200",
      хобби: "bg-yellow-100 text-yellow-700 border-yellow-200",
      стиль: "bg-indigo-100 text-indigo-700 border-indigo-200",
      приключения: "bg-orange-100 text-orange-700 border-orange-200",
    }
    return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-700 border-gray-200"
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-blue-50 to-cyan-100">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <span className="text-6xl">🎨</span>
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">
              Создай свой профиль!
            </h1>
            <p className="text-gray-600 text-lg">Расскажи о себе, чтобы найти классных друзей 🌟</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Фото профиля */}
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <Camera className="w-6 h-6 text-purple-500" />
                  Твое фото 📸
                </CardTitle>
                <CardDescription>Добавь крутое фото, чтобы друзья тебя узнали!</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col items-center space-y-4">
                  <div className="relative">
                    <Avatar className="w-32 h-32 border-4 border-white shadow-lg">
                      <AvatarImage src={profileData.avatar || "/placeholder.svg?height=128&width=128"} />
                      <AvatarFallback className="text-3xl bg-gradient-to-br from-purple-400 to-blue-400 text-white">
                        <User className="w-16 h-16" />
                      </AvatarFallback>
                    </Avatar>
                    <div className="absolute -bottom-2 -right-2 w-10 h-10 cool-gradient rounded-full flex items-center justify-center">
                      <span className="text-lg">✨</span>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    type="button"
                    className="rounded-xl border-2 hover:border-purple-400 bg-transparent"
                  >
                    <Camera className="w-4 h-4 mr-2" />
                    Загрузить фото
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Основная информация */}
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <Star className="w-6 h-6 text-yellow-500" />
                  Основная инфа 📝
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-base font-medium">
                    Как тебя зовут?
                  </Label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <Input
                      id="name"
                      placeholder="Твое имя"
                      className="pl-11 h-12 text-base rounded-xl border-2 focus:border-purple-400"
                      value={profileData.name}
                      onChange={(e) => setProfileData((prev) => ({ ...prev, name: e.target.value }))}
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="school" className="text-base font-medium">
                      Школа/Колледж
                    </Label>
                    <div className="relative">
                      <GraduationCap className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      <Input
                        id="school"
                        placeholder="Школа №1"
                        className="pl-11 h-12 text-base rounded-xl border-2 focus:border-purple-400"
                        value={profileData.school}
                        onChange={(e) => setProfileData((prev) => ({ ...prev, school: e.target.value }))}
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="grade" className="text-base font-medium">
                      Класс
                    </Label>
                    <Input
                      id="grade"
                      placeholder="10"
                      className="h-12 text-base rounded-xl border-2 focus:border-purple-400"
                      value={profileData.grade}
                      onChange={(e) => setProfileData((prev) => ({ ...prev, grade: e.target.value }))}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location" className="text-base font-medium">
                    Город
                  </Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <Input
                      id="location"
                      placeholder="Москва"
                      className="pl-11 h-12 text-base rounded-xl border-2 focus:border-purple-400"
                      value={profileData.location}
                      onChange={(e) => setProfileData((prev) => ({ ...prev, location: e.target.value }))}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="bio" className="text-base font-medium">
                    Расскажи о себе
                  </Label>
                  <Textarea
                    id="bio"
                    placeholder="Привет! Я люблю... Ищу друзей для..."
                    className="min-h-[100px] text-base rounded-xl border-2 focus:border-purple-400 resize-none"
                    value={profileData.bio}
                    onChange={(e) => setProfileData((prev) => ({ ...prev, bio: e.target.value }))}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Интересы */}
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <Heart className="w-6 h-6 text-red-500" />
                  Твои интересы 🎯
                </CardTitle>
                <CardDescription>Выбери то, что тебе нравится! (минимум 3, максимум 8)</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {TEEN_INTERESTS.map((interest) => (
                    <Badge
                      key={interest.name}
                      variant="outline"
                      className={`cursor-pointer transition-all p-3 h-auto flex flex-col items-center gap-2 rounded-xl border-2 ${
                        selectedInterests.includes(interest.name)
                          ? "teen-gradient text-white border-purple-400 shadow-lg transform scale-105"
                          : `${getInterestColor(interest.category)} hover:shadow-md hover:scale-105`
                      }`}
                      onClick={() => toggleInterest(interest.name)}
                    >
                      <span className="text-2xl">{interest.emoji}</span>
                      <span className="text-sm font-medium text-center">{interest.name}</span>
                      {selectedInterests.includes(interest.name) && (
                        <X className="w-4 h-4 absolute -top-1 -right-1 bg-white text-purple-600 rounded-full p-0.5" />
                      )}
                    </Badge>
                  ))}
                </div>
                <div className="mt-4 text-center">
                  <p className="text-sm text-gray-500">
                    Выбрано: {selectedInterests.length} из 8
                    {selectedInterests.length >= 3 ? " ✅" : " (нужно еще " + (3 - selectedInterests.length) + ")"}
                  </p>
                </div>
              </CardContent>
            </Card>

            <Button
              type="submit"
              className="w-full h-14 text-lg font-bold teen-gradient hover:opacity-90 rounded-xl shadow-lg"
              disabled={selectedInterests.length < 3}
            >
              {selectedInterests.length < 3 ? "Выбери еще интересы 🎯" : "Готово! Найти друзей 🚀"}
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}
