
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Editor from "./pages/Editor"
import AIAssistant from "./pages/AIAssistant"

export default function App(){
return(
<BrowserRouter>
<Routes>
<Route path="/" element={<Home/>}/>
<Route path="/editor/:id" element={<Editor/>}/>
<Route path="/ai" element={<AIAssistant/>}/>
</Routes>
</BrowserRouter>
)
}
