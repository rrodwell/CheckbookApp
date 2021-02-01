import React, { ReactNode } from 'react'
import { Plaid } from './common'

import './App.css'

interface IProps {
  children?: ReactNode
}

export default function App({ children }: IProps) {
  return (
    <div className='app'>
      <Plaid />
    </div>
  )
}
