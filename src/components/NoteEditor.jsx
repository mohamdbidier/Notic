import { useState, useEffect } from "react"
import { updateNote } from "../services/db"
import { useStore } from "../store/useStore"

export default function NoteEditor() {

  const activeNote = useStore(s => s.activeNote)
  const updateLocal = useStore(s => s.updateNote)

  const [text, setText] = useState(activeNote.content)

  useEffect(() => {

    const timer = setTimeout(async () => {

      try {

        const updated = {
          ...activeNote,
          content: text,
          updatedAt: Date.now()
        }

        await updateNote(updated)

        updateLocal(updated)

      } catch (error) {

        console.error("Autosave failed", error)

      }

    }, 2000)

    return () => clearTimeout(timer)

  }, [text])

  return (

    <div className="p-4 h-full flex flex-col">

      <textarea
        className="flex-1 p-3 bg-surface dark:bg-darksurface"
        value={text}
        onChange={(e)=>setText(e.target.value)}
      />

      <div className="text-xs mt-2">
        Characters: {text.length}
      </div>

    </div>

  )
}
