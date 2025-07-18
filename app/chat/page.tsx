"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Send, MoreVertical, Smile } from "lucide-react"
import { useRouter, useSearchParams } from "next/navigation"

// Моковые данные чатов
const MOCK_CHATS = [
  {
    id: 1,
    name: "Аня",
    avatar: "/placeholder.svg?height=50&width=50",
    lastMessage: "Привет! Как дела в школе? 📚",
    time: "10:30",
    unread: 2,
    online: true,
  },
  {
    id: 2,
    name: "Максим",
    avatar: "/placeholder.svg?height=50&width=50",
    lastMessage: "Хочешь поиграть в новую игру? 🎮",
    time: "09:15",
    unread: 0,
    online: false,
  },
  {
    id: 3,
    name: "Лиза",
    avatar: "/placeholder.svg?height=50&width=50",
    lastMessage: "Спасибо за помощь с домашкой! 🙏",
    time: "Вчера",
    unread: 1,
    online: true,
  },
]

const MOCK_MESSAGES = [
  { id: 1, text: "Привет! Как дела в школе? 📚", sender: "other", time: "10:25" },
  { id: 2, text: "Привет! Все отлично! Сегодня была контрольная по математике 😅", sender: "me", time: "10:26" },
  { id: 3, text: "Ого! Как прошла? Я помню, ты готовилась всю неделю 📖", sender: "other", time: "10:28" },
  { id: 4, text: "Думаю, хорошо! Спасибо, что помогала с подготовкой 🤗", sender: "me", time: "10:29" },
  { id: 5, text: "Всегда рада помочь! Может встретимся после уроков? ☕", sender: "other", time: "10:30" },
]

const EMOJI_LIST = ["😊", "😂", "❤️", "👍", "🎉", "🔥", "😍", "🤔", "😎", "🙌"]

export default function ChatPage() {
  const searchParams = useSearchParams()
  const userId = searchParams.get("user")
  const [selectedChat, setSelectedChat] = useState<number | null>(null)
  const [newMessage, setNewMessage] = useState("")
  const [showEmoji, setShowEmoji] = useState(false)
  const router = useRouter()

  useEffect(() => {
    if (userId && !selectedChat) {
      const chatId = Number.parseInt(userId)
      if (MOCK_CHATS.find((c) => c.id === chatId)) {
        setSelectedChat(chatId)
      }
    }
  }, [userId, selectedChat])

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newMessage.trim()) return

    // Здесь будет логика отправки сообщения
    console.log("Отправка сообщения:", newMessage)
    setNewMessage("")
  }

  const addEmoji = (emoji: string) => {
    setNewMessage((prev) => prev + emoji)
    setShowEmoji(false)
  }

  if (selectedChat) {
    const chat = MOCK_CHATS.find((c) => c.id === selectedChat)

    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-100 via-blue-50 to-cyan-100">
        {/* Заголовок чата */}
        <div className="sticky top-0 z-10 bg-white/80 backdrop-blur-md border-b">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Button variant="ghost" size="sm" onClick={() => setSelectedChat(null)} className="rounded-xl">
                  <ArrowLeft className="w-5 h-5" />
                </Button>
                <div className="relative">
                  <Avatar className="w-12 h-12 border-2 border-white shadow-sm">
                    <AvatarImage src={chat?.avatar || "/placeholder.svg"} />
                    <AvatarFallback className="teen-gradient text-white font-bold">{chat?.name[0]}</AvatarFallback>
                  </Avatar>
                  {chat?.online && (
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
                  )}
                </div>
                <div>
                  <h2 className="font-bold text-lg">{chat?.name}</h2>
                  <p className="text-sm text-gray-500 flex items-center gap-1">
                    {chat?.online ? (
                      <>
                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>В сети
                      </>
                    ) : (
                      "Был(а) недавно"
                    )}
                  </p>
                </div>
              </div>
              <Button variant="ghost" size="sm" className="rounded-xl">
                <MoreVertical className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Сообщения */}
        <div className="container mx-auto px-4 py-4 pb-24">
          <div className="max-w-2xl mx-auto space-y-4">
            {MOCK_MESSAGES.map((message) => (
              <div key={message.id} className={`flex ${message.sender === "me" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl ${
                    message.sender === "me"
                      ? "teen-gradient text-white shadow-lg"
                      : "bg-white shadow-sm border border-gray-100"
                  }`}
                >
                  <p className="text-sm leading-relaxed">{message.text}</p>
                  <p className={`text-xs mt-2 ${message.sender === "me" ? "text-purple-100" : "text-gray-500"}`}>
                    {message.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Поле ввода */}
        <div className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-md border-t p-4">
          <div className="container mx-auto">
            <div className="max-w-2xl mx-auto">
              {/* Панель эмодзи */}
              {showEmoji && (
                <div className="mb-3 p-3 bg-white rounded-2xl shadow-lg border">
                  <div className="flex flex-wrap gap-2">
                    {EMOJI_LIST.map((emoji) => (
                      <button
                        key={emoji}
                        onClick={() => addEmoji(emoji)}
                        className="text-2xl p-2 hover:bg-gray-100 rounded-xl transition-colors"
                      >
                        {emoji}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <form onSubmit={handleSendMessage} className="flex gap-3 items-end">
                <div className="flex-1 relative">
                  <Input
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="Напиши сообщение... 💬"
                    className="pr-12 h-12 text-base rounded-2xl border-2 focus:border-purple-400 bg-white"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowEmoji(!showEmoji)}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 rounded-xl"
                  >
                    <Smile className="w-5 h-5 text-gray-400" />
                  </Button>
                </div>
                <Button
                  type="submit"
                  className="h-12 w-12 teen-gradient hover:opacity-90 rounded-2xl shadow-lg"
                  disabled={!newMessage.trim()}
                >
                  <Send className="w-5 h-5" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-blue-50 to-cyan-100">
      {/* Заголовок */}
      <div className="sticky top-0 z-10 bg-white/80 backdrop-blur-md border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="sm" onClick={() => router.push("/dashboard")} className="rounded-xl">
                <ArrowLeft className="w-5 h-5" />
              </Button>
              <div>
                <h1 className="text-xl font-bold flex items-center gap-2">💬 Сообщения</h1>
                <p className="text-sm text-gray-500">Общайся с друзьями!</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Список чатов */}
      <div className="container mx-auto px-4 py-6">
        <div className="max-w-2xl mx-auto space-y-3">
          {MOCK_CHATS.map((chat) => (
            <Card
              key={chat.id}
              className="cursor-pointer hover:shadow-lg transition-all border-0 bg-white/80 backdrop-blur-sm hover:bg-white/90"
              onClick={() => setSelectedChat(chat.id)}
            >
              <CardContent className="p-4">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <Avatar className="w-14 h-14 border-2 border-white shadow-sm">
                      <AvatarImage src={chat.avatar || "/placeholder.svg"} />
                      <AvatarFallback className="teen-gradient text-white font-bold text-lg">
                        {chat.name[0]}
                      </AvatarFallback>
                    </Avatar>
                    {chat.online && (
                      <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 border-2 border-white rounded-full" />
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-bold text-lg truncate">{chat.name}</h3>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-500">{chat.time}</span>
                        {chat.unread > 0 && (
                          <Badge className="bg-red-500 text-white text-xs min-w-[20px] h-5 rounded-full flex items-center justify-center">
                            {chat.unread}
                          </Badge>
                        )}
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 truncate">{chat.lastMessage}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Пустое состояние */}
        {MOCK_CHATS.length === 0 && (
          <div className="text-center py-16">
            <div className="text-8xl mb-6">💬</div>
            <h2 className="text-2xl font-bold text-gray-600 mb-3">Пока нет сообщений</h2>
            <p className="text-gray-500 mb-6 max-w-md mx-auto">
              Начни общаться с людьми, которые тебе понравились! Найди друзей по интересам 🌟
            </p>
            <Button
              onClick={() => router.push("/dashboard")}
              className="teen-gradient hover:opacity-90 rounded-xl px-8 py-3 text-lg font-semibold"
            >
              Найти друзей 🚀
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
