import { create } from "zustand"
import { persist } from "zustand/middleware"


type State = {
    isDark: boolean
}

type Action = {
    setIsDark:(theme: boolean)=> void
}

type Store = State & Action

const useThemeStore = create<Store>()(persist((set)=>({
    isDark: false,
    setIsDark:(theme)=>set(()=>({isDark: theme}))
}),{
    name: "theme-store"
}))

export default useThemeStore