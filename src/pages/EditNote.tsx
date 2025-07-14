import { useEffect,useState } from 'react'
import type { FormEvent } from "react"
import { useParams, useNavigate} from "react-router-dom"
import useFormStorage from "../store/store"

interface Note{
  id: string,
  title:string,
  body: string
}


const Note = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const notes = useFormStorage((state)=> state.notes)
  const note : Note | undefined = notes.find((note)=> note.id === id)
  const editNotes = useFormStorage((state)=>state.editNotes) 
  const [title, setTitle ] = useState<string>("")
  const [body, setBody ] = useState<string>("")
  
  useEffect(()=>{
    if(note && note.title!== "" && note.body !== ""){
      setTitle(note.title)
      setBody(note.body)
    }
  },[])

  const handleSubmit = (e:FormEvent)=>{
    e.preventDefault()
    if(title && body&& note){
      note.title = title
      note.body = body
      editNotes(notes)
      navigate("/notes")
    }
  }

  return (
  <main className="w-full  h-[85vh] md:h-[87.5vh]  flex items-center justify-center dark:bg-black dark:text-white">
        {!note? (<h1 className="text-lg font-semibold text-red-500 mt-4 w-full text-center">Note not found</h1>) :(<form className="w-full h-full mt-6 md:mt-0 md:w-[40%] md:h-[95%] flex flex-col rounded-sm shadow-blue-400  shadow-2xl md:rounded-lg" onSubmit={handleSubmit}>
            <label className="text-lg font-semibold ml-2 mt-2 mb-2">Title:</label>
            <input type="text" value={title} placeholder="Write the title here" className="h-10 w-[90%] outline-none border-b-[1px] ml-4 pl-1 mb-2" required onChange={(e)=>setTitle(e.target.value)}/>
            <label className="text-lg font-semibold ml-2 mb-2">Body:</label>
            <textarea value={body} placeholder="Write the body here" className="outline-none ring-1 ring-black dark:ring-white w-[90%] h-[60%] ml-4 pl-2 pt-2  mb-3 resize-none rounded-sm" maxLength={800} required onChange={(e)=>setBody(e.target.value)}/>
            <button type="submit" className="outline-none ring-1 w-[90%] h-12 ml-4 rounded-sm text-lg font-bold dark:bg-blue-950">Save changes</button>
        </form>)}
    </main>)
}

export default Note