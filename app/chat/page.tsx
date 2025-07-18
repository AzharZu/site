"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Search, Send, Phone, Video, MoreVertical } from "lucide-react"
import { useRouter } from "next/navigation"
import { BottomNavigation } from "@/components/navigation/bottom-nav"

// Моковые данные чатов
const CHATS = [
  {
    id: 1,
    name: "Аня",
    avatar: "А",
    lastMessage: "Привет! Как дела с подготовкой к SAT?",
    timestamp: "2 мин назад",
    online: true,
    unread: 2,
  },
  {
    id: 2,
    name: "Максат",
    avatar: "М",
    lastMessage: "Смотрел твой проект на GitHub, круто!",
    timestamp: "1 час назад",
    online: false,
    unread: 0,
  },
  {
    id: 3,
    name: "Лиза",
    avatar: "Л",
    lastMessage: "Спасибо за помощь с французским!",
    timestamp: "Вчера",
    online: true,
    unread: 1,
  },
]

export default function ChatPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedChat, setSelectedChat] = useState<number | null>(null)
  const [message, setMessage] = useState("")
  const router = useRouter()

  const filteredChats = CHATS.filter(chat =>
    chat.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const currentChat = selectedChat ? CHATS.find(c => c.id === selectedChat) : null

  const handleSendMessage = () => {
    if (message.trim()) {
      setMessage("")
    }
  }

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Заголовок */}
      <div className="sticky top-0 z-10 bg-white border-b border-neutral-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="sm" onClick={() => router.push("/")} className="rounded-lg">
                <ArrowLeft className="w-5 h-5 text-neutral-500" />
              </Button>
              <h1 className="text-2xl font-bold text-neutral-900">Чаты</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Список чатов */}
        <div className="max-w-2xl mx-auto">
          {/* Поиск */}
          <Card className="border border-neutral-200 shadow-sm bg-white mb-6">
            <CardContent className="p-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-neutral-400" />
                <Input
                  placeholder="Поиск чатов..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 rounded-lg border focus:border-neutral-400 bg-neutral-50"
                />
              </div>
            </CardContent>
          </Card>

          {/* Список чатов */}
          <div className="space-y-2">
            {filteredChats.map((chat) => (
              <Card 
                key={chat.id} 
                className="border border-neutral-200 shadow-sm bg-white hover:shadow-md transition-all cursor-pointer"
                onClick={() => setSelectedChat(chat.id)}
              >
                <CardContent className="p-4">
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <Avatar className="w-12 h-12">
                        <AvatarFallback className="bg-neutral-800 text-white font-bold">
                          {chat.avatar}
                        </AvatarFallback>
                      </Avatar>
                      {chat.online && (
                        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                      )}
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="font-semibold text-neutral-900">{chat.name}</h3>
                        <span className="text-xs text-neutral-500">{chat.timestamp}</span>
                      </div>
                      <p className="text-sm text-neutral-600 truncate">{chat.lastMessage}</p>
                    </div>
                    
                    {chat.unread > 0 && (
                      <Badge className="bg-neutral-800 text-white text-xs">
                        {chat.unread}
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredChats.length === 0 && (
            <Card className="border border-neutral-200 shadow-sm bg-white">
              <CardContent className="p-12 text-center">
                <div className="text-6xl mb-4">💬</div>
                <h3 className="text-xl font-semibold mb-2 text-neutral-800">Нет чатов</h3>
                <p className="text-neutral-600 mb-4">Начните знакомиться, чтобы появились чаты</p>
                <Button 
                  className="bg-neutral-800 hover:bg-neutral-700 text-white rounded-lg"
                  onClick={() => router.push('/discover')}
                >
                  Найти друзей
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
      <BottomNavigation />
    </div>
  )
}
