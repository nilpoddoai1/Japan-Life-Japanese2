import { forwardRef } from 'react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  hint?: string
  error?: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(function Input({ label, hint, error, className = '', ...props }, ref) {
  return (
    <label className="block w-full">
      {label ? <span className="mb-2 block text-sm font-medium text-slate-700">{label}</span> : null}
      <input
        ref={ref}
        className={`w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100 ${error ? 'border-red-300 focus:border-red-500 focus:ring-red-100' : ''} ${className}`.trim()}
        {...props}
      />
      {hint ? <p className="mt-2 text-sm text-slate-500">{hint}</p> : null}
      {error ? <p className="mt-2 text-sm text-red-600">{error}</p> : null}
    </label>
  )
})

export default Input
