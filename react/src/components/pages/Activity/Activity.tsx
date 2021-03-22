import React from 'react'
import { Typography, Divider } from '@material-ui/core'
import TransactionList from './TransactionList/TransactionList'

export default function Activity() {
  return (
    <div className='full-flex' style={{ padding: '1rem' }}>
      <Typography variant='h6' style={{ padding: '0 0.5rem' }}>
        Activity
      </Typography>
      <Divider />
      <TransactionList />
    </div>
  )
}
