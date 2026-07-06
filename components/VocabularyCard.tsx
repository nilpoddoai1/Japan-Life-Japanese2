import type { VocabularyItem } from '@/types'

interface VocabularyCardProps {
  item: VocabularyItem
}

export default function VocabularyCard({ item }: VocabularyCardProps) {
  return (
    <article className="card-surface hover:border-blue-200 hover:bg-slate-50">
      <div className="flex flex-wrap items-center gap-3">
        <span className="rounded-2xl bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-700 dark:bg-slate-800 dark:text-blue-200">{item.category}</span>
        <span className="text-sm text-slate-500 dark:text-slate-400">{item.romaji}</span>
      </div>
      <div className="mt-4 space-y-2">
        <div className="flex items-end gap-4">
          <p className="text-3xl font-semibold text-slate-950 dark:text-white">{item.kanji}</p>
          <p className="text-xl text-slate-600 dark:text-slate-300">{item.hiragana}</p>
        </div>
        <p className="text-slate-700 dark:text-slate-300">{item.meaning}</p>
      </div>
      <p className="mt-4 rounded-3xl bg-slate-100/80 px-4 py-3 text-sm text-slate-600 dark:bg-slate-800/80 dark:text-slate-300">
        {item.example}
      </p>
    </article>
  )
}
