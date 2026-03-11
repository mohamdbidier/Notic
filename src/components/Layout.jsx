import Sidebar from "./Sidebar"
import NotesList from "./NotesList"
import NoteEditor from "./NoteEditor"
import Topbar from "./Topbar"
import AIChat from "./AIChat"
import { useStore } from "../store/useStore"

export default function Layout(){

const activeNote = useStore(s => s.activeNote)

return (

<div className="flex w-full">

<Sidebar />

<div className="flex flex-col flex-1">

<Topbar />

{activeNote ? <NoteEditor /> : <NotesList />}

</div>

<AIChat />

</div>

)

}
