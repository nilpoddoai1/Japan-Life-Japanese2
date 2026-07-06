"use client"

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Search, Sparkles } from 'lucide-react'

interface HeroBannerProps {
  onOpenChat?: () => void
}

export default function HeroBanner({ onOpenChat }: HeroBannerProps) {
  const [prompt, setPrompt] = useState('')

  return (
    <section className="relative overflow-hidden rounded-2xl border border-slate-200/80 bg-gradient-to-br from-slate-50 via-white to-slate-50 p-4 shadow-sm sm:p-6">
      <div className="relative z-10 mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-2 py-1 text-xs font-medium text-blue-700 shadow-sm">
            <Sparkles size={14} />
            Practical guidance for life in Japan
          </div>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight leading-tight text-slate-950">
            Simplify life in Japan
          </h1>
          <p className="mt-3 max-w-3xl text-sm text-slate-600 leading-6">
            Dependable, step-by-step help for daily tasks, healthcare, transport, and official procedures.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/japanese-learning" className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700">
              Start learning
            </Link>
            <Link href="/daily-life" className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50">
              Explore guides
            </Link>
          </div>
        </div>

        <div>
          <div className="rounded-2xl border border-slate-200/80 bg-white p-4 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Ask the assistant</p>
            <div className="mt-3 flex gap-2">
              <label className="relative flex-1">
                <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <input
                  value={prompt}
                  onChange={(event) => setPrompt(event.target.value)}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter' && prompt.trim()) {
                      event.preventDefault()
                      onOpenChat?.()
                    }
                  }}
                  placeholder="How do I separate trash in Tokyo?"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 pl-10 pr-3 py-2 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
                />
              </label>
              <button
                type="button"
                onClick={() => {
                  if (prompt.trim()) {
                    onOpenChat?.()
                  }
                }}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-3 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                Ask
                <ArrowRight size={14} />
              </button>
            </div>
            <p className="mt-3 text-sm text-slate-500">Try: “What should I bring to a clinic?”</p>
          </div>
        </div>
      </div>
    </section>
  )
}
