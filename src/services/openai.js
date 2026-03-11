export async function askAI(message, notes) {

  const API_KEY = import.meta.env.VITE_OPENAI_KEY

  const systemPrompt = "You are Notic, an AI assistant that helps users manage and understand their notes. Be concise and helpful."

  const userNotes = notes
    .map(n => `Title: ${n.title}\nContent: ${n.content}`)
    .join("\n\n")

  try {

    const response = await fetch("https://api.openai.com/v1/chat/completions", {

      method: "POST",

      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${API_KEY}`
      },

      body: JSON.stringify({

        model: "gpt-4o-mini",

        messages: [
          { role: "system", content: systemPrompt },
          {
            role: "user",
            content: `My notes:\n${userNotes}\n\nQuestion: ${message}`
          }
        ]

      })

    })

    const data = await response.json()

    return data.choices?.[0]?.message?.content || "AI failed"

  } catch (error) {

    console.error("AI request failed", error)

    return "AI service unavailable"

  }
}
