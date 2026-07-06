import { drivingInfo } from '@/data/driving'
import EmergencyCard from '@/components/EmergencyCard'

export default function DrivingLicensePage() {
  const sections = drivingInfo.sections

  return (
    <main className="min-h-screen py-10">
      <div className="container mx-auto space-y-8">
        <section className="rounded-[36px] border border-slate-200/70 bg-white/90 p-8 shadow-soft dark:border-slate-700/80 dark:bg-slate-900/85">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">Driving license</p>
            <h1 className="text-4xl font-semibold text-slate-950 dark:text-white">Road safety and test preparation.</h1>
            <p className="max-w-3xl text-slate-600 dark:text-slate-300">Explore road signs, terminology, and sample questions for the driving license journey.</p>
          </div>
        </section>

        <div className="grid gap-6 xl:grid-cols-2">
          {sections.map((section) => (
            <section key={section.title} className="rounded-[32px] border border-slate-200/70 bg-slate-50/90 p-8 shadow-soft dark:border-slate-700/80 dark:bg-slate-900/85">
              <h2 className="text-2xl font-semibold text-slate-950 dark:text-white">{section.title}</h2>
              <p className="mt-4 text-slate-600 dark:text-slate-300">{section.description}</p>
              <ul className="mt-6 space-y-4 text-slate-600 dark:text-slate-300">
                {section.items.map((item) => (
                  <li key={item.label} className="rounded-3xl border border-slate-200/70 bg-white/90 p-4 dark:border-slate-700/80 dark:bg-slate-950/85">
                    <p className="font-semibold text-slate-900 dark:text-white">{item.label}</p>
                    <p className="mt-2 text-sm">{item.detail}</p>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <section className="grid gap-4 lg:grid-cols-2">
          {drivingInfo.roadSigns.map((sign) => (
            <EmergencyCard key={sign.title} title={sign.title} value={sign.value} description={sign.description} />
          ))}
        </section>
      </div>
    </main>
  )
}
