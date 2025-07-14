import { useNavigate } from "react-router-dom"
import ErrorImg from "../assets/404-not-found.svg"

const ErrorPage = () => {

  const navigate = useNavigate()
  return (
    <main className="w-full h-[100vh] md:h-[100vh] flex flex-col justify-center items-center">
      <section className="w-[75%] md:w-[60%] h-[60%] flex flex-col">
        <img src={ErrorImg} alt="Error-Occurred" className="w-full h-full object-contain"/> 
      </section>
      <button onClick={()=>navigate("/")} className="border-2 mt-2 h-10 text-center w-40 rounded-md font-semibold bg-red-500 text-white cursor-pointer">Back To Homepage</button>
    </main>
  )
}

export default ErrorPage