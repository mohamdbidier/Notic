import {EditorContent,useEditor} from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"

export default function NoteEditor({content,onChange}){

const editor=useEditor({
extensions:[StarterKit],
content,

onUpdate({editor}){
onChange(editor.getHTML())
}
})

return(
<div className="p-4">
<EditorContent editor={editor}/>
</div>
)
}
