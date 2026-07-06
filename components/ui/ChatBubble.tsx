interface ChatBubbleProps {
  role: 'user' | 'assistant'
  content: string
}

export default function ChatBubble({ role, content }: ChatBubbleProps) {
  const isUser = role === 'user'

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`max-w-[95%] w-fit rounded-2xl p-4 text-sm leading-6 ${isUser ? 'ml-auto bg-blue-600 text-white' : 'bg-slate-100 text-slate-700'}`.trim()}
      >
        <div className="whitespace-pre-wrap break-words">{content}</div>
      </div>
    </div>
  )
}
