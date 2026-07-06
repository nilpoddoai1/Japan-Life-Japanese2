export const dashboardModules = [
  {
    icon: '🗑',
    title: 'Garbage Guide',
    description: 'Sort trash correctly and keep your neighborhood clean.',
    href: '/garbage-guide'
  },
  {
    icon: '🏥',
    title: 'Hospital Help',
    description: 'Essential medical phrases and what to bring for care.',
    href: '/hospital-help'
  },
  {
    icon: '🚗',
    title: 'Driving License',
    description: 'Practice road signs and test tips for safe driving.',
    href: '/driving-license'
  },
  {
    icon: '🏠',
    title: 'Living Setup',
    description: 'Step-by-step support for housing, utilities, and banking.',
    href: '/living-setup'
  }
]

export const newcomerChecklist = [
  {
    id: 'register-address',
    title: 'Register your address',
    description: 'Visit the city office within 14 days and submit a moving-in notice.'
  },
  {
    id: 'open-bank-account',
    title: 'Open a bank account',
    description: 'Bring your residence card, passport, and proof of address.'
  },
  {
    id: 'set-up-utilities',
    title: 'Set up utilities',
    description: 'Arrange electricity, water, and internet for your new apartment.'
  },
  {
    id: 'learn-trash-rules',
    title: 'Learn trash rules',
    description: 'Confirm your local collection days and separation categories.'
  },
  {
    id: 'prepare-hospital-visit',
    title: 'Prepare for hospital visits',
    description: 'Keep your insurance card and residence card ready for appointments.'
  }
]

export const dailyInfoCards = [
  {
    title: 'Next trash collection',
    value: 'Wed • Burnable + Plastic',
    note: 'Check your ward rules for bulky item pickup.'
  },
  {
    title: 'Current city task',
    value: 'Register address',
    note: 'Bring residence card and completed forms to the ward office.'
  },
  {
    title: 'Health care tip',
    value: 'Keep your 保険証 handy',
    note: 'Show your health insurance card at every clinic visit.'
  },
  {
    title: 'Document help',
    value: 'Useful phrases ready',
    note: 'Translate forms and ask for support with polite wording.'
  }
]

export const garbageGuide = {
  title: 'Garbage Guide',
  description: 'Follow Japan’s local waste rules with clear steps and common phrases.',
  categories: [
    {
      name: 'Burnable garbage',
      items: ['Food waste', 'Paper napkins', 'Small kitchen waste']
    },
    {
      name: 'Non-burnable garbage',
      items: ['Metal items', 'Ceramics', 'Broken glass']
    },
    {
      name: 'Recyclable bottles',
      items: ['PET bottles', 'Empty cans', 'Glass bottles']
    },
    {
      name: 'Oversized items',
      items: ['Furniture', 'Large appliances', 'Bicycles']
    }
  ],
  steps: [
    'Check your ward’s official garbage guide for collection days and bag colors.',
    'Clean and sort recyclables before placing them in the correct bin.',
    'Use designated municipal bags when required by your city.',
    'Place trash outside by 8:00 AM on collection day, not earlier than the night before.'
  ],
  phrases: [
    { phrase: 'ゴミはどこに出しますか？', translation: 'Where should I put the trash?' },
    { phrase: '燃えるゴミと燃えないゴミはどちらですか？', translation: 'Which is burnable garbage and which is non-burnable?' },
    { phrase: 'リサイクルの回収日はいつですか？', translation: 'When is recycling collection day?' }
  ]
}

export const hospitalHelp = {
  title: 'Hospital Help',
  description: 'Use practical phrases and a checklist for medical visits in Japan.',
  steps: [
    'Bring your health insurance card and residence card to every visit.',
    'Arrive 10–15 minutes before the clinic opens and take a reception ticket if needed.',
    'Tell reception your symptom in simple words and ask if English support is available.',
    'Keep receipts and medicine instructions for insurance or follow-up.'
  ],
  phrases: [
    { phrase: '受付をお願いします。', translation: 'I would like to register.' },
    { phrase: '日本語があまり話せません。', translation: 'I do not speak much Japanese.' },
    { phrase: '保険証を使いたいです。', translation: 'I would like to use my insurance card.' },
    { phrase: '痛みがあります。', translation: 'I have pain.' }
  ],
  checklist: ['Insurance card', 'Residence card', 'Prescription notebook', 'Any recent test results']
}

export const livingSetupGuide = {
  title: 'Living Setup',
  description: 'Step-by-step support for housing, utilities, banking, and communication.',
  items: [
    {
      label: 'Housing registration',
      detail: 'Submit your move-in notice and keep a copy of your residence certificate.'
    },
    {
      label: 'Open a bank account',
      detail: 'Use your residence card, passport, proof of address, and personal seal if available.'
    },
    {
      label: 'Set up utilities',
      detail: 'Contact electricity, gas, and water providers after signing your lease.'
    },
    {
      label: 'Choose a mobile plan',
      detail: 'Compare SIM or contract plans and bring your residence card for registration.'
    }
  ],
  phrases: [
    { phrase: '住所を登録したいです。', translation: 'I want to register my address.' },
    { phrase: '口座を開きたいです。', translation: 'I want to open an account.' },
    { phrase: 'インターネットを申込みたいです。', translation: 'I want to apply for internet service.' }
  ]
}

export const trainHelper = {
  title: 'Train Helper',
  description: 'Navigate stations, tickets, and helpful transit phrases with confidence.',
  steps: [
    'Buy or charge a Suica or Pasmo card at the station concierge or convenience store.',
    'Check train routes in Google Maps and confirm transfer stations before you travel.',
    'Tap your IC card at the gate when entering and leaving the station.',
    'Ask station staff for help if you are unsure about the platform or ticket type.'
  ],
  phrases: [
    { phrase: '改札口はどこですか？', translation: 'Where is the ticket gate?' },
    { phrase: 'この電車は○○に行きますか？', translation: 'Does this train go to ○○?' },
    { phrase: '切符を一枚ください。', translation: 'One ticket, please.' },
    { phrase: '乗り換えはどこですか？', translation: 'Where is the transfer point?' }
  ]
}
