import { BookOpen, BriefcaseBusiness, CircleHelp, Sparkles, type LucideIcon } from 'lucide-react'

interface InfoCardProps {
  item: {
    title: string
    description: string
  }
}

const iconMap: Record<string, LucideIcon> = {
  'how to register your address in japan': BookOpen,
  'using public transport': BriefcaseBusiness,
  'buy a sim card': CircleHelp,
  default: Sparkles
}

export default function InfoCard({ item }: InfoCardProps) {
  const normalizedTitle = item.title.toLowerCase()
  const Icon = iconMap[normalizedTitle] ?? iconMap.default

  return (
    <article className="rounded-[24px] border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
      <div className="flex items-start gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
          <Icon size={18} />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-slate-950">{item.title}</h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
        </div>
      </div>
    </article>
  )
}
