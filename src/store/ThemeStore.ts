import { create } from "zustand"
import { persist } from "zustand/middleware"


type State = {
    isDark: boolean
}

type Action = {
    setIsDark:(theme: boolean)=> void
}

const useThemeStore = create<State & Action>(persist((set)=>({
    isDark: false,
    setIsDark:(theme)=>set(()=>({isDark: theme}))
}),{
    name: "theme-store"
}))

export default useThemeStore