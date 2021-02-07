import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import { uniqBy, filter } from 'lodash'
import { format } from 'date-fns'
import Transaction from './Transaction/Transaction'

const transactions = [
  {
    date_transacted: '2019-10-01',
    date_posted: '2019-10-03',
    currency: 'USD',
    amount: 100,
    description: '1 year Netflix subscription'
  },
  {
    date_transacted: '2019-10-01',
    date_posted: '2019-10-02',
    currency: 'USD',
    amount: 100,
    description: '1 year mobile subscription'
  }
]

export default function TransactionList() {
  const uniqDates = uniqBy(transactions, 'date_posted')
  return (
    <div>
      {uniqDates.map(date => (
        <Grid>
          <Typography variant='subtitle1' style={{ backgroundColor: '#f5f5f5' }}>
            {format(new Date(date.date_posted), 'MM/dd/yyyy')}
          </Typography>
          {filter(transactions, item => item.date_posted === date.date_posted).map(trans => (
            <Transaction key={trans.amount} data={trans} />
          ))}
        </Grid>
      ))}
    </div>
  )
}
