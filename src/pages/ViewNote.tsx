import { useState,useEffect } from "react"
import { useParams } from "react-router-dom"
import useFormStorage from "../store/store"


const ViewNote = () => {

  const { id } = useParams()

  const notes = useFormStorage((state)=>state.notes)
  const note = notes.find(note=>note.id === id)
  const [title, setTitle] = useState<string>("")
  const [body, setBody ] = useState<string>("")
  useEffect(()=>{
    if(note){
      setTitle(note.title)
      setBody(note.body)
    }
  },[])

  return (
    <>
    {!note? (<h1 className="text-lg font-semibold text-red-500 mt-4 w-full text-center">Note not found</h1>):
    (
      <main className="w-full h-[85vh] md:h-[87.5vh]  flex flex-col items-center justify-start dark:bg-black dark:text-white">
        <h1 className="text-base md:text-2xl font-bold mt-4 text-center">{title}</h1>
        <hr className="w-full h-4 text-slate-400 mb-2"/>
        <p className="w-[80%] text-base md:text-lg text-wrap text-left pl-2">{body}</p>  
      </main>
    )}
  </>
  )
}

export default ViewNote