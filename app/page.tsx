"use client"

import { useState } from 'react'
import Link from 'next/link'
import HeroBanner from '@/components/HeroBanner'
import SearchBar from '@/components/SearchBar'
import ChatAssistant from '@/components/ChatAssistant'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import { Trash2, Hospital, TrainFront, FileText, MessageSquare, AlertTriangle } from 'lucide-react'

const quickActions = [
  {
    title: 'Trash Guide',
    desc: 'Local disposal rules',
    href: '/garbage-guide',
    icon: <Trash2 size={18} />,
    cardBg: 'bg-green-50',
    colorBg: 'bg-emerald-100',
    colorText: 'text-emerald-600'
  },
  {
    title: 'Hospital Help',
    desc: 'Prepare for visits',
    href: '/hospital-help',
    icon: <Hospital size={18} />,
    cardBg: 'bg-rose-50',
    colorBg: 'bg-red-100',
    colorText: 'text-red-600'
  },
  {
    title: 'Train Helper',
    desc: 'Route & IC cards',
    href: '/train-helper',
    icon: <TrainFront size={18} />,
    cardBg: 'bg-blue-50',
    colorBg: 'bg-blue-100',
    colorText: 'text-blue-600'
  },
  {
    title: 'Document Support',
    desc: 'Forms & guidance',
    href: '/living-setup',
    icon: <FileText size={18} />,
    cardBg: 'bg-amber-50',
    colorBg: 'bg-amber-100',
    colorText: 'text-amber-600'
  },
  {
    title: 'Open Assistant',
    desc: 'Get step-by-step help',
    action: true,
    icon: <MessageSquare size={18} />,
    cardBg: 'bg-violet-50',
    colorBg: 'bg-violet-100',
    colorText: 'text-violet-600'
  },
  {
    title: 'Emergency Help',
    desc: 'Quick contacts',
    href: '/emergency',
    icon: <AlertTriangle size={18} />,
    cardBg: 'bg-orange-50',
    colorBg: 'bg-orange-100',
    colorText: 'text-orange-600'
  }
]

const popularTopics = [
  {
    title: 'Garbage Disposal',
    description: 'Understand local recycling and trash collection rules.',
    href: '/garbage-guide'
  },
  {
    title: 'Hospital Visit',
    description: 'Prepare for appointments and medical interactions.',
    href: '/hospital-help'
  },
  {
    title: 'Train Guide',
    description: 'Navigate stations, passes, and train etiquette.',
    href: '/train-helper'
  },
  {
    title: 'Visa Information',
    description: 'Find practical guidance for residence and visa steps.',
    href: '/living-setup'
  }
]

const usefulResources = [
  {
    title: 'Emergency Contacts',
    description: 'Phone numbers and procedures for urgent situations.',
    href: '/emergency'
  },
  {
    title: 'City Services',
    description: 'Find the right office for registration and support.',
    href: '/useful-links'
  },
  {
    title: 'Language Help',
    description: 'Quick phrases and translations for everyday tasks.',
    href: '/japanese-learning'
  }
]

const suggestedQuestions = [
  'How do I separate garbage in Tokyo?',
  'What should I bring to a hospital visit?',
  'How do I ride the train in Japan?',
  'What documents are needed for visa renewal?'
]

export default function HomePage() {
  const [chatOpen, setChatOpen] = useState(false)

  return (
    <main className="min-h-screen bg-transparent py-6 text-slate-900 transition-colors duration-300 sm:py-8 dark:text-slate-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <HeroBanner onOpenChat={() => setChatOpen(true)} />

        <div className="mt-10 space-y-8">
          <section>
            <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Dashboard</p>
                <h2 className="mt-2 text-xl font-semibold text-slate-900">Quick actions</h2>
              </div>
              <p className="text-sm leading-6 text-slate-600">Access your most important tools instantly.</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
              {quickActions.map((item) => {
                const card = (
                  <div className="flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
                    <div className={`w-12 h-12 rounded-xl inline-flex items-center justify-center ${item.colorBg} ${item.colorText}`}>
                      {item.icon}
                    </div>
                    <div className="mt-3 flex-1">
                      <p className="text-base font-semibold text-slate-900 line-clamp-2 break-words">{item.title}</p>
                      <p className="mt-2 text-sm leading-6 text-slate-600 line-clamp-2">{item.desc}</p>
                    </div>
                  </div>
                )

                if (item.action) {
                  return (
                    <button key={item.title} type="button" onClick={() => setChatOpen(true)} className={`h-[140px] ${item.cardBg}`}> 
                      {card}
                    </button>
                  )
                }

                return (
                  <Link key={item.title} href={item.href!} className={`h-[140px] ${item.cardBg}`}>
                    {card}
                  </Link>
                )
              })}
            </div>
          </section>

          <section className="grid gap-5 lg:grid-cols-[1.4fr_0.6fr]">
            <div className="space-y-5">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Popular topics</p>
                  <h2 className="mt-2 text-xl font-semibold text-slate-900">Topics people use most</h2>
                </div>
                <p className="text-sm leading-6 text-slate-600">Fast access to frequently referenced information.</p>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                {popularTopics.map((topic) => (
                  <Link
                    key={topic.title}
                    href={topic.href}
                    className="overflow-hidden h-[160px] rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
                  >
                    <p className="text-base font-semibold text-slate-900 line-clamp-2 break-words">{topic.title}</p>
                    <p className="mt-3 text-sm leading-6 text-slate-600 line-clamp-2">{topic.description}</p>
                  </Link>
                ))}
              </div>
            </div>

            <div className="space-y-5">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Useful resources</p>
                <h2 className="mt-2 text-xl font-semibold text-slate-900">Curated guidance</h2>
              </div>
              <div className="grid gap-5">
                {usefulResources.map((resource) => (
                  <Link
                    key={resource.title}
                    href={resource.href}
                    className="overflow-hidden h-[120px] rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
                  >
                    <p className="text-base font-semibold text-slate-900 line-clamp-2 break-words">{resource.title}</p>
                    <p className="mt-2 text-sm leading-6 text-slate-600 line-clamp-2">{resource.description}</p>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          <section>
            <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">AI assistant</p>
                <h2 className="mt-2 text-xl font-semibold text-slate-900">Ask the assistant</h2>
              </div>
              <p className="text-sm leading-6 text-slate-600">Get fast, practical answers for daily tasks.</p>
            </div>

            <Card className="border-slate-200 bg-white p-6 shadow-sm">
              <div className="space-y-5">
                <div className="space-y-3">
                  <p className="text-sm text-slate-600">Ask a question or type a task for the assistant.</p>
                  <SearchBar placeholder="Search topics, tasks, or questions..." />
                </div>

                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                  {suggestedQuestions.map((question) => (
                    <button
                      key={question}
                      type="button"
                      onClick={() => setChatOpen(true)}
                      className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-left text-sm text-slate-700 transition hover:border-blue-300 hover:bg-white"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>
            </Card>
          </section>
        </div>
      </div>

      <Button variant="primary" className="fixed bottom-4 right-4 z-40 shadow-lg" onClick={() => setChatOpen(true)}>
        Open assistant
      </Button>

      {chatOpen ? (
        <ChatAssistant open={chatOpen} onOpenChange={setChatOpen} hideToggle />
      ) : null}
    </main>
  )
}
