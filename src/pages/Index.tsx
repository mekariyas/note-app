import { Link } from "react-router-dom"
import { GrAdd } from "react-icons/gr"

const Index = () => {
  return (
    <main className="w-full h-[85vh] md:h-[87.5vh] flex flex-col items-center dark:bg-black dark:text-white">
      <section className="w-[80%] h-[40%] mt-10 md:h-[55%] flex flex-col justify-center">
        <h1 className="w-full text-2xl md:text-8xl font-extrabold text-center  text-shadow-md text-shadow-black ">React TypeScript + Zustand</h1>
        <h2 className="w-full text-lg md:text-4xl font-extrabold text-center  text-shadow-md text-shadow-black mt-4">Note-App</h2>
      </section>
      <Link to="/create" className="absolute animate-bounce bg-amber-200 dark:bg-black dark:border-[1px] dark:border-white bottom-20 md:bottom-10 z-[4] right-10 w-20 h-20 flex items-center justify-center rounded-full shadow-2xl shadow-blue-800">
           <GrAdd/>
      </Link>
    </main>
  )
}

export default Index