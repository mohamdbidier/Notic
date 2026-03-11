import { create } from "zustand"

export const useStore = create((set) => ({

  notes: [],
  folders: [],
  activeNote: null,
  searchQuery: "",
  darkMode: false,

  setNotes: (notes) => set({ notes }),

  addNote: (note) => set((state) => ({
    notes: [...state.notes, note]
  })),

  updateNote: (updated) => set((state) => ({
    notes: state.notes.map(n => n.id === updated.id ? updated : n)
  })),

  deleteNote: (id) => set((state) => ({
    notes: state.notes.filter(n => n.id !== id)
  })),

  setFolders: (folders) => set({ folders }),

  addFolder: (folder) => set((state) => ({
    folders: [...state.folders, folder]
  })),

  deleteFolder: (id) => set((state) => ({
    folders: state.folders.filter(f => f.id !== id)
  })),

  setActiveNote: (note) => set({ activeNote: note }),

  toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),

  setSearch: (q) => set({ searchQuery: q })

}))
