import { useStore } from "../store/useStore"

export default function NoteCard({note}){

const setActive = useStore(s=>s.setActiveNote)

return(

<div
onClick={()=>setActive(note)}
className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow cursor-pointer"
>

<h3 className="font-semibold">

{note.title}

</h3>

<p className="text-sm text-gray-400 mt-2">

{note.content.slice(0,100)}

</p>

</div>

)

}
