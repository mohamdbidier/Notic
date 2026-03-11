import { useEffect } from "react"
import { getFolders } from "../services/db"
import { useStore } from "../store/useStore"

export default function FolderSidebar() {

  const folders = useStore(s => s.folders)
  const setFolders = useStore(s => s.setFolders)

  useEffect(() => {

    async function load() {

      const f = await getFolders()

      setFolders(f)

    }

    load()

  }, [])

  return (

    <div className="w-64 border-r p-4 hidden md:block dark:border-darkborder">

      <h2 className="font-bold mb-4">Folders</h2>

      {folders.map(folder => (

        <div key={folder.id} className="mb-2">
          {folder.name}
        </div>

      ))}

    </div>

  )
}
