import { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import { FaSun, FaMoon } from 'react-icons/fa'
import useThemeStore from "../store/ThemeStore"

const Navbar = () => {
  const isDark = useThemeStore((state) => state.isDark)
  const setDarkTheme = useThemeStore((state) => state.setIsDark)
  const [isVisible, setIsVisible] = useState<boolean>(false)

  const handleDarkMode = () => {
    const newTheme = !isDark
    setDarkTheme(newTheme)
    document.body.classList.toggle("dark", newTheme)
  }

  useEffect(() => {
    document.body.classList.toggle("dark", isDark)
  }, [isDark]) 

  const handleVisibility = () => {
    setIsVisible((prev) => !prev)
  }

  return (
    <header className="w-full h-20 flex items-center justify-between sticky top-0 z-[4] shadow-lg shadow-blue-400 dark:bg-black dark:text-white">
      <section className="ml-2 w-28 h-full flex items-center justify-center">
        <p className="font-bold text-lg w-[85%]">Note-App</p>
      </section>

      <nav className={`${isVisible ? "flex flex-col" : "hidden"} absolute z-[4] top-16 md:static bg-white dark:bg-black md:bg-none md:flex md:flex-row items-center justify-evenly w-full h-32 md:w-[60%] md:h-full md:mr-2 rounded-bl-2xl rounded-br-2xl md:rounded-br-2xl shadow-lg md:shadow-none dark:text-white`}>
        <Link to="/" className="text-lg font-semibold">Home</Link>
        <Link to="/create" className="text-lg font-semibold">Create</Link>
        <Link to="/notes" className="text-lg font-semibold">Notes</Link>
        <button onClick={handleDarkMode} className="text-lg font-semibold cursor-pointer">
          {isDark ? <FaSun /> : <FaMoon />}
        </button>
      </nav>

      <button
        className="w-12 h-[50%] mt-3 mb-3 mr-4 md:hidden flex flex-col items-center justify-around rounded-md cursor-pointer border-black dark:border-white border-2"
        onClick={handleVisibility}
      >
        <section className={`w-[80%] h-0.5 bg-black dark:bg-white transition-all duration-700 ${isVisible ? "rotate-45 relative mt-[16.5px]" : ""}`}></section>
        <section className={`w-[80%] h-0.5 bg-black dark:bg-white transition-all duration-200 ${isVisible ? "hidden" : ""}`}></section>
        <section className={`w-[80%] h-0.5 bg-black dark:bg-white transition-all duration-700 ${isVisible ? "-rotate-45 relative z-[2] mb-4" : ""}`}></section>
      </button>
    </header>
  )
}

export default Navbar
