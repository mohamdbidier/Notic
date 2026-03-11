import {useStore} from "../store/useStore"
import {Link} from "react-router-dom"

export default function Home(){

const notes=useStore(s=>s.notes)

return(
<div className="p-4">

<Link to="/editor/new">New Note</Link>

{notes.map(n=>(
<Link key={n.id} to={`/editor/${n.id}`}>
<div className="border p-2 my-2">{n.title}</div>
</Link>
))}

</div>
)
}
