"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Eye, EyeOff, Mail, Lock, User, Users, Calendar } from "lucide-react"
import { useRouter } from "next/navigation"

export function AuthForm() {
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Симуляция авторизации
    setTimeout(() => {
      setIsLoading(false)
      router.push("/profile-setup")
    }, 1500)
  }

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Симуляция регистрации
    setTimeout(() => {
      setIsLoading(false)
      router.push("/profile-setup")
    }, 1500)
  }

  return (
    <Tabs defaultValue="login" className="w-full">
      <TabsList className="grid w-full grid-cols-2 bg-gray-100">
        <TabsTrigger value="login" className="data-[state=active]:ignite-gradient data-[state=active]:text-white">
          Вход 🚀
        </TabsTrigger>
        <TabsTrigger value="register" className="data-[state=active]:pride-gradient data-[state=active]:text-white">
          Регистрация ✨
        </TabsTrigger>
      </TabsList>

      <TabsContent value="login">
        <Card className="border-0 shadow-none">
          <CardHeader className="text-center pb-4">
            <CardTitle className="flex items-center justify-center gap-2 text-xl">
              <Users className="w-6 h-6 text-orange-500" />С возвращением! 👋
            </CardTitle>
            <CardDescription className="text-base">Заходи и учись с друзьями</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-base font-medium">
                  Email
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="твой@email.com"
                    className="pl-11 h-12 text-base rounded-xl border-2 focus:border-purple-400"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-base font-medium">
                  Пароль
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    className="pl-11 pr-11 h-12 text-base rounded-xl border-2 focus:border-purple-400"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full h-12 text-base font-semibold ignite-gradient hover:opacity-90 rounded-xl"
                disabled={isLoading}
              >
                {isLoading ? "Входим... 🔄" : "Войти 🎯"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="register">
        <Card className="border-0 shadow-none">
          <CardHeader className="text-center pb-4">
            <CardTitle className="flex items-center justify-center gap-2 text-xl">
              <User className="w-6 h-6 text-orange-500" />
              Присоединяйся! 🎉
            </CardTitle>
            <CardDescription className="text-base">Создай аккаунт и начни учиться</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleRegister} className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-base font-medium">
                    Имя
                  </Label>
                  <Input
                    id="firstName"
                    placeholder="Иван"
                    className="h-12 text-base rounded-xl border-2 focus:border-pink-400"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-base font-medium">
                    Фамилия
                  </Label>
                  <Input
                    id="lastName"
                    placeholder="Иванов"
                    className="h-12 text-base rounded-xl border-2 focus:border-pink-400"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="age" className="text-base font-medium">
                  Возраст
                </Label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <Input
                    id="age"
                    type="number"
                    min="13"
                    max="19"
                    placeholder="16"
                    className="pl-11 h-12 text-base rounded-xl border-2 focus:border-pink-400"
                    required
                  />
                </div>
                <p className="text-sm text-gray-500">Только для подростков 13-19 лет</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="registerEmail" className="text-base font-medium">
                  Email
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <Input
                    id="registerEmail"
                    type="email"
                    placeholder="твой@email.com"
                    className="pl-11 h-12 text-base rounded-xl border-2 focus:border-pink-400"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="registerPassword" className="text-base font-medium">
                  Пароль
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <Input
                    id="registerPassword"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    className="pl-11 pr-11 h-12 text-base rounded-xl border-2 focus:border-pink-400"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                <div className="flex items-start gap-3">
                  <span className="text-xl">🛡️</span>
                  <div>
                    <p className="text-sm font-medium text-blue-800">Правила безопасности:</p>
                    <ul className="text-xs text-blue-700 mt-1 space-y-1">
                      <li>• Не делись личной информацией</li>
                      <li>• Встречайся только в общественных местах</li>
                      <li>• Сообщай о неподобающем поведении</li>
                    </ul>
                  </div>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full h-12 text-base font-semibold pride-gradient hover:opacity-90 rounded-xl"
                disabled={isLoading}
              >
                {isLoading ? "Создаем... 🔄" : "Создать аккаунт 🚀"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  )
}
