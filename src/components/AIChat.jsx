import {useState} from "react"
import {summarizeNote} from "../services/openai"

export default function AIChat(){

const [input,setInput]=useState("")
const [messages,setMessages]=useState([])

const askAI=async()=>{
const res=await summarizeNote(input)
setMessages([...messages,{q:input,a:res}])
setInput("")
}

return(
<div className="p-4">

{messages.map((m,i)=>(
<div key={i}>
<p>{m.q}</p>
<p>{m.a}</p>
</div>
))}

<input value={input} onChange={(e)=>setInput(e.target.value)} className="border p-2"/>

<button onClick={askAI}>Ask</button>

</div>
)
}
