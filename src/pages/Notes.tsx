import { FaEdit, FaTrash } from "react-icons/fa"
import useFormStorage from "../store/store"

const Notes = () => {

  const AllNotes = useFormStorage((state)=>state.notes)
  return (
    <main className="w-full h-[87.35vh] md:h-[87.5vh] flex flex-col items-center ">
      <ul className="w-full  mt-6 md:mt-6 md:w-[50%]  flex flex-col space-y-2  pl-2" >
        {AllNotes.length >0? AllNotes.map(note=>{
          return(
          <li key={note.id} className="w-[100%] flex items-center h-12 mt-2 space-x-3">
            <h1 className="w-[65%] md:w-[75%] h-8  overflow-hidden ml-2 font-semibold text-lg">{note.title}</h1>
            <button className="h-6 w-16 border-2 flex items-center justify-center rounded-lg bg-blue-400 text-white cursor-pointer"><FaEdit className="h-full"/></button>
            <button className="h-6 w-16 border-2 flex items-center justify-center rounded-lg bg-red-700 text-white cursor-pointer"><FaTrash className="h-full"/></button>
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