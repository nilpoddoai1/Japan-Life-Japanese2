interface CardProps {
  children: React.ReactNode
  className?: string
  padding?: 'sm' | 'md' | 'lg'
}

const paddingClasses = {
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8'
} as const

export default function Card({ children, className = '', padding = 'md' }: CardProps) {
  return <div className={`rounded-2xl border border-slate-200/80 bg-white shadow-sm transition-all duration-200 ${paddingClasses[padding]} ${className}`.trim()}>{children}</div>
}
