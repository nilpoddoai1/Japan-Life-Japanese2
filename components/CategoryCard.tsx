import Link from 'next/link'

interface CategoryCardProps {
  title: string
  description: string
  href: string
}

export default function CategoryCard({ title, description, href }: CategoryCardProps) {
  return (
    <Link href={href} className="group rounded-[28px] border border-slate-200/70 bg-white/90 p-6 text-left shadow-soft transition hover:-translate-y-1 hover:border-blue-300 hover:bg-blue-50/80 dark:border-slate-700/80 dark:bg-slate-900/85 dark:hover:border-blue-500 dark:hover:bg-slate-800">
      <h3 className="text-xl font-semibold text-slate-950 transition group-hover:text-blue-700 dark:text-white dark:group-hover:text-blue-300">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{description}</p>
    </Link>
  )
}
