import React from 'react'
import { Grid } from '@material-ui/core'
import numeral from 'numeral'

import './Transaction.css'

interface ITransaction {
  date_transacted: string
  date_posted: string
  currency: string
  amount: number
  description: string
}

interface ITransactionProps {
  data: ITransaction
}

export default function Transaction({ data }: ITransactionProps) {
  const goal = 'Daily Cash'
  return (
    <Grid className='item' container direction='row'>
      <Grid xs={6} item={true}>
        {data.description}
      </Grid>
      <Grid className={`right ${data.amount < 0 ? 'expense' : 'deposit'}`} xs={6} item={true}>
        {numeral(Math.abs(data.amount)).format('$0.00')}
      </Grid>
      <Grid className='details' xs={6} item={true}>
        Spent from {goal}
      </Grid>
      <Grid className='right details' xs={6} item={true}>
        Category
      </Grid>
    </Grid>
  )
}
