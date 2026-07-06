import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="min-h-screen py-20">
      <div className="container mx-auto rounded-[36px] border border-slate-200/70 bg-white/90 p-12 text-center shadow-soft dark:border-slate-700/80 dark:bg-slate-900/85">
        <p className="text-sm uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">404</p>
        <h1 className="mt-6 text-5xl font-semibold text-slate-950 dark:text-white">Page not found</h1>
        <p className="mt-4 text-slate-600 dark:text-slate-300">Sorry, the page you are looking for does not exist.</p>
        <Link href="/" className="mt-8 inline-flex rounded-3xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700">
          Back to home
        </Link>
      </div>
    </main>
  )
}
