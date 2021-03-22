import React from 'react'
import { Grid, Typography, Divider } from '@material-ui/core'
import { uniqBy, filter } from 'lodash'
import { format } from 'date-fns'
import Transaction from './Transaction/Transaction'

const transactions = [
  {
    date_transacted: '2019-10-01',
    date_posted: '2019-10-03',
    currency: 'USD',
    amount: -100,
    description: '1 year Netflix subscription'
  },
  {
    date_transacted: '2019-10-01',
    date_posted: '2019-10-02',
    currency: 'USD',
    amount: -100,
    description: '1 year mobile subscription'
  },
  {
    date_transacted: '2019-10-01',
    date_posted: '2019-10-02',
    currency: 'USD',
    amount: -50,
    description: 'Torched Hop'
  }
]

export default function TransactionList() {
  const uniqDates = uniqBy(transactions, 'date_posted')
  console.log({ uniqDates })
  return (
    <div>
      {uniqDates.map(date => (
        <Grid key={date.date_posted}>
          <Typography
            variant='subtitle1'
            style={{
              backgroundColor: '#f5f5f5',
              fontSize: 'medium',
              fontWeight: 500,
              padding: '0.25rem 0.5rem'
              // borderStyle: 'solid',
              // borderWidth: '1px 0',
              // borderColor: '#cccccc'
            }}
          >
            {format(new Date(date.date_posted), 'EEEE, LLL dd')}
          </Typography>
          <Divider />
          {filter(transactions, item => item.date_posted === date.date_posted).map(trans => (
            <div>
              <Transaction key={trans.amount} data={trans} />
              <Divider />
            </div>
          ))}
        </Grid>
      ))}
    </div>
  )
}
