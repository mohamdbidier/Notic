import { create } from "zustand"

export const useStore = create((set)=>({

notes:[],
folders:[],
activeNote:null,
darkMode:false,

setNotes:(notes)=>set({notes}),

addNote:(note)=>set((s)=>({
notes:[...s.notes,note]
})),

updateNote:(note)=>set((s)=>({
notes:s.notes.map(n=>n.id===note.id?note:n)
})),

setActiveNote:(note)=>set({activeNote:note}),

toggleDark:()=>set((s)=>({darkMode:!s.darkMode}))

}))
