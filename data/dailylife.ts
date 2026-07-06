import type { DailyTopic } from '@/types'

export const dailyLifeTopics: DailyTopic[] = [
  {
    title: 'Housing',
    description: 'Find housing options, rental guidance, and basic apartment vocabulary for life in Japan.',
    documents: ['Residence card', 'Passport', 'Proof of income', 'Guarantor documents'],
    words: ['アパート (apartment)', '賃貸 (rent)', '礼金 (key money)', '敷金 (security deposit)'],
    tips: ['Inspect the apartment before signing.', 'Ask if utilities are included.', 'Learn how to read a lease agreement.']
  },
  {
    title: 'City Office',
    description: 'Learn city office services for residency registration, moving notices, and document filing.',
    documents: ['Residence card', 'Passport', 'Seal (inkan)', 'Completed forms'],
    words: ['市役所 (city office)', '転入届 (moving-in notice)', '住民票 (residence certificate)', '印鑑登録 (seal registration)'],
    tips: ['Register your address within 14 days.', 'Bring your residence card and passport.', 'Ask staff for English support if needed.']
  },
  {
    title: 'Health Insurance',
    description: 'Understand Japan’s health insurance system and the documents needed for treatment.',
    documents: ['Health insurance card', 'Residence card', 'Passport', 'Medical receipts'],
    words: ['健康保険 (health insurance)', '保険証 (insurance card)', '自己負担 (out-of-pocket payment)', '診察券 (clinic card)'],
    tips: ['Always carry your insurance card to hospitals.', 'Notify the city office when your status changes.', 'Keep medical receipts for reimbursement.']
  },
  {
    title: 'National Pension',
    description: 'Explore pension enrollment, contributions, and eligibility for residents in Japan.',
    documents: ['Residence card', 'Passport', 'Pension handbook', 'Income details'],
    words: ['年金 (pension)', '厚生年金 (employee pension)', '国民年金 (national pension)', '加入 (enrollment)'],
    tips: ['Register for the pension plan as soon as possible.', 'Ask your employer about pension contributions.', 'Keep your pension handbook safe.']
  },
  {
    title: 'Bank Account',
    description: 'Open a bank account, understand required documents, and learn banking vocabulary.',
    documents: ['Residence card', 'Passport', 'My Number card', 'Proof of address'],
    words: ['銀行口座 (bank account)', '通帳 (bankbook)', 'キャッシュカード (cash card)', '本人確認 (identity verification)'],
    tips: ['Choose a bank with English support if needed.', 'Bring your My Number card if available.', 'Compare fees for international transfers.']
  },
  {
    title: 'Garbage Separation',
    description: 'Learn how to sort waste properly and follow local trash collection rules.',
    documents: ['Local garbage guide', 'Label instructions', 'Reusable bags', 'Collection schedule'],
    words: ['燃えるごみ (burnable waste)', '燃えないごみ (non-burnable waste)', '資源ごみ (recyclables)', '可燃ごみ (combustible trash)'],
    tips: ['Use the correct colored bags for each type of waste.', 'Check your city’s collection days carefully.', 'Rinse recyclables before disposal.']
  },
  {
    title: 'Internet',
    description: 'Set up home internet with common terms and essential service steps.',
    documents: ['Residence card', 'Passport', 'Proof of address', 'Contract documents'],
    words: ['回線 (internet line)', '光ファイバー (fiber optic)', 'プロバイダー (provider)', '契約 (contract)'],
    tips: ['Compare providers for speed and price.', 'Ask about installation fees.', 'Keep your contract information in a safe place.']
  },
  {
    title: 'Mobile SIM',
    description: 'Choose a mobile SIM option, understand contract details, and learn key terms.',
    documents: ['Passport', 'Residence card', 'My Number card', 'Email address'],
    words: ['SIMカード (SIM card)', 'プリペイド (prepaid)', 'データ通信 (data plan)', '音声通話 (voice call)'],
    tips: ['Select prepaid for short stays or contract for long-term stays.', 'Check network coverage in your area.', 'Keep your phone unlocked for easy switching.']
  }
]
