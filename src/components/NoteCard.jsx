import { useStore } from "../store/useStore"

export default function NoteCard({ note }) {

  const setActiveNote = useStore(s => s.setActiveNote)

  return (

    <div
      onClick={() => setActiveNote(note)}
      className="p-4 bg-surface dark:bg-darksurface rounded cursor-pointer hover:opacity-80"
    >

      <h2 className="font-bold mb-2">
        {note.title || "Untitled"}
      </h2>

      <p className="text-sm">
        {note.content?.slice(0,100)}
      </p>

    </div>

  )
}
