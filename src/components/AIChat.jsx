import { useState } from "react"
import { askAI } from "../services/openai"
import { useStore } from "../store/useStore"

export default function AIChat(){

const notes = useStore(s=>s.notes)

const [open,setOpen] = useState(false)

const [msg,setMsg] = useState("")

const [chat,setChat] = useState([])


async function send(){

const res = await askAI(msg,notes)

setChat([...chat,{q:msg,a:res}])

setMsg("")

}


return(

<>

<button
className="fixed bottom-6 right-6 bg-indigo-600 text-white px-4 py-3 rounded-full"
onClick={()=>setOpen(!open)}
>
AI
</button>


{open&&(

<div className="fixed right-6 bottom-20 w-80 h-96 bg-white dark:bg-slate-800 rounded-xl shadow p-3 flex flex-col">

<div className="flex-1 overflow-auto">

{chat.map((c,i)=>(

<div key={i} className="mb-3">

<b>You:</b> {c.q}

<br/>

<b>AI:</b> {c.a}

</div>

))}

</div>


<input
value={msg}
onChange={(e)=>setMsg(e.target.value)}
placeholder="Ask about notes..."
className="border p-2 rounded"
/>

<button
onClick={send}
className="bg-indigo-600 text-white mt-2 p-2 rounded"
>
Send
</button>

</div>

)}


</>

)

}
