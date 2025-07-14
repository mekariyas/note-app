import { useNavigate } from "react-router-dom"
import {v4 as uuidv4} from "uuid"
import {useState, type FormEvent} from 'react'
import useFormStorage from "../store/store"

const Form = () => {
  const navigate = useNavigate()
   const id = uuidv4()
   const [title, setTitle] = useState<string>( "")
   const [body, setBody] = useState<string>("")
   const addNewNote = useFormStorage((state)=>state.addNote)

   const handleSubmit =(e:FormEvent)=>{
    e.preventDefault()
    if(title && body){
      addNewNote(id, title, body)
      navigate("/notes")
      return
    }
   }
  return (
    <main className="w-full h-[85vh] md:h-[87.5vh]  flex items-center justify-center dark:bg-black dark:text-white">
        <form className="w-full h-full mt-6 md:mt-0 md:w-[40%] md:h-[95%] flex flex-col rounded-sm shadow-blue-400  shadow-2xl md:rounded-lg dark:bg-black dark:text-white" onSubmit={handleSubmit}>
            <label className="text-lg font-semibold ml-2 mt-2 mb-2">Title:</label>
            <input type="text" value={title} placeholder="Write the title here" className="h-10 w-[90%] outline-none border-b-[1px] ml-4 pl-1 mb-2" required onChange={(e)=>setTitle(e.target.value)}/>
            <label className="text-lg font-semibold ml-2 mb-2">Body:</label>
            <textarea value={body} placeholder="Write the body here" className="outline-none ring-1 ring-black dark:ring-white w-[90%] h-[60%] ml-4 pl-2 pt-2  mb-3 resize-none rounded-sm" maxLength={800} required onChange={(e)=>setBody(e.target.value)}/>
            <input type="submit" className="outline-none ring-1 w-[90%] h-12 ml-4 rounded-sm text-lg font-bold dark:bg-blue-950 dark:text-white"/>
        </form>
    </main>
  )
}

export default Form