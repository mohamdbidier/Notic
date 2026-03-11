import { useStore } from "../store/useStore"
import { useState,useEffect } from "react"
import { updateNote } from "../services/db"

export default function NoteEditor(){

const note = useStore(s=>s.activeNote)
const updateLocal = useStore(s=>s.updateNote)

const [text,setText] = useState(note.content)


useEffect(()=>{

const timer = setTimeout(async()=>{

const updated={

...note,
content:text,
updatedAt:Date.now()

}

await updateNote(updated)

updateLocal(updated)


},2000)


return ()=>clearTimeout(timer)


},[text])


return(

<div className="p-6 flex flex-col flex-1">

<textarea
className="flex-1 bg-white dark:bg-slate-800 p-4 rounded-xl"
value={text}
onChange={(e)=>setText(e.target.value)}
/>

</div>

)

}
