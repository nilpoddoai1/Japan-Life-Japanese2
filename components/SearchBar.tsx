"use client"

interface SearchBarProps {
  placeholder?: string
}

export default function SearchBar({ placeholder }: SearchBarProps) {
  const ph = placeholder ?? 'Search topics, words, or guides...'

  return (
    <div className="relative rounded-full border border-slate-200 bg-white px-4 py-3 shadow-sm transition-all duration-200 hover:border-blue-300 hover:shadow-md focus-within:border-blue-300 focus-within:ring-2 focus-within:ring-blue-200 dark:border-slate-700 dark:bg-slate-900">
      <label className="sr-only" htmlFor="global-search">
        Search the app
      </label>
      <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500">🔎</span>
      <input
        id="global-search"
        type="search"
        placeholder={ph}
        className="w-full bg-transparent pl-11 text-sm text-slate-900 outline-none placeholder:text-slate-400 dark:text-slate-100"
      />
    </div>
  )
}
