import { useNavigate } from "react-router-dom"
import { FaEdit, FaTrash } from "react-icons/fa"
import useFormStorage from "../store/store"

const Notes = () => {

  const navigate = useNavigate()
  const AllNotes = useFormStorage((state)=>state.notes)

  const deleteNote = useFormStorage((state)=>state.deleteNote)

  return (
    <main className="w-full h-[85vh] md:h-[87.5vh] flex flex-col items-center dark:bg-black dark:text-white">
      <ul className="w-full  mt-6 md:mt-6 md:w-[50%]  flex flex-col space-y-2  pl-2" >
        {AllNotes.length >0? AllNotes.map(note=>{
          return(
          <li key={note.id} className="w-[100%] flex items-center h-12 mt-2 space-x-3 dark:border-b-1 dark:border-b-white">
            <h1 className="w-[65%] md:w-[75%] h-8  overflow-hidden ml-2 font-semibold text-lg">{note.title}</h1>
            <button className="h-6 w-16 flex items-center justify-center rounded-lg bg-amber-200 text-black font-semibold cursor-pointer" onClick={()=>navigate(`/viewNote/${note.id}`) }>View</button>
            <button className="h-6 w-16 flex items-center justify-center rounded-lg bg-yellow-400 text-white cursor-pointer" onClick ={()=> navigate(`/EditNote/${note.id}`)}><FaEdit className="h-full"/></button>
            <button className="h-6 w-16 flex items-center justify-center rounded-lg bg-red-700 text-white cursor-pointer" onClick={()=> deleteNote(note.id)}><FaTrash className="h-full"/></button>
          </li>)
        }):(
          <li className="w-full  flex items-center h-12 mt-2 space-x-3">
            <h1 className="w-full  h-8  overflow-hidden ml-2 font-semibold text-lg text-center">No Notes Created</h1>
          </li>)}
      </ul>
    </main>
  )
}

export default Notes