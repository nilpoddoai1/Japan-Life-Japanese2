'use client'

import { useEffect, useState } from 'react'
import { CheckCircle2, Circle, Sparkles } from 'lucide-react'

type ChecklistItem = {
  id: string
  title: string
  description: string
}

interface NewcomerChecklistProps {
  items: ChecklistItem[]
}

const STORAGE_KEY = 'newcomer-checklist-progress'

export default function NewcomerChecklist({ items }: NewcomerChecklistProps) {
  const [completed, setCompleted] = useState<string[]>([])

  useEffect(() => {
    const saved = typeof window !== 'undefined' ? window.localStorage.getItem(STORAGE_KEY) : null
    if (saved) {
      try {
        setCompleted(JSON.parse(saved))
      } catch {
        setCompleted([])
      }
    }
  }, [])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(completed))
    }
  }, [completed])

  const toggleCompleted = (id: string) => {
    setCompleted((current) => (current.includes(id) ? current.filter((item) => item !== id) : [...current, id]))
  }

  const progress = Math.round((completed.length / items.length) * 100)

  return (
    <div className="rounded-[32px] border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-200 hover:shadow-md sm:p-7">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">
            <Sparkles size={14} />
            Newcomer checklist
          </div>
          <h2 className="mt-3 text-2xl font-semibold text-slate-950">Settle in with confidence</h2>
          <p className="mt-2 text-sm text-slate-600">Complete the most important steps for your first weeks in Japan.</p>
        </div>
        <div className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
          {completed.length}/{items.length} done
        </div>
      </div>

      <div className="mt-6 h-2 overflow-hidden rounded-full bg-slate-200">
        <div className="h-full rounded-full bg-blue-600 transition-all duration-300" style={{ width: `${progress}%` }} />
      </div>

      <div className="mt-6 space-y-3">
        {items.map((item) => {
          const isDone = completed.includes(item.id)
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => toggleCompleted(item.id)}
              className={`group w-full rounded-2xl border p-4 text-left transition-all duration-200 ${
                isDone
                  ? 'border-blue-200 bg-blue-50 shadow-sm'
                  : 'border-slate-200 bg-slate-50 hover:border-blue-300 hover:bg-white'
              }`}
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="font-semibold text-slate-900">{item.title}</p>
                  <p className="mt-1 text-sm text-slate-600">{item.description}</p>
                </div>
                <span className="shrink-0 text-blue-600">
                  {isDone ? <CheckCircle2 size={20} /> : <Circle size={20} className="text-slate-400" />}
                </span>
              </div>
            </button>
          )
        })}
      </div>
    </div>
  )
}
