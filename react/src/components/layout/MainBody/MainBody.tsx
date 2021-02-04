import React, { useContext } from 'react'
import { NavContext, NavContextType } from '../../../context/navContext'
import { Activity, Expenses, Goals } from '../../pages'

const components: any = { activity: <Activity />, goals: <Goals />, expenses: <Expenses /> }

export default function MainBody() {
  const { route } = useContext(NavContext) as NavContextType
  return (
    <div className='full-flex' role='tabpanel' id={`tabpanel-${route}`} aria-labelledby={`tab-${route}`}>
      {components[route]}
    </div>
  )
}
