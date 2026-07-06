import { dailyLifeTopics } from '@/data/dailylife'

export default function DailyLifePage() {
  return (
    <main className="min-h-screen py-10">
      <div className="container mx-auto space-y-8">
        <section className="rounded-[36px] border border-slate-200/70 bg-white/90 p-8 shadow-soft dark:border-slate-700/80 dark:bg-slate-900/85">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">Daily life</p>
            <h1 className="text-4xl font-semibold text-slate-950 dark:text-white">Essential guides for living in Japan.</h1>
            <p className="max-w-3xl text-slate-600 dark:text-slate-300">Explore housing, city office procedures, insurance, banking, garbage separation, and communication support.</p>
          </div>
        </section>

        <div className="grid gap-6">
          {dailyLifeTopics.map((topic) => (
            <section key={topic.title} className="rounded-[32px] border border-slate-200/70 bg-slate-50/90 p-8 shadow-soft dark:border-slate-700/80 dark:bg-slate-900/85">
              <h2 className="text-2xl font-semibold text-slate-950 dark:text-white">{topic.title}</h2>
              <p className="mt-4 text-slate-600 dark:text-slate-300">{topic.description}</p>
              <div className="mt-6 grid gap-6 md:grid-cols-2">
                <div className="rounded-3xl bg-white/90 p-5 shadow-sm dark:bg-slate-950/85">
                  <h3 className="font-semibold text-slate-900 dark:text-white">Required documents</h3>
                  <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-600 dark:text-slate-300">
                    {topic.documents.map((document) => (
                      <li key={document}>{document}</li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-3xl bg-white/90 p-5 shadow-sm dark:bg-slate-950/85">
                  <h3 className="font-semibold text-slate-900 dark:text-white">Useful Japanese words</h3>
                  <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-600 dark:text-slate-300">
                    {topic.words.map((word) => (
                      <li key={word}>{word}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="mt-6 rounded-3xl border border-slate-200/70 bg-white/90 p-6 dark:border-slate-700/80 dark:bg-slate-950/85">
                <h3 className="font-semibold text-slate-900 dark:text-white">Helpful tips</h3>
                <ul className="mt-4 space-y-3 text-slate-600 dark:text-slate-300">
                  {topic.tips.map((tip) => (
                    <li key={tip}>• {tip}</li>
                  ))}
                </ul>
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  )
}
