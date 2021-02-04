import React from 'react'
import { Paper } from '@material-ui/core'
import NavProvider from '../context/navContext'
import { AppBar, MainBody } from './layout'

import './App.css'

export default function App() {
  return (
    <Paper className='app full-flex'>
      <NavProvider>
        <AppBar />
        <MainBody />
      </NavProvider>
    </Paper>
  )
}
