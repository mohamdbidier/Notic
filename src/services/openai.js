export async function askAI(message,notes){

const key = import.meta.env.VITE_OPENAI_KEY

const context = notes.map(n=>`Title:${n.title}\n${n.content}`).join("\n\n")

const res = await fetch("https://api.openai.com/v1/chat/completions",{

method:"POST",

headers:{
"Content-Type":"application/json",
"Authorization":`Bearer ${key}`

},

body:JSON.stringify({

model:"gpt-4o-mini",

messages:[

{role:"system",content:"You are Notic AI assistant helping organize notes."},

{role:"user",content:`Notes:\n${context}\n\n${message}`}

]

})

})

const data = await res.json()

return data.choices[0].message.content

}
