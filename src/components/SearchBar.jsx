import { useStore } from "../store/useStore"

export default function SearchBar() {

  const setSearch = useStore(s => s.setSearch)

  return (

    <div className="p-3 border-b dark:border-darkborder">

      <input
        aria-label="Search notes"
        className="w-full p-2 rounded bg-surface dark:bg-darksurface"
        placeholder="Search notes..."
        onChange={(e) => setSearch(e.target.value)}
      />

    </div>

  )
}
