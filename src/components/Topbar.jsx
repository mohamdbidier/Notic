import { useStore } from "../store/useStore"
import { createNote } from "../services/db"

export default function Topbar(){

const addNote = useStore(s=>s.addNote)
const setActive = useStore(s=>s.setActiveNote)

async function newNote(){

const note={

 title:"Untitled",
 content:"",
 createdAt:Date.now(),
 updatedAt:Date.now()

}

const id = await createNote(note)

note.id=id

addNote(note)

setActive(note)

}

return(

<div className="p-3 border-b flex justify-between bg-white dark:bg-slate-800">

<h1 className="font-bold text-lg">Notic</h1>

<button
onClick={newNote}
className="bg-indigo-600 text-white px-4 py-2 rounded-lg"
>
New Note
</button>

</div>

)

}
