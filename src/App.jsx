import { useEffect } from "react"
import Layout from "./components/Layout"
import { useStore } from "./store/useStore"

export default function App() {

  const darkMode = useStore((s) => s.darkMode)

  useEffect(() => {
    try {
      if (darkMode) {
        document.documentElement.classList.add("dark")
      } else {
        document.documentElement.classList.remove("dark")
      }
    } catch (error) {
      console.error("Dark mode toggle failed", error)
    }
  }, [darkMode])

  return (
    <div className="h-screen bg-background dark:bg-darkbg text-text dark:text-darktext">
      <Layout />
    </div>
  )
}
