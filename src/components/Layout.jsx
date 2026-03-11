import FolderSidebar from "./FolderSidebar"
import NotesList from "./NotesList"
import NoteEditor from "./NoteEditor"
import AIChat from "./AIChat"
import SearchBar from "./SearchBar"
import { useStore } from "../store/useStore"

export default function Layout() {

  const activeNote = useStore((s) => s.activeNote)

  return (

    <div className="flex h-screen">

      <FolderSidebar />

      <div className="flex flex-col flex-1">

        <SearchBar />

        {activeNote ? <NoteEditor /> : <NotesList />}

      </div>

      <AIChat />

    </div>

  )
}
