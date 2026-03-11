import { useEffect } from "react"
import { getNotes } from "../services/db"
import { useStore } from "../store/useStore"
import NoteCard from "./NoteCard"

export default function NotesList(){

const notes = useStore(s=>s.notes)
const setNotes = useStore(s=>s.setNotes)

useEffect(()=>{

async function load(){

const data = await getNotes()

setNotes(data)

}

load()

},[])


if(!notes.length)

return(

<div className="flex flex-1 items-center justify-center text-gray-400">

No notes yet

</div>

)


return(

<div className="grid md:grid-cols-3 gap-4 p-6">

{notes.map(n=>

<NoteCard key={n.id} note={n}/>

)}

</div>

)

}
