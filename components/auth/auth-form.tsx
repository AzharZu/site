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
    e.preventDefault();
    setIsLoading(true);

    // Получаем значения из формы
    const form = e.target as HTMLFormElement;
    const firstName = (form.elements.namedItem("firstName") as HTMLInputElement)?.value;
    const lastName = (form.elements.namedItem("lastName") as HTMLInputElement)?.value;
    const age = (form.elements.namedItem("age") as HTMLInputElement)?.value;
    const email = (form.elements.namedItem("registerEmail") as HTMLInputElement)?.value;
    const password = (form.elements.namedItem("registerPassword") as HTMLInputElement)?.value;

    try {
      const res = await fetch("https://skilllink-backend-qbsv.onrender.com/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName,
          lastName,
          age: Number(age),
          email,
          password,
        }),
      });
      if (!res.ok) throw new Error("Ошибка регистрации");
      // Сохраняем имя для приветствия в профиле
      if (typeof window !== "undefined") {
        localStorage.setItem("userFirstName", firstName);
      }
      setIsLoading(false);
      router.push("/profile-setup");
    } catch (err) {
      setIsLoading(false);
      alert("Ошибка регистрации. Попробуйте еще раз.");
    }
  };

  return (
    <Tabs defaultValue="login" className="w-full">
      <TabsList className="grid w-full grid-cols-2 bg-neutral-100">
        <TabsTrigger value="login" className="data-[state=active]:bg-neutral-800 data-[state=active]:text-white rounded-md">
          Вход
        </TabsTrigger>
        <TabsTrigger value="register" className="data-[state=active]:bg-neutral-800 data-[state=active]:text-white rounded-md">
          Регистрация
        </TabsTrigger>
      </TabsList>

      <TabsContent value="login">
        <Card className="border bg-white max-w-md mx-auto shadow-sm rounded-2xl">
          <CardHeader className="text-center pb-2">
            <CardTitle className="text-2xl font-bold text-neutral-900 mb-1">
              Вход
            </CardTitle>
            <CardDescription className="text-base text-neutral-500">Войдите в свой аккаунт</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-7">
              <div className="space-y-1">
                <Label htmlFor="email" className="text-base font-medium text-neutral-700">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  className="h-14 text-lg rounded-lg border border-neutral-200 focus:border-neutral-400 bg-neutral-50 px-4"
                  required
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="password" className="text-base font-medium text-neutral-700">
                  Пароль
                </Label>
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="h-14 text-lg rounded-lg border border-neutral-200 focus:border-neutral-400 bg-neutral-50 px-4"
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full h-14 text-lg font-semibold bg-neutral-800 hover:bg-neutral-700 text-white rounded-lg mt-2"
                disabled={isLoading}
              >
                {isLoading ? "Входим..." : "Войти"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="register">
        <Card className="border bg-white max-w-md mx-auto shadow-sm rounded-2xl">
          <CardHeader className="text-center pb-2">
            <CardTitle className="text-2xl font-bold text-neutral-900 mb-1">
              Регистрация
            </CardTitle>
            <CardDescription className="text-base text-neutral-500">Создайте новый аккаунт</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleRegister} className="space-y-7">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <Label htmlFor="firstName" className="text-base font-medium text-neutral-700">
                    Имя
                  </Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    placeholder="Имя"
                    className="h-14 text-lg rounded-lg border border-neutral-200 focus:border-neutral-400 bg-neutral-50 px-4"
                    required
                  />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="lastName" className="text-base font-medium text-neutral-700">
                    Фамилия
                  </Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    placeholder="Фамилия"
                    className="h-14 text-lg rounded-lg border border-neutral-200 focus:border-neutral-400 bg-neutral-50 px-4"
                    required
                  />
                </div>
              </div>
              <div className="space-y-1">
                <Label htmlFor="age" className="text-base font-medium text-neutral-700">
                  Возраст
                </Label>
                <Input
                  id="age"
                  name="age"
                  type="number"
                  min="13"
                  max="19"
                  placeholder="16"
                  className="h-14 text-lg rounded-lg border border-neutral-200 focus:border-neutral-400 bg-neutral-50 px-4"
                  required
                />
                <p className="text-sm text-neutral-400 mt-1">Только для подростков 13-19 лет</p>
              </div>
              <div className="space-y-1">
                <Label htmlFor="registerEmail" className="text-base font-medium text-neutral-700">
                  Email
                </Label>
                <Input
                  id="registerEmail"
                  name="registerEmail"
                  type="email"
                  placeholder="you@example.com"
                  className="h-14 text-lg rounded-lg border border-neutral-200 focus:border-neutral-400 bg-neutral-50 px-4"
                  required
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="registerPassword" className="text-base font-medium text-neutral-700">
                  Пароль
                </Label>
                <Input
                  id="registerPassword"
                  name="registerPassword"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="h-14 text-lg rounded-lg border border-neutral-200 focus:border-neutral-400 bg-neutral-50 px-4"
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full h-14 text-lg font-semibold bg-neutral-800 hover:bg-neutral-700 text-white rounded-lg mt-2"
                disabled={isLoading}
              >
                {isLoading ? "Создаем..." : "Создать аккаунт"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  )
}
