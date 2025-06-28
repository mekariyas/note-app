import { create } from "zustand"

type Notes= {
    id: string, 
    title: string,
    body: string
}

type State = {
    notes: Notes[]
}

type Actions = {
    addNote:(id : string, title: string, body: string)=> void,
    deleteNote: (id: string)=>void
}

const useNoteStore = create<State & Actions>((set)=>({
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
    }
}))


export default useNoteStore