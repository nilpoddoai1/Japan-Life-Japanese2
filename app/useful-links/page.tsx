import { usefulLinks } from '@/data/links'

export default function UsefulLinksPage() {
  return (
    <main className="min-h-screen py-10">
      <div className="container mx-auto space-y-8">
        <section className="rounded-[36px] border border-slate-200/70 bg-white/90 p-8 shadow-soft dark:border-slate-700/80 dark:bg-slate-900/85">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">Useful links</p>
            <h1 className="text-4xl font-semibold text-slate-950 dark:text-white">Trusted resources for living in Japan.</h1>
            <p className="max-w-3xl text-slate-600 dark:text-slate-300">Browse government, transportation, health, weather, and language resources with easy placeholder links.</p>
          </div>
        </section>

        <div className="grid gap-6 xl:grid-cols-2">
          {usefulLinks.map((link) => (
            <a key={`${link.category}-${link.title}`} href={link.href} target="_blank" rel="noreferrer" className="rounded-[32px] border border-slate-200/70 bg-slate-50/90 p-6 shadow-soft transition hover:-translate-y-1 hover:border-blue-300 hover:bg-blue-50/80 dark:border-slate-700/80 dark:bg-slate-900/85 dark:hover:border-blue-500 dark:hover:bg-slate-800">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-700 dark:text-indigo-200">{link.category}</p>
              <h2 className="mt-3 text-xl font-semibold text-slate-950 dark:text-white">{link.title}</h2>
              <p className="mt-2 text-slate-600 dark:text-slate-300">{link.description}</p>
            </a>
          ))}
        </div>
      </div>
    </main>
  )
}
