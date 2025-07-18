"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MessageCircle, User, Settings, Search, Users, Heart, X, Star, MapPin } from "lucide-react"
import { useRouter } from "next/navigation"
import { BottomNavigation } from "@/components/navigation/bottom-nav"

// Моковые данные подростков для знакомств
const MOCK_STUDENTS = [
  {
    id: 1,
    name: "Аня",
    age: 16,
    school: "Гимназия №5",
    grade: "10 класс",
    location: "Алматы",
    bio: "Обожаю математику и рисование! Готовлюсь к олимпиаде по алгебре. Ищу друзей для совместной подготовки к SAT 📚✨",
    interests: ["Математика", "Рисование", "K-Pop", "Подготовка к SAT"],
    studyGoals: ["SAT/IELTS", "Олимпиады"],
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
    online: true,
    compatibility: 92,
  },
  {
    id: 2,
    name: "Максат",
    age: 17,
    school: "Лицей №12",
    grade: "11 класс",
    location: "Петропавловск",
    bio: "Программирую на Python и изучаю машинное обучение. Создаю проекты и участвую в хакатонах. Давайте кодить вместе! 💻🚀",
    interests: ["Программирование", "ИИ", "Хакатоны", "YouTube"],
    studyGoals: ["Поступление в IT-вуз", "Изучение ML"],
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    online: false,
    compatibility: 87,
  },
  {
    id: 3,
    name: "Лиза",
    age: 15,
    school: "Школа №7",
    grade: "9 класс",
    location: "Костанай",
    bio: "Изучаю английский и французский, мечтаю о путешествиях. Веду блог о языках и культуре. Ищу языковых партнеров! 🌍📖",
    interests: ["Английский язык", "Французский", "Путешествия", "Блоггинг"],
    studyGoals: ["Сдать IELTS", "Поступить на лингвистику"],
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    online: true,
    compatibility: 94,
  },
  {
    id: 4,
    name: "Данияр",
    age: 16,
    school: "НИШ Павлодар",
    grade: "10 класс",
    location: "Павлодар",
    bio: "Играю в футбол и изучаю физику. Готовлюсь к поступлению в технический вуз. Ищу единомышленников для учебы! ⚽🔬",
    interests: ["Футбол", "Физика", "Спорт", "Техника"],
    studyGoals: ["Поступление в техвуз", "Олимпиады по физике"],
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
    online: true,
    compatibility: 89,
  },
  {
    id: 5,
    name: "Самира",
    age: 17,
    school: "Гимназия №8",
    grade: "11 класс",
    location: "Шымкент",
    bio: "Изучаю биологию и химию, мечтаю стать врачом. Участвую в научных конференциях. Ищу друзей с похожими интересами! 🧬⚗️",
    interests: ["Биология", "Химия", "Медицина", "Наука"],
    studyGoals: ["Поступление в медвуз", "Научная деятельность"],
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face",
    online: false,
    compatibility: 91,
  },
  {
    id: 6,
    name: "Арман",
    age: 16,
    school: "Лицей №3",
    grade: "10 класс",
    location: "Актобе",
    bio: "Играю на гитаре и пишу музыку. Изучаю историю и литературу. Ищу креативных друзей для совместных проектов! 🎸📚",
    interests: ["Музыка", "Гитара", "История", "Литература"],
    studyGoals: ["Поступление на гуманитарный", "Музыкальное образование"],
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    online: true,
    compatibility: 85,
  },
  {
    id: 7,
    name: "Алия",
    age: 15,
    school: "Школа №15",
    grade: "9 класс",
    location: "Тараз",
    bio: "Танцую и рисую. Изучаю дизайн и мечтаю о карьере в creative индустрии. Ищу единомышленников для творческих проектов! 🎨💃",
    interests: ["Танцы", "Дизайн", "Рисование", "Творчество"],
    studyGoals: ["Поступление в арт-школу", "Изучение дизайна"],
    avatar: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&h=400&fit=crop&crop=face",
    online: true,
    compatibility: 88,
  },
  {
    id: 8,
    name: "Темирлан",
    age: 17,
    school: "НИШ Актау",
    grade: "11 класс",
    location: "Актау",
    bio: "Изучаю экономику и финансы. Веду инвестиционный клуб в школе. Ищу друзей для обсуждения бизнес-идей! 💰📈",
    interests: ["Экономика", "Финансы", "Инвестиции", "Бизнес"],
    studyGoals: ["Поступление в бизнес-школу", "Изучение финансов"],
    avatar: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=400&h=400&fit=crop&crop=face",
    online: false,
    compatibility: 93,
  },
]

export default function DiscoverPage() {
  const [currentUserIndex, setCurrentUserIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [matches, setMatches] = useState<number[]>([])
  const router = useRouter()

  const currentUser = MOCK_STUDENTS[currentUserIndex]

  const handleSwipeLeft = () => {
    if (isAnimating) return
    setIsAnimating(true)
    
    const card = document.querySelector('.swipe-card')
    if (card) {
      card.classList.add('slide-left')
      setTimeout(() => {
        nextUser()
      }, 300)
    }
  }

  const handleSwipeRight = () => {
    if (isAnimating) return
    setIsAnimating(true)
    
    const card = document.querySelector('.swipe-card')
    if (card) {
      card.classList.add('slide-right')
      setTimeout(() => {
        setMatches(prev => [...prev, currentUser.id])
        nextUser()
      }, 300)
    }
  }

  const nextUser = () => {
    if (currentUserIndex < MOCK_STUDENTS.length - 1) {
      setCurrentUserIndex(prev => prev + 1)
    } else {
      setCurrentUserIndex(0)
    }
    setIsAnimating(false)
    
    const card = document.querySelector('.swipe-card')
    if (card) {
      card.classList.remove('slide-left', 'slide-right')
    }
  }

  if (!currentUser) {
    return (
      <div className="min-h-screen bg-neutral-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-neutral-800 mb-2">Больше нет профилей</h2>
          <p className="text-neutral-600">Попробуйте позже или расширьте критерии поиска</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Заголовок */}
      <div className="sticky top-0 z-10 bg-white border-b border-neutral-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-neutral-900">Знакомства</h1>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm" className="rounded-full">
                <Search className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="rounded-full">
                <Settings className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Основной контент */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto">
          {/* Карточка профиля */}
          <Card className="swipe-card border-0 shadow-lg bg-white overflow-hidden h-[600px] relative">
            {/* Фотография */}
            <div className="relative h-3/5 bg-gradient-to-b from-transparent to-black/20">
              <img 
                src={currentUser.avatar} 
                alt={currentUser.name}
                className="w-full h-full object-cover"
              />
              {/* Онлайн статус */}
              {currentUser.online && (
                <div className="absolute top-4 right-4 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                  Онлайн
                </div>
              )}
              {/* Совместимость */}
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-neutral-800 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                <Star className="w-4 h-4 text-yellow-500" />
                {currentUser.compatibility}%
              </div>
            </div>

            {/* Информация о профиле */}
            <CardContent className="p-6 h-2/5 flex flex-col justify-between">
              <div className="space-y-4">
                {/* Имя и возраст */}
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-bold text-neutral-900">{currentUser.name}, {currentUser.age}</h2>
                    <p className="text-neutral-600 flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {currentUser.location}
                    </p>
                  </div>
                </div>

                {/* Школа и класс */}
                <div className="text-sm text-neutral-600">
                  <p>{currentUser.school}</p>
                  <p>{currentUser.grade}</p>
                </div>

                {/* Интересы */}
                <div className="flex flex-wrap gap-2">
                  {currentUser.interests.slice(0, 3).map((interest, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {interest}
                    </Badge>
                  ))}
                </div>

                {/* Биография */}
                <p className="text-sm text-neutral-700 line-clamp-3">{currentUser.bio}</p>
              </div>
            </CardContent>
          </Card>

          {/* Кнопки действий */}
          <div className="flex justify-center gap-4 mt-6">
            <Button 
              size="lg" 
              variant="outline" 
              className="w-16 h-16 rounded-full border-2 border-red-200 hover:bg-red-50 hover:border-red-300"
              onClick={handleSwipeLeft}
              disabled={isAnimating}
            >
              <X className="w-8 h-8 text-red-500" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="w-16 h-16 rounded-full border-2 border-blue-200 hover:bg-blue-50 hover:border-blue-300"
              onClick={() => router.push('/profile-setup')}
            >
              <User className="w-8 h-8 text-blue-500" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="w-16 h-16 rounded-full border-2 border-green-200 hover:bg-green-50 hover:border-green-300"
              onClick={handleSwipeRight}
              disabled={isAnimating}
            >
              <Heart className="w-8 h-8 text-green-500" />
            </Button>
          </div>

          {/* Статистика */}
          <div className="mt-8 p-4 bg-white rounded-lg border border-neutral-200">
            <div className="flex justify-between items-center text-sm text-neutral-600">
              <span>Профиль {currentUserIndex + 1} из {MOCK_STUDENTS.length}</span>
              <span>Совпадений: {matches.length}</span>
            </div>
          </div>
        </div>
      </div>
      <BottomNavigation />
    </div>
  )
}
