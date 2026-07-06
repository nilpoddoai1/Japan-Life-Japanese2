"use client"
import VocabularyCard from '@/components/VocabularyCard'
import { vocabulary } from '@/data/vocabulary'
import { useMemo, useState } from 'react'

const categories = ['All', 'Daily Conversation', 'Workplace', 'Hospital', 'Shopping', 'Transportation', 'Driving Test']

export default function JapaneseLearningPage() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All')

  const filtered = useMemo(() => {
    return vocabulary.filter((item) => {
      const matchesCategory = category === 'All' || item.category === category
      const matchesSearch = [item.kanji, item.hiragana, item.romaji, item.meaning, item.example]
        .some((value) => value.toLowerCase().includes(search.toLowerCase()))
      return matchesCategory && (!search || matchesSearch)
    })
  }, [category, search])

  return (
    <main className="min-h-screen py-10">
      <div className="container mx-auto space-y-8">
        <section className="rounded-[36px] border border-slate-200/70 bg-white/90 p-8 shadow-soft dark:border-slate-700/80 dark:bg-slate-900/85">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">Japanese learning</p>
            <h1 className="text-4xl font-semibold text-slate-950 dark:text-white">Practical vocabulary for everyday life.</h1>
            <p className="max-w-3xl text-slate-600 dark:text-slate-300">Filter by category, search for phrases, and learn Japanese words with example sentences for life in Japan.</p>
          </div>
          <div className="mt-8 grid gap-4 lg:grid-cols-[1fr_2fr]">
            <input
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search vocabulary..."
              className="rounded-3xl border border-slate-200/70 bg-slate-50/90 px-5 py-4 text-slate-900 outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-200 dark:border-slate-700/80 dark:bg-slate-900/85 dark:text-slate-100 dark:focus:border-blue-500"
            />
            <select
              value={category}
              onChange={(event) => setCategory(event.target.value)}
              className="rounded-3xl border border-slate-200/70 bg-slate-50/90 px-5 py-4 text-slate-900 outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-200 dark:border-slate-700/80 dark:bg-slate-900/85 dark:text-slate-100 dark:focus:border-blue-500"
            >
              {categories.map((categoryOption) => (
                <option key={categoryOption} value={categoryOption}>
                  {categoryOption}
                </option>
              ))}
            </select>
          </div>
        </section>

        <section className="grid gap-6 xl:grid-cols-3">
          {filtered.map((item) => (
            <VocabularyCard key={item.id} item={item} />
          ))}
        </section>
      </div>
    </main>
  )
}
