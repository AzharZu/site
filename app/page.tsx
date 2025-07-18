import { AuthForm } from "@/components/auth/auth-form"
import { Card, CardContent } from "@/components/ui/card"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-blue-50 to-cyan-100">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-center min-h-screen">
          {/* Логотип и заголовок */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-6">
              {/* Новый логотип */}
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl flex items-center justify-center transform rotate-12 shadow-lg">
                  <span className="text-3xl">🔥</span>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-sm">📚</span>
                </div>
              </div>
            </div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-3">
              IgnitePride
            </h1>
            <p className="text-gray-600 text-xl font-medium">Социальная обучающая сеть 🎓</p>
            <p className="text-gray-500 text-lg mt-2">Учись, общайся, развивайся! 🚀</p>
            <div className="flex justify-center gap-2 mt-4">
              <span className="text-2xl sticker">📚</span>
              <span className="text-2xl sticker">🧠</span>
              <span className="text-2xl sticker">💡</span>
              <span className="text-2xl sticker">🎯</span>
              <span className="text-2xl sticker">🏆</span>
            </div>
          </div>

          {/* Форма авторизации */}
          <Card className="w-full max-w-md shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
            <CardContent className="p-8">
              <AuthForm />
            </CardContent>
          </Card>

          {/* Информация о безопасности */}
          <div className="mt-8 text-center max-w-md">
            <div className="bg-green-100 border border-green-200 rounded-2xl p-4 mb-4">
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="text-2xl">🛡️</span>
                <span className="font-semibold text-green-800">100% Безопасно</span>
              </div>
              <p className="text-sm text-green-700">Модерация 24/7, защита личных данных, только позитивное общение!</p>
            </div>
            <p className="text-sm text-gray-500">
              Присоединяйся к тысячам подростков, которые уже нашли классных друзей! 🌟
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
