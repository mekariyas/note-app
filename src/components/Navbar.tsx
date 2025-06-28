import { useState } from 'react'
import { Link } from "react-router-dom"
import { FaSun, FaMoon } from 'react-icons/fa'

const Navbar = () => {
  const [ darkMode, setDarkMode] = useState<boolean>(false)

  const [isVisible, setIsVisible] = useState<boolean>(false)

  const handleDarkMode = ()=>{
    setDarkMode(!darkMode)
  }

  const handleVisibility = ()=>{
    setIsVisible(!isVisible)
  }
  return (
    <header className="w-full h-20 flex items-center justify-between sticky top-0 z-[4] shadow-lg shadow-blue-400 rounded-bl-2xl rounded-br-2xl">
        <section className="ml-2 w-28 h-full flex items-center justify-center">
            <p className="font-bold text-lg w-[85%]">Note-App</p>
        </section>
        <nav className={`${isVisible? "flex flex-col transition-all transition-discrete duration-350 ease-in-out ":"hidden"}  absolute z-[4] top-16 md:static shadow-lg shadow-blue-400 rounded-bl-2xl rounded-br-2xl md:rounded-br-2xl md:shadow-none bg-white md:bg-none  md:flex md:flex-row items-center justify-evenly w-full h-32 md:w-[60%]  md:h-full md:mr-2`}>
            <Link to="/" className="text-lg font-semibold">Home</Link>
            <Link to="/create" className="text-lg font-semibold">Create</Link>
            <Link to="/notes" className="text-lg font-semibold">Notes</Link>
            <button onClick={handleDarkMode} className="text-lg font-semibold cursor-pointer">{darkMode? <FaMoon/> : <FaSun/>}</button>
        </nav>
        <button className="w-12 h-[50%] mt-3 mb-3  mr-4 md:hidden flex flex-col items-center justify-around rounded-md cursor-pointer border-black border-2" onClick={handleVisibility}>
          <section className={`w-[80%] h-0.5 bg-black transition-all transition-discrete duration-700 ease-in-out ${isVisible? "rotate-45 relative mt-[16.5px]":""}`}></section>
          <section className={`w-[80%] h-0.5 bg-black transition-all transition-discrete duration-200 ease-in-out ${isVisible? "hidden": ""}`}></section>
          <section className={`w-[80%] h-0.5 bg-black transition-all transition-discrete duration-700 ease-in-out ${isVisible? "-rotate-45 relative z-[2] mb-4":""}`}></section>
        </button>
    </header>
  )
}

export default Navbar