"use client"

import { useEffect, useMemo, useRef, useState } from 'react'
import { Bot, ImagePlus, SendHorizonal, X } from 'lucide-react'
import ChatBubble from '@/components/ui/ChatBubble'
import Input from '@/components/ui/Input'

type ChatMessage = {
  role: 'user' | 'assistant'
  content: string
  type?: 'text' | 'image'
  imageUrl?: string
  fileName?: string
}

type ChatAssistantProps = {
  open?: boolean
  onOpenChange?: (open: boolean) => void
  hideToggle?: boolean
  wrapperClassName?: string
}

const quickSuggestions = [
  'How do I separate garbage in Tokyo?',
  'What do I say at a hospital?',
  'Translate this into polite Japanese',
  'How do I renew my visa?'
]

const DEFAULT_IMAGE_PROMPT =
  'You are a smart Japan Life Assistant. The user uploaded an image. Analyze it carefully and answer with this structure:\n1. ✅ What is this image?\n2. 📝 What does the text say?\n3. 📋 Explanation\n4. ⚠️ What should the user do?\n5. 💡 Tips\nKeep the answer simple, practical, beginner-friendly, and focused on life in Japan. Always analyze the image first, do not give generic replies, and if the image is unclear say what you can see and ask for clarification.'

export default function ChatAssistant({
  open: openProp,
  onOpenChange,
  hideToggle,
  wrapperClassName
}: ChatAssistantProps = {}) {
  const [internalOpen, setInternalOpen] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [imageName, setImageName] = useState<string | null>(null)
  const [selectedImageFile, setSelectedImageFile] = useState<File | null>(null)
  const [imagePreviewUrl, setImagePreviewUrl] = useState<string | null>(null)

  const inputRef = useRef<HTMLInputElement | null>(null)
  const messagesEndRef = useRef<HTMLDivElement | null>(null)

  const isControlled = openProp !== undefined
  const activeOpen = isControlled ? openProp : internalOpen
  const setOpenState = (value: boolean) => {
    if (!isControlled) setInternalOpen(value)
    onOpenChange?.(value)
  }

  useEffect(() => {
    if (activeOpen) inputRef.current?.focus()
  }, [activeOpen])

  useEffect(() => {
    if (!activeOpen) return
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, activeOpen, loading])

  const wrapperClasses = useMemo(
    () =>
      wrapperClassName ??
      'fixed bottom-24 right-6 z-[9999] flex w-[95vw] max-w-[440px] h-[min(700px,calc(100vh-7rem))] md:w-[380px] lg:w-[440px] overflow-visible',
    [wrapperClassName]
  )

  const panelClasses = useMemo(
    () =>
      wrapperClassName
        ? 'relative flex min-h-0 h-full w-full flex-col bg-white'
        : 'relative flex min-h-0 h-full w-full flex-col rounded-2xl border border-slate-200 bg-white shadow-2xl transition-all duration-200',
    [wrapperClassName]
  )

  const handleSend = async (overrideText?: string) => {
    const textPrompt = overrideText ?? inputValue.trim()
    if (!textPrompt && !selectedImageFile) return

    setError(null)
    setLoading(true)
    setInputValue('')

    if (selectedImageFile) {
      const imageToSend = selectedImageFile
      const imageUrl = URL.createObjectURL(imageToSend)
      const userMessage: ChatMessage = {
        role: 'user',
        content: textPrompt || imageToSend.name,
        type: 'image',
        imageUrl,
        fileName: imageToSend.name
      }
      setMessages((prev) => [...prev, userMessage])

      try {
        const prompt = textPrompt || DEFAULT_IMAGE_PROMPT
        const formData = new FormData()
        formData.append('message', prompt)
        formData.append('image', imageToSend)
        formData.append('imageName', imageToSend.name)
        formData.append('imageType', imageToSend.type || 'image/jpeg')

        const res = await fetch('/api/chat', {
          method: 'POST',
          body: formData
        })

        if (!res.ok) {
          const result = await res.json().catch(() => null)
          throw new Error(result?.error || 'Unable to get assistant response.')
        }

        const data = await res.json()
        const assistantText = data?.reply ?? data?.content ?? 'Sorry, something went wrong. Please try again.'

        const assistantMessage: ChatMessage = { role: 'assistant', content: assistantText }
        setMessages((prev) => [...prev, assistantMessage])

        setSelectedImageFile(null)
        setImagePreviewUrl(null)
        setImageName(null)
      } catch (err) {
        const errorText = err instanceof Error ? err.message : String(err)
        setError(errorText)
        setMessages((prev) => [...prev, { role: 'assistant', content: errorText }])
      } finally {
        setLoading(false)
      }

      return
    }

    const userMessage: ChatMessage = { role: 'user', content: textPrompt }
    setMessages((prev) => [...prev, userMessage])

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: textPrompt })
      })

      if (!res.ok) {
        const result = await res.json().catch(() => null)
        throw new Error(result?.error || 'Unable to get assistant response.')
      }

      const data = await res.json()
      const assistantText = data?.reply ?? data?.content ?? 'Sorry, something went wrong. Please try again.'
      const assistantMessage: ChatMessage = { role: 'assistant', content: assistantText }
      setMessages((prev) => [...prev, assistantMessage])
    } catch (err) {
      setMessages((prev) => [...prev, { role: 'assistant', content: 'Error getting response.' }])
    } finally {
      setLoading(false)
    }
  }

  const handleQuickSuggestion = (suggestion: string) => {
    // do not duplicate logic; reuse handleSend
    handleSend(suggestion)
  }

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    setImageName(file.name)
    setSelectedImageFile(file)
    setError(null)

    if (imagePreviewUrl) {
      URL.revokeObjectURL(imagePreviewUrl)
    }

    const url = URL.createObjectURL(file)
    setImagePreviewUrl(url)
  }

  const renderMessageContent = (message: ChatMessage) => {
    if (message.type === 'image' && message.imageUrl) {
      return (
        <div className="space-y-2">
          <img src={message.imageUrl} alt={message.fileName ?? 'Uploaded image'} className="max-h-72 w-full rounded-2xl object-contain" />
          <p className="text-sm text-slate-700 dark:text-slate-200">{message.fileName}</p>
        </div>
      )
    }

    return <p>{message.content}</p>
  }

  return (
    <>
      {!activeOpen && !hideToggle ? (
        <button
          type="button"
          onClick={() => setOpenState(true)}
          className="fixed bottom-20 right-4 z-50 flex min-w-[220px] items-center justify-center gap-3 rounded-full bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-lg transition duration-200 hover:scale-[1.02] hover:bg-blue-700 sm:right-6 sm:bottom-6"
        >
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-blue-600 shadow-sm">
            <Bot size={18} />
          </span>
          Chat with assistant
        </button>
      ) : null}

      {activeOpen ? (
        <div className={wrapperClasses}>
          <div className={panelClasses}>
            <div className="h-18 h-[72px] shrink-0 border-b bg-white px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-3 min-w-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-sm ring-1 ring-slate-100">
                  <Bot size={20} />
                </div>
                <div className="min-w-0">
                  <p className="text-base font-semibold text-slate-900 leading-5">Japan Life Assistant</p>
                  <p className="mt-1 text-xs text-green-600 leading-5">Assistant ready</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setOpenState(false)}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 inline-flex items-center justify-center"
                aria-label="Close chat"
              >
                <X size={16} />
              </button>
            </div>

            <div className="border-b bg-slate-50 px-5 py-4 overflow-hidden max-h-32">
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 shadow-sm overflow-y-auto max-h-28">
                <p className="text-sm font-semibold text-slate-900">Assistant introduction</p>
                <div className="mt-3 space-y-2 text-sm text-slate-600">
                  <p>Hello 👋</p>
                  <p>I can help with:</p>
                  <ul className="list-inside list-disc space-y-1 pl-4">
                    <li>Daily life in Japan</li>
                    <li>Healthcare & hospitals</li>
                    <li>Transportation</li>
                    <li>Government procedures</li>
                    <li>Japanese language support</li>
                  </ul>
                  <p className="mt-2">Ask me anything.</p>
                </div>
              </div>
            </div>

            <div className="border-b bg-slate-50 px-5 py-3 overflow-hidden max-h-20">
              <div className="flex flex-wrap gap-2 overflow-x-auto">
                {quickSuggestions.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => handleQuickSuggestion(item)}
                    disabled={loading}
                    className="shrink-0 rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700 transition duration-200 hover:bg-blue-50 hover:text-blue-600 disabled:opacity-60"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            <div id="chat-messages" className="flex-1 min-h-0 overflow-y-auto px-5 py-4 space-y-4 bg-white">
              {messages.length === 0 ? (
                <div className="rounded-2xl border border-dashed border-slate-200 bg-white p-4 text-sm text-slate-500">
                  Start by asking a question or selecting a suggestion above.
                </div>
              ) : null}

              {messages.map((message, index) => (
                <ChatBubble key={`${message.role}-${index}`} role={message.role} content={message.content} />
              ))}

              {loading ? (
                <div className="flex justify-start">
                  <div className="rounded-2xl bg-slate-100 px-4 py-3 text-sm text-slate-700">
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 animate-pulse rounded-full bg-slate-400" />
                      <span className="h-2 w-2 animate-pulse rounded-full bg-slate-400" />
                      <span className="h-2 w-2 animate-pulse rounded-full bg-slate-400" />
                    </div>
                  </div>
                </div>
              ) : null}

              {error ? <div className="rounded-2xl bg-red-50 p-3 text-sm text-red-600">{error}</div> : null}
              <div ref={messagesEndRef} />
            </div>

            <div className="shrink-0 border-t border-slate-200 bg-white px-5 py-4">
              {selectedImageFile ? (
                <div className="mb-3 flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 p-2">
                  <img src={imagePreviewUrl ?? undefined} alt={imageName ?? 'Selected image'} className="h-12 w-12 rounded-xl object-cover" />
                  <div className="min-w-0 overflow-hidden">
                    <p className="truncate text-sm font-medium text-slate-900">{imageName}</p>
                    <p className="text-xs text-slate-500">Selected image</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedImageFile(null)
                      setImagePreviewUrl(null)
                      setImageName(null)
                    }}
                    className="ml-auto rounded-full bg-slate-100 px-2 py-2 text-sm text-slate-600 hover:bg-slate-200"
                    aria-label="Remove selected image"
                  >
                    ✕
                  </button>
                </div>
              ) : null}

              <div className="border-t pt-4">
                <div className="flex items-center gap-2">
                  <label className="inline-flex h-10 cursor-pointer items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition duration-200 hover:bg-slate-50">
                    <input type="file" accept=".jpg,.jpeg,.png,.webp" onChange={handleFileChange} className="hidden" />
                    <ImagePlus size={16} />
                    Add Image
                  </label>
                  <div className="flex-1">
                    <Input
                      ref={inputRef}
                      value={inputValue}
                      onChange={(event) => setInputValue(event.target.value)}
                      onKeyDown={(event) => {
                        if (event.key === 'Enter' && !event.shiftKey) {
                          event.preventDefault()
                          handleSend()
                        }
                      }}
                      placeholder={selectedImageFile ? 'Describe the image or press Send to explain...' : 'Ask a practical question...'}
                      className="w-full rounded-full border-slate-200 bg-slate-50 px-4 py-3 text-sm"
                    />
                  </div>
                  <button
                    type="button"
                    onClick={() => handleSend()}
                    disabled={loading || (!inputValue.trim() && !selectedImageFile)}
                    className="inline-flex h-11 items-center justify-center rounded-full bg-blue-600 px-5 text-sm font-semibold text-white transition duration-200 hover:bg-blue-700 disabled:opacity-60 disabled:pointer-events-none"
                  >
                    <SendHorizonal size={16} className="mr-2" />
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}
