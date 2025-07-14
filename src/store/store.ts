import { create } from "zustand"
import { persist } from "zustand/middleware"

type Notes = {
    id: string, 
    title: string,
    body: string
}

type State = {
    notes: Notes[]
}

type Actions = {
    addNote:(id : string, title: string, body: string)=> void,
    deleteNote: (id: string)=>void,
    editNotes: (newNotes: Notes[]) => void
}

const useNoteStore = create<State & Actions>(persist((set)=>({
    notes: [],
    addNote:(id, title, body)=>{
        const newNote = {id, title, body}
        set((state)=>({
            notes:[...state.notes, newNote]
        }))
    },
    deleteNote:(id)=>{
        set((state)=>({
            notes: state.notes.filter(note=> note.id !== id)
        }))
    },
    editNotes: (newNotes) => {
        set(() => ({
          notes: [...newNotes],
        }));
      },
    }),
    {
    name: "note-store"
}))


export default useNoteStore