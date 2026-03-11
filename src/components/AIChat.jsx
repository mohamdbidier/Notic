import { useState } from "react"
import { askAI } from "../services/openai"
import { useStore } from "../store/useStore"

export default function AIChat() {

  const notes = useStore(s => s.notes)

  const [open,setOpen] = useState(false)
  const [msg,setMsg] = useState("")
  const [chat,setChat] = useState([])
  const [loading,setLoading] = useState(false)

  async function send() {

    if(!msg) return

    try {

      setLoading(true)

      const res = await askAI(msg,notes)

      setChat([...chat,{q:msg,a:res}])

      setMsg("")

    } catch(e){

      console.error(e)

    } finally {

      setLoading(false)

    }

  }

  return (

    <>

      <button
        className="fixed bottom-6 right-6 bg-primary text-white px-4 py-2 rounded"
        onClick={()=>setOpen(!open)}
      >
        AI
      </button>

      {open && (

        <div className="fixed bottom-20 right-6 w-80 h-96 bg-surface dark:bg-darksurface p-3 rounded shadow flex flex-col">

          <div className="flex-1 overflow-auto">

            {chat.map((c,i)=>(

              <div key={i} className="mb-3">

                <div className="font-bold">You</div>
                <div>{c.q}</div>

                <div className="font-bold mt-1">AI</div>
                <div>{c.a}</div>

              </div>

            ))}

          </div>

          <input
            value={msg}
            onChange={(e)=>setMsg(e.target.value)}
            placeholder="Ask about your notes..."
            className="border p-2 text-sm dark:border-darkborder"
          />

          <button
            onClick={send}
            className="bg-primary text-white mt-2 p-2 rounded"
          >
            {loading?"Thinking...":"Send"}
          </button>

        </div>

      )}

    </>

  )
}
