import React from 'react'
import { Grid, Divider } from '@material-ui/core'

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
  return (
    <Grid container direction='row'>
      <Grid xs={6}>{data.description}</Grid>
      <Grid xs={6}>{data.amount}</Grid>
      <Grid xs={6}>Spent from Daily Cash</Grid>
      <Grid xs={6}>Category</Grid>
      <Divider />
    </Grid>
  )
}
