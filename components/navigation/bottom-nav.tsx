"use client"

import { Button } from "@/components/ui/button"
import { Home, Users, MessageSquare, BookOpen, User } from "lucide-react"
import { useRouter, usePathname } from "next/navigation"

export function BottomNavigation() {
  const router = useRouter()
  const pathname = usePathname()

  const navItems = [
    { icon: Home, label: "Главная", path: "/" },
    { icon: Users, label: "Знакомства", path: "/discover" },
    { icon: MessageSquare, label: "Чаты", path: "/chat" },
    { icon: BookOpen, label: "Группы", path: "/study-groups" },
    { icon: User, label: "Профиль", path: "/profile-setup" },
  ]

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-neutral-200 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-around py-2">
          {navItems.map((item) => {
            const isActive = pathname === item.path
            const Icon = item.icon

            return (
              <Button
                key={item.path}
                variant="ghost"
                size="sm"
                onClick={() => router.push(item.path)}
                className={`flex flex-col items-center gap-1 h-auto py-2 px-3 rounded-lg ${
                  isActive ? "bg-neutral-800 text-white" : "text-neutral-600 hover:bg-neutral-100"
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="text-xs font-medium">{item.label}</span>
              </Button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
