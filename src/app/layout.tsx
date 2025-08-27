import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Vibe Records - Productivity Dashboard',
  description: 'Track your GitHub repository progress with AI insights and visual progress indicators',
  keywords: 'productivity, github, progress tracking, dashboard, developer tools',
  authors: [{ name: 'Vibe Records Team' }],
  creator: 'Vibe Records',
  publisher: 'Vibe Records',
  robots: 'index, follow',
  openGraph: {
    title: 'Vibe Records - Productivity Dashboard',
    description: 'Track your GitHub repository progress with AI insights and visual progress indicators',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vibe Records - Productivity Dashboard',
    description: 'Track your GitHub repository progress with AI insights and visual progress indicators',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: 'cover',
  themeColor: '#373539',
  colorScheme: 'dark',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full">
      <head>
        {/* iOS-specific meta tags for home screen app */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Vibe Records" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content="#373539" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        
        {/* iOS status bar and home indicator fixes */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover" />
        
        {/* Prevent zoom on input focus */}
        <meta name="format-detection" content="telephone=no" />
        
        {/* iOS splash screen */}
        <link rel="apple-touch-startup-image" href="/splash.png" />
        <link rel="apple-touch-icon" href="/icon-192.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/icon-152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/icon-180.png" />
        <link rel="apple-touch-icon" sizes="167x167" href="/icon-167.png" />
      </head>
      <body className="h-full">
        <div className="min-h-full">
          {children}
        </div>
      </body>
    </html>
  )
}
