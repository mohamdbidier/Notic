import {create} from "zustand"

export const useStore=create((set)=>({
notes:[],
selectedNote:null,

addNote:(note)=>set(state=>({notes:[...state.notes,note]})),

updateNote:(id,content)=>set(state=>({
notes:state.notes.map(n=>n.id===id?{...n,content}:n)
})),

setSelected:(note)=>set({selectedNote:note})
}))
