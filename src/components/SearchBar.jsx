import { createNote } from "../services/db"
import { useStore } from "../store/useStore"

export default function SearchBar() {

const setSearch = useStore(s => s.setSearch)
const addNote = useStore(s => s.addNote)

async function newNote(){

const note = {
title:"New Note",
content:"",
folderId:null,
createdAt:Date.now(),
updatedAt:Date.now()
}

const id = await createNote(note)

addNote({...note,id})

}

return (

<div className="p-3 border-b flex gap-2">

<input
placeholder="Search notes..."
className="flex-1 p-2 border rounded"
onChange={(e)=>setSearch(e.target.value)}
/>

<button
onClick={newNote}
className="bg-indigo-500 text-white px-3 py-2 rounded"
>
New Note
</button>

</div>

)

}
