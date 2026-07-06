import Link from 'next/link'
import Card from '@/components/ui/Card'
import Panel from '@/components/ui/Panel'
import { hospitalHelp } from '@/data/guides'

export default function HospitalHelpPage() {
  return (
    <main className="min-h-screen bg-slate-50 py-8 text-slate-900 sm:py-10">
      <div className="container mx-auto space-y-6">
        <section className="rounded-[32px] border border-slate-200/80 bg-white p-6 shadow-sm sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">Hospital help</p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">Medical visits made clearer.</h1>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">Use practical steps and polite Japanese phrases for hospitals, clinics, and pharmacy visits.</p>
          <div className="mt-6">
            <Link href="/" className="inline-flex items-center justify-center rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-blue-700 hover:shadow-md">
              Back to dashboard
            </Link>
          </div>
        </section>

        <Panel title="Before you go" subtitle="Bring the essentials and arrive prepared.">
          <ul className="space-y-3 pl-5 text-sm leading-7 text-slate-600">
            {hospitalHelp.checklist.map((item) => (
              <li key={item} className="list-disc">{item}</li>
            ))}
          </ul>
        </Panel>

        <section className="grid gap-6 lg:grid-cols-2">
          <Card padding="lg">
            <h2 className="text-xl font-semibold text-slate-950">What to say</h2>
            <div className="mt-5 space-y-3">
              {hospitalHelp.phrases.map((item) => (
                <div key={item.phrase} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <p className="font-semibold text-slate-900">{item.phrase}</p>
                  <p className="mt-2 text-sm text-slate-600">{item.translation}</p>
                </div>
              ))}
            </div>
          </Card>

          <Card padding="lg" className="bg-slate-50">
            <h2 className="text-xl font-semibold text-slate-950">Step-by-step visit</h2>
            <ol className="mt-5 space-y-3 pl-5 text-sm leading-7 text-slate-600">
              {hospitalHelp.steps.map((step) => (
                <li key={step} className="list-decimal">{step}</li>
              ))}
            </ol>
          </Card>
        </section>

        <Card padding="lg">
          <h2 className="text-xl font-semibold text-slate-950">Need immediate help?</h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">If it is an emergency, call 119 for ambulance or fire services. Otherwise, use the clinic’s reception service and show your insurance card.</p>
        </Card>
      </div>
    </main>
  )
}
