"use client"

import Link from 'next/link'
import { useMemo, useState } from 'react'
import { usePathname } from 'next/navigation'
import { Menu, Sparkles } from 'lucide-react'
import navItems from '@/data/navigation.json'
import ThemeToggle from './ThemeToggle'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  const navLinks = useMemo(() => {
    const mapKey: Record<string, string> = {
      '/': 'Home',
      '/japanese-learning': 'Learn',
      '/daily-life': 'Life',
      '/driving-license': 'Driving',
      '/emergency': 'Emergency',
      '/useful-links': 'Resources',
      '/about': 'About'
    }

    return navItems.map((item) => {
      const isActive = pathname === item.href
      const label = mapKey[item.href] ?? item.label
      return (
        <li key={item.href} className="list-none">
          <Link
            href={item.href}
            className={`inline-flex whitespace-nowrap items-center rounded-full px-2.5 py-1.5 text-sm font-medium transition-all duration-200 ${
              isActive
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
            }`}
            onClick={() => setOpen(false)}
          >
            {label}
          </Link>
        </li>
      )
    })
  }, [pathname])

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-sm dark:border-slate-800 dark:bg-slate-950/90">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8 h-16">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-3 text-sm font-medium tracking-tight text-slate-900 dark:text-white">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-blue-600 text-white shadow-sm">
              <Sparkles size={16} />
            </span>
            <span className="hidden sm:inline-block">Japan Life Assistant</span>
          </Link>
        </div>

        <nav className="hidden items-center justify-center lg:flex">
          <ul className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50/80 p-1">{navLinks}</ul>
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <div className="transition-all duration-200 hover:scale-[1.02]">
            <ThemeToggle />
          </div>
          <Link href="/about" className="hidden rounded-full border border-slate-200 bg-white px-3 py-1 text-sm font-medium text-slate-700 shadow-sm transition hover:border-blue-300 hover:text-blue-700 sm:inline-flex">
            About
          </Link>

          <div className="flex items-center lg:hidden">
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-900 shadow-sm transition hover:border-slate-300 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:hover:border-slate-500"
              onClick={() => setOpen((value) => !value)}
              aria-label="Toggle navigation menu"
            >
              <Menu size={18} />
            </button>
          </div>
        </div>
      </div>

      {open ? (
        <div className="border-t border-slate-200/80 bg-white/95 px-6 py-4 shadow-sm dark:border-slate-800/80 dark:bg-slate-950/95 lg:hidden">
          <ul className="space-y-2">{navLinks}</ul>
        </div>
      ) : null}
    </header>
  )
}
