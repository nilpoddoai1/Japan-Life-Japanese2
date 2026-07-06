import Link from 'next/link'
import Card from '@/components/ui/Card'
import Panel from '@/components/ui/Panel'
import { garbageGuide } from '@/data/guides'

export default function GarbageGuidePage() {
  return (
    <main className="min-h-screen bg-slate-50 py-8 text-slate-900 sm:py-10">
      <div className="container mx-auto space-y-6">
        <section className="rounded-[32px] border border-slate-200/80 bg-white p-6 shadow-sm sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">Garbage guide</p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">Sort trash the right way in Japan.</h1>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">Follow the local waste rules, collection steps, and useful Japanese phrases to avoid common mistakes.</p>
          <div className="mt-6">
            <Link href="/" className="inline-flex items-center justify-center rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-blue-700 hover:shadow-md">
              Back to dashboard
            </Link>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          {garbageGuide.categories.map((category) => (
            <Card key={category.name} padding="lg">
              <h2 className="text-xl font-semibold text-slate-950">{category.name}</h2>
              <ul className="mt-4 space-y-3 pl-5 text-sm leading-7 text-slate-600">
                {category.items.map((item) => (
                  <li key={item} className="list-disc">{item}</li>
                ))}
              </ul>
            </Card>
          ))}
        </section>

        <Panel title="How to dispose of waste" subtitle="A simple checklist that works well for most neighborhoods.">
          <ol className="space-y-3 pl-5 text-sm leading-7 text-slate-600">
            {garbageGuide.steps.map((step) => (
              <li key={step} className="list-decimal">{step}</li>
            ))}
          </ol>
        </Panel>

        <section className="grid gap-6 lg:grid-cols-2">
          <Card padding="lg">
            <h2 className="text-xl font-semibold text-slate-950">Useful phrases</h2>
            <div className="mt-5 space-y-3">
              {garbageGuide.phrases.map((phrase) => (
                <div key={phrase.phrase} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <p className="font-semibold text-slate-900">{phrase.phrase}</p>
                  <p className="mt-2 text-sm text-slate-600">{phrase.translation}</p>
                </div>
              ))}
            </div>
          </Card>

          <Card padding="lg" className="bg-slate-50">
            <h2 className="text-xl font-semibold text-slate-950">Quick reference</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">If you are unsure, check your city’s official garbage calendar and use the phrase below at the city office.</p>
            <div className="mt-5 rounded-2xl border border-slate-200 bg-white p-4">
              <p className="font-semibold text-slate-900">ゴミの出し方を教えてください。</p>
              <p className="mt-2 text-sm text-slate-600">Please tell me how to dispose of garbage.</p>
            </div>
          </Card>
        </section>
      </div>
    </main>
  )
}
