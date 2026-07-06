export type VocabularyItem = {
  id: string
  category: string
  kanji: string
  hiragana: string
  romaji: string
  meaning: string
  example: string
}

export type DailyTopic = {
  title: string
  description: string
  documents: string[]
  words: string[]
  tips: string[]
}

export type DrivingSection = {
  title: string
  description: string
  items: { label: string; detail: string }[]
}

export type EmergencyInfo = {
  title: string
  value: string
  description: string
}

export type UsefulLink = {
  category: string
  title: string
  description: string
  href: string
}
