export default function AboutPage() {
  return (
    <main className="min-h-screen py-10">
      <div className="container mx-auto space-y-8">
        <section className="rounded-[36px] border border-slate-200/70 bg-white/90 p-8 shadow-soft dark:border-slate-700/80 dark:bg-slate-900/85">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">About</p>
            <h1 className="text-4xl font-semibold text-slate-950 dark:text-white">Japan Life Assistant</h1>
            <p className="max-w-3xl text-slate-600 dark:text-slate-300">A beginner-friendly guide for foreigners navigating life in Japan, from vocabulary to emergency information.</p>
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-2">
          <div className="rounded-[32px] border border-slate-200/70 bg-slate-50/90 p-8 shadow-soft dark:border-slate-700/80 dark:bg-slate-900/85">
            <h2 className="text-2xl font-semibold text-slate-950 dark:text-white">Mission</h2>
            <p className="mt-4 text-slate-600 dark:text-slate-300">Help newcomers feel confident by offering clear Japanese vocabulary, essential guides, and practical support information.</p>
          </div>
          <div className="rounded-[32px] border border-slate-200/70 bg-slate-50/90 p-8 shadow-soft dark:border-slate-700/80 dark:bg-slate-900/85">
            <h2 className="text-2xl font-semibold text-slate-950 dark:text-white">Version</h2>
            <p className="mt-4 text-slate-600 dark:text-slate-300">v0.1.0</p>
            <h3 className="mt-6 text-lg font-semibold text-slate-950 dark:text-white">Developer</h3>
            <p className="mt-2 text-slate-600 dark:text-slate-300">Placeholder Developer</p>
          </div>
        </section>

        <section className="rounded-[32px] border border-slate-200/70 bg-white/90 p-8 shadow-soft dark:border-slate-700/80 dark:bg-slate-900/85">
          <h2 className="text-2xl font-semibold text-slate-950 dark:text-white">Social links</h2>
          <ul className="mt-4 space-y-3 text-slate-600 dark:text-slate-300">
            <li>Website: placeholder.example.com</li>
            <li>Twitter: @placeholder</li>
            <li>GitHub: github.com/placeholder</li>
          </ul>
        </section>
      </div>
    </main>
  )
}
