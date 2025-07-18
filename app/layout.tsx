import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { BottomNavigation } from "@/components/navigation/bottom-nav"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "IgnitePride - Социальная обучающая сеть",
  description: "Образовательная платформа для подростков: учись, общайся, развивайся вместе с друзьями",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
        <BottomNavigation />
      </body>
    </html>
  )
}
