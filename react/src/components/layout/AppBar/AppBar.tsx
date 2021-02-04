import React from 'react'
import Navigation from './Navigation/Navigation'
import SafeToSpend from './SafeToSpend/SafeToSpend'

import './AppBar.css'

export default function AppBar() {
  return (
    <div className='flex app-bar'>
      <Navigation />
      <SafeToSpend />
    </div>
  )
}
