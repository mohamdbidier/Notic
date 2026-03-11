import OpenAI from "openai"

const client=new OpenAI({
apiKey:import.meta.env.VITE_OPENAI_API_KEY,
dangerouslyAllowBrowser:true
})

export async function summarizeNote(text){
try{
const res=await client.chat.completions.create({
model:"gpt-4o-mini",
messages:[
{role:"system",content:"Summarize notes"},
{role:"user",content:text}
]
})
return res.choices[0].message.content
}catch(err){
console.error(err)
return "AI error"
}
}
