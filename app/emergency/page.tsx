import EmergencyCard from '@/components/EmergencyCard'
import { emergencyNumbers, safetyTips, phrases } from '@/data/emergency'

export default function EmergencyPage() {
  return (
    <main className="min-h-screen py-10">
      <div className="container mx-auto space-y-8">
        <section className="rounded-[36px] border border-slate-200/70 bg-white/90 p-8 shadow-soft dark:border-slate-700/80 dark:bg-slate-900/85">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">Emergency</p>
            <h1 className="text-4xl font-semibold text-slate-950 dark:text-white">Critical numbers and disaster safety.</h1>
            <p className="max-w-3xl text-slate-600 dark:text-slate-300">Keep emergency contacts and essential safety advice ready for earthquakes, typhoons, and everyday incidents.</p>
          </div>
        </section>

        <section className="grid gap-4 lg:grid-cols-2">
          {emergencyNumbers.map((item) => (
            <EmergencyCard key={item.title} title={item.title} value={item.value} description={item.description} />
          ))}
        </section>

        <section className="rounded-[32px] border border-slate-200/70 bg-slate-50/90 p-8 shadow-soft dark:border-slate-700/80 dark:bg-slate-900/85">
          <h2 className="text-2xl font-semibold text-slate-950 dark:text-white">Safety tips</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {safetyTips.map((tip) => (
              <div key={tip.title} className="rounded-3xl bg-white/90 p-6 shadow-sm dark:bg-slate-950/85">
                <h3 className="font-semibold text-slate-900 dark:text-white">{tip.title}</h3>
                <p className="mt-3 text-slate-600 dark:text-slate-300">{tip.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-[32px] border border-slate-200/70 bg-white/90 p-8 shadow-soft dark:border-slate-700/80 dark:bg-slate-900/85">
          <h2 className="text-2xl font-semibold text-slate-950 dark:text-white">Emergency Japanese phrases</h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {phrases.map((phrase) => (
              <li key={phrase.phrase} className="rounded-3xl border border-slate-200/70 bg-slate-50/90 p-5 dark:border-slate-700/80 dark:bg-slate-950/85">
                <p className="font-semibold text-slate-900 dark:text-white">{phrase.phrase}</p>
                <p className="mt-2 text-slate-600 dark:text-slate-300">{phrase.translation}</p>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  )
}
