import Dexie from "dexie"

export const db = new Dexie("NoticDB")

try {

  db.version(1).stores({
    notes: "++id,title,content,folderId,createdAt,updatedAt",
    folders: "++id,name,color,createdAt"
  })

} catch (error) {
  console.error("Dexie initialization failed", error)
}

export async function createNote(note) {
  try {
    const id = await db.notes.add(note)
    return id
  } catch (error) {
    console.error("Create note failed", error)
  }
}

export async function getNotes() {
  try {
    return await db.notes.toArray()
  } catch (error) {
    console.error("Get notes failed", error)
    return []
  }
}

export async function updateNote(note) {
  try {
    await db.notes.update(note.id, note)
  } catch (error) {
    console.error("Update note failed", error)
  }
}

export async function deleteNote(id) {
  try {
    await db.notes.delete(id)
  } catch (error) {
    console.error("Delete note failed", error)
  }
}

export async function createFolder(folder) {
  try {
    return await db.folders.add(folder)
  } catch (error) {
    console.error("Create folder failed", error)
  }
}

export async function getFolders() {
  try {
    return await db.folders.toArray()
  } catch (error) {
    console.error(error)
    return []
  }
}
