import React from 'react'
import { Paper, Grid } from '@material-ui/core'

const amounts = ['available balance', 'in scheduled activities', 'in Expenses', 'in Goals']

export default function SafeToSpend() {
  return (
    <Paper square className='full-flex' style={{ padding: '1rem' }}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          Spend Amount
        </Grid>
        {amounts.map(amount => (
          <Grid item xs={3}>
            {amount}
          </Grid>
        ))}
      </Grid>
    </Paper>
  )
}
