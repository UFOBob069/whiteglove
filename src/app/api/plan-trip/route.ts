import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const body = await req.json();
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: 'OpenAI API key not set.' }, { status: 500 });
  }

  // Format the prompt from the form data
  const prompt = `You are a luxury golf travel concierge. Create a tailored golf trip plan based on the following details:

Contact Email: ${body.email}
Phone: ${body.phone}
Destination: ${body.destinationType === 'flexible' ? 'Flexible' : body.destination}
Travel Dates: ${body.travelDatesType === 'exact' ? 'Exact' : 'Flexible'} - ${body.travelDates}
Duration: ${body.duration}
Group Size: ${body.groupSize}
Budget Per Person: ${body.budget}
Preferences: ${body.preferences?.join(', ') || 'None'}

Reply in a friendly, professional tone, structured for easy skimming with headings and short bullets. Include:
- 🏌️ Suggested golf courses (with reasoning)
- 🏨 Lodging recommendations
- 🛫 Travel suggestions (closest airport or arrival city)
- 🗓️ Suggested itinerary (day-by-day)
- 🍽️ Optional meal/off-course experiences
- ✨ Insider tip
`;

  try {
    const completion = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [
          { role: 'system', content: 'You are a luxury golf travel concierge.' },
          { role: 'user', content: prompt },
        ],
        max_tokens: 800,
        temperature: 0.8,
      }),
    });
    if (!completion.ok) {
      const error = await completion.text();
      return NextResponse.json({ error }, { status: 500 });
    }
    const data = await completion.json();
    const aiText = data.choices?.[0]?.message?.content || 'No response from AI.';
    return NextResponse.json({ result: aiText });
  } catch (err) {
    return NextResponse.json({ error: (err as Error).message }, { status: 500 });
  }
} 