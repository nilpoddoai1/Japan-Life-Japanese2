"use client"

export default function Footer() {
  return (
    <footer className="border-t border-slate-200/80 bg-white/90 py-8 dark:border-slate-800/80 dark:bg-slate-950/90">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">Japan Life Assistant</p>
          <p className="mt-2 max-w-xl text-sm text-slate-600 dark:text-slate-400">Helpful Japan living guides, vocabulary, and emergency resources.</p>
        </div>
        <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500 dark:text-slate-400">
          <span>Built for newcomers and travelers.</span>
          <span className="rounded-full bg-slate-100 px-3 py-1 dark:bg-slate-900">2026</span>
        </div>
      </div>
    </footer>
  )
}
