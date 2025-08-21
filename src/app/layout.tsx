import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'vibe-records - Track Your GitHub Progress',
  description: 'A productivity dashboard for vibe coders to track GitHub repo progress with AI insights',
  keywords: ['productivity', 'github', 'progress-tracking', 'developer-tools', 'vibe-coders'],
  authors: [{ name: 'vibe-records' }],
  manifest: '/manifest.json',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#0ea5e9',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} h-full antialiased`}>
        <div className="min-h-full bg-white">
          {children}
        </div>
      </body>
    </html>
  )
}
