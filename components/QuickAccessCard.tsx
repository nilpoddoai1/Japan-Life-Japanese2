import Link from 'next/link'
import { Car, FileText, Home, Hospital, Sparkles, Trash2, TrainFront, type LucideIcon } from 'lucide-react'

interface QuickAccessCardProps {
  item: {
    icon?: string
    title: string
    description: string
    href: string
  }
}

const iconMap: Record<string, LucideIcon> = {
  'garbage guide': Trash2,
  'hospital help': Hospital,
  'driving license': Car,
  'living setup': Home,
  'trash guide': Trash2,
  'train helper': TrainFront,
  'document help': FileText,
  'housing support': Home,
  'emergency help': Hospital,
  default: Sparkles
}

export default function QuickAccessCard({ item }: QuickAccessCardProps) {
  const normalizedTitle = item.title.toLowerCase()
  const Icon = iconMap[normalizedTitle] ?? iconMap.default

  return (
    <Link
      href={item.href}
      className="group rounded-2xl border border-slate-200/80 bg-white p-4 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-blue-300 hover:shadow-md flex h-full"
    >
      <div className="flex items-start gap-4">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-slate-50 text-slate-700 shadow-sm transition group-hover:bg-blue-50 group-hover:text-blue-700">
          <Icon size={18} />
        </span>
        <div className="flex-1">
          <h3 className="text-base font-semibold text-slate-900">{item.title}</h3>
          <p className="mt-1 text-sm text-slate-600">{item.description}</p>
        </div>
      </div>
    </Link>
  )
}
