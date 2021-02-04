import React, { useState, createContext, ReactNode } from 'react'

interface INavContextProps {
  children?: ReactNode
}

export type NavContextType = {
  route: string
  changeRoute: (val: string) => void
}

export const NavContext = createContext<NavContextType>({
  route: 'activity',
  changeRoute: (val: string) => console.warn('No Nav Provider')
})

export default function NavProvider({ children }: INavContextProps) {
  const [route, setRoute] = useState('activity')
  const changeRoute = (val: string) => setRoute(val)
  return <NavContext.Provider value={{ route, changeRoute }}>{children}</NavContext.Provider>
}
