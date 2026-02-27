import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Element Fusion — Jeu de combinaison d\'elements',
  description: 'Decouvrez 500+ elements en combinant Eau, Feu, Terre et Air. Inspire de Little Alchemy.',
  manifest: '/manifest.json',
  keywords: ['jeu', 'elements', 'fusion', 'little alchemy', 'puzzle'],
  authors: [{ name: 'Custom Digital Services' }],
  openGraph: {
    title: 'Element Fusion',
    description: 'Jeu de combinaison d\'elements — Decouvrez 500+ elements',
    type: 'website',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0F0F1A',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`dark ${inter.variable}`}>
      <body className={`${inter.className} bg-bg-primary text-text-primary antialiased`}>
        {children}
      </body>
    </html>
  )
}
