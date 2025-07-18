"use client"

import { AuthForm } from "@/components/auth/auth-form"
import { BottomNavigation } from "@/components/navigation/bottom-nav"
import { useEffect, useState } from "react"

export default function HomePage() {
  const [userFirstName, setUserFirstName] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setUserFirstName(localStorage.getItem("userFirstName"));
    }
  }, []);

  return (
    <div className="min-h-screen bg-neutral-50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-center min-h-screen">
          {/* Логотип и заголовок */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-6">
              {/* Минималистичный логотип */}
              <div className="w-16 h-16 bg-neutral-800 rounded-lg flex items-center justify-center shadow-sm">
                <span className="text-2xl font-bold text-white">IP</span>
              </div>
            </div>
            <h1 className="text-5xl font-bold text-neutral-900 mb-3">
              IgnitePride
            </h1>
            <p className="text-neutral-600 text-xl font-medium">Социальная обучающая сеть</p>
            <p className="text-neutral-500 text-lg mt-2">Учись, общайся, развивайся</p>
            {userFirstName && (
              <div className="mt-4">
                <span className="text-2xl font-semibold text-neutral-700">Привет, {userFirstName}!</span>
              </div>
            )}
          </div>

          {/* Форма авторизации */}
          <div className="w-full max-w-md">
            <AuthForm />
            <div className="bg-neutral-100 border border-neutral-200 rounded-lg p-4 mb-4 mt-4">
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="font-semibold text-neutral-700">Безопасно</span>
              </div>
              <p className="text-sm text-neutral-600">Модерация 24/7, защита личных данных, только позитивное общение</p>
            </div>
            <p className="text-sm text-neutral-500 text-center">
              Присоединяйся к тысячам подростков, которые уже нашли классных друзей
            </p>
          </div>
        </div>
      </div>
      <BottomNavigation />
    </div>
  )
}
