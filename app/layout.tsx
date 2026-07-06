import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })

export const metadata: Metadata = {
  title: 'Japan Life Assistant',
  description: 'Practical Japan living guide for foreigners with vocabulary, daily life tips, and emergency information.',
  openGraph: {
    title: 'Japan Life Assistant',
    description: 'Practical Japan living guide for foreigners with vocabulary, daily life tips, and emergency information.',
    type: 'website',
    url: 'https://example.com',
    images: [{ url: '/favicon.svg', width: 1200, height: 630, alt: 'Japan Life Assistant' }]
  },
  metadataBase: new URL('https://example.com'),
  icons: {
    icon: '/favicon.svg'
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="min-h-screen bg-transparent text-slate-900 antialiased transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100">
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
