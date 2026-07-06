import Link from 'next/link'
import Card from '@/components/ui/Card'
import Panel from '@/components/ui/Panel'
import { trainHelper } from '@/data/guides'

export default function TrainHelperPage() {
  return (
    <main className="min-h-screen bg-slate-50 py-8 text-slate-900 sm:py-10">
      <div className="container mx-auto space-y-6">
        <section className="rounded-[32px] border border-slate-200/80 bg-white p-6 shadow-sm sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">Train helper</p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">Transit navigation made easy.</h1>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">Use station phrases, IC card tips, and straightforward travel steps for Japan’s trains.</p>
          <div className="mt-6">
            <Link href="/" className="inline-flex items-center justify-center rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-blue-700 hover:shadow-md">
              Back to dashboard
            </Link>
          </div>
        </section>

        <Panel title="Transit steps" subtitle="Follow the sequence below to move confidently through stations.">
          <ol className="space-y-3 pl-5 text-sm leading-7 text-slate-600">
            {trainHelper.steps.map((step) => (
              <li key={step} className="list-decimal">{step}</li>
            ))}
          </ol>
        </Panel>

        <Card padding="lg">
          <h2 className="text-xl font-semibold text-slate-950">Useful phrases</h2>
          <div className="mt-5 space-y-3">
            {trainHelper.phrases.map((phrase) => (
              <div key={phrase.phrase} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="font-semibold text-slate-900">{phrase.phrase}</p>
                <p className="mt-2 text-sm text-slate-600">{phrase.translation}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </main>
  )
}
