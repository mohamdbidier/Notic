import Layout from "./components/Layout"
import { useStore } from "./store/useStore"
import { useEffect } from "react"

export default function App(){

const dark = useStore(s=>s.darkMode)

useEffect(()=>{

if(dark) document.documentElement.classList.add("dark")
else document.documentElement.classList.remove("dark")

},[dark])

return(

<div className="h-screen flex">

<Layout/>

</div>

)

}
