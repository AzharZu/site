import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { BottomNavigation } from "@/components/navigation/bottom-nav"

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
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
        <BottomNavigation />
      </body>
    </html>
  )
}
