import { useEffect, useState } from "react"
import { getNotes } from "../services/db"
import { useStore } from "../store/useStore"
import NoteCard from "./NoteCard"

export default function NotesList() {

  const setNotes = useStore(s => s.setNotes)
  const notes = useStore(s => s.notes)
  const search = useStore(s => s.searchQuery)

  const [loading, setLoading] = useState(true)

  useEffect(() => {

    async function load() {

      try {

        const n = await getNotes()

        setNotes(n)

      } catch (err) {

        console.error("Failed loading notes", err)

      } finally {

        setLoading(false)

      }

    }

    load()

  }, [])

  if (loading) return <div className="p-6">Loading notes...</div>

  const filtered = notes.filter(n =>
    n.title?.toLowerCase().includes(search.toLowerCase()) ||
    n.content?.toLowerCase().includes(search.toLowerCase())
  )

  if (!filtered.length) {
    return <div className="p-6">No notes found</div>
  }

  return (

    <div className="grid md:grid-cols-3 gap-4 p-4">

      {filtered.map(note => (
        <NoteCard key={note.id} note={note} />
      ))}

    </div>

  )
}
