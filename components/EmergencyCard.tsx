interface EmergencyCardProps {
  title: string
  value: string
  description: string
}

export default function EmergencyCard({ title, value, description }: EmergencyCardProps) {
  return (
    <div className="rounded-[28px] border border-slate-200/70 bg-white/90 p-6 shadow-soft dark:border-slate-700/80 dark:bg-slate-900/85">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-indigo-500 dark:text-indigo-200">{title}</p>
      <p className="mt-4 text-3xl font-semibold text-slate-950 dark:text-white">{value}</p>
      <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{description}</p>
    </div>
  )
}
