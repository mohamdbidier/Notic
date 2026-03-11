import Dexie from "dexie"

export const db = new Dexie("NoticDB")


 db.version(1).stores({

notes:"++id,title,content,folderId,createdAt,updatedAt",
folders:"++id,name,color,createdAt"

})


export async function getNotes(){

return await db.notes.toArray()

}

export async function createNote(note){

const id = await db.notes.add(note)

return id

}

export async function updateNote(note){

await db.notes.update(note.id,note)

}
