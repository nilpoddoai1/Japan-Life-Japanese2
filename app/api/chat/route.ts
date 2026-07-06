import { NextResponse } from 'next/server'

function fallbackAssistantResponse(message: string) {
  const prompt = message.toLowerCase()

  if (prompt.includes('translate')) {
    return `✅ Short answer
Translate into polite Japanese using -masu/-desu endings.

📋 Steps:
1. Use polite verb endings (〜ます / 〜です).
2. Add "ください" for polite requests.
3. For very polite forms, add "〜ていただけますか".

💡 Tips:
- Keep sentences short.

🇯🇵 Useful Japanese phrases:
助けてください (Tasukete kudasai) — "Please help me"
お願いします (Onegaishimasu) — "Please (polite)"`
  }

  if (prompt.includes('garbage') || prompt.includes('trash') || prompt.includes('gomi')) {
    return `✅ Short answer
Most cities separate garbage into burnable, non-burnable, plastics, and recyclables.

📋 Steps:
1. Check your ward's official trash guide for category names and collection days.
2. Sort items into burnable, non-burnable, PET bottles, and recyclables.
3. Use the correct municipal bags and place them outside by 8:00 AM on collection day.

💡 Tips:
- Rinse containers and flatten cardboard.
- Bulky items often require a reservation or special sticker.

🇯🇵 Useful Japanese phrases:
ゴミの出し方はどうすればいいですか？ (Gomi no dashi-kata wa dō sureba ii desu ka?) — "How should I dispose of garbage?"`
  }

  if (prompt.includes('hospital') || prompt.includes('clinic') || prompt.includes('sick') || prompt.includes('ill') || prompt.includes('emergency')) {
    if (prompt.includes('nearest') || prompt.includes('address') || prompt.includes('location')) {
      return `✅ Short answer
I can't see your location, but you can find the nearest hospital using Google Maps or your ward's website.

📋 Steps:
1. Call 119 if it is life-threatening.
2. Search "hospital near me" or "clinic near me" on your phone.
3. Call the clinic to confirm hours and language support.

💡 Tips:
- Bring your 健康保険証 (health insurance card) and 在留カード (residence card).
- Say: "英語を話せますか？" if you need English support.

🇯🇵 Useful Japanese phrases:
救急車を呼んでください (Kyūkyūsha o yonde kudasai) — "Please call an ambulance."
病院に行きたいです (Byōin ni ikitai desu) — "I want to go to the hospital."`
    }

    return `✅ Short answer
Bring your health insurance card and residence card to the clinic or hospital.

📋 Steps:
1. Bring 健康保険証 and 在留カード.
2. At reception, say: 受付をお願いします (Uketsuke o onegaishimasu) — "I would like to check in."
3. Describe your symptoms simply and ask for help.

💡 Tips:
- If symptoms are severe, call 119.
- Ask for English help: "英語を話せますか？"

🇯🇵 Useful Japanese phrases:
受付をお願いします (Uketsuke o onegaishimasu) — "I would like to check in."
お腹が痛いです (Onaka ga itai desu) — "My stomach hurts."`
  }

  if (prompt.includes('visa') || prompt.includes('renew') || prompt.includes('status')) {
    return `✅ Short answer
Visa renewal requires visiting your regional immigration office with the required documents before your visa expires.

📋 Steps:
1. Check the Immigration Services Agency website for your visa type.
2. Make an appointment or visit the immigration office.
3. Bring your passport, 在留カード, and application documents.

💡 Tips:
- Start 1-2 months before your current visa expires.
- Ask your employer or city office if you need Japanese forms.

🇯🇵 Useful Japanese phrases:
在留資格の更新をしたいです (Zairyū shikaku no kōshin o shitai desu) — "I want to renew my residence status."`
  }

  if (prompt.includes('train') || prompt.includes('route') || prompt.includes('suica') || prompt.includes('pasmo') || prompt.includes('ticket')) {
    return `✅ Short answer
Travel by train using JR, private lines, and IC cards like Suica or Pasmo.

📋 Steps:
1. Buy or charge an IC card at a station or convenience store.
2. Use Google Maps to find the correct route and transfers.
3. Tap the card at the ticket gate when entering and leaving.

💡 Tips:
- Keep enough balance for transfers.
- For long trips, check reserved seat options.

🇯🇵 Useful Japanese phrases:
切符を一枚ください (Kippu o ichimai kudasai) — "One ticket, please."
改札口はどこですか？ (Kaisatsuguchi wa doko desu ka?) — "Where is the ticket gate?"`
  }

  return `✅ Short answer
I can help with living in Japan, including trash, trains, hospitals, documents, and daily life.

📋 Steps:
1. Ask one clear question about your task.
2. If you need translation, paste the sentence and ask for polite form.
3. If it is location-based, mention your city or ward.

💡 Tips:
- Keep questions short and practical.
- Use the chat to get direct steps for a task.

🇯🇵 Useful Japanese phrases:
どのように助けてほしいですか？ (Dono yō ni tasukete hoshii desu ka?) — "How would you like me to help?"`
}

export async function POST(req: Request) {
  try {
    const contentType = req.headers.get('content-type') || ''
    let message = ''

    if (contentType.includes('multipart/form-data')) {
      const formData = await req.formData()
      message = formData.get('message')?.toString() || ''
    } else {
      const body = await req.json().catch(() => null)
      message = typeof body?.message === 'string' ? body.message : ''
    }

    if (!message) {
      return NextResponse.json({ error: 'No message provided.' }, { status: 400 })
    }

    const reply = fallbackAssistantResponse(message)
    return NextResponse.json({ reply })
  } catch (error: any) {
    console.error('Server error:', error)
    return NextResponse.json(
      { error: 'Server error: ' + (error?.message || 'Unknown error') },
      { status: 500 }
    )
  }
}
