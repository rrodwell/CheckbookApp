import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Grid, Typography } from '@material-ui/core'
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import ArrowDropDownCircleOutlinedIcon from '@material-ui/icons/ArrowDropDownCircleOutlined'
import numeral from 'numeral'

const amounts = {
  balance: {
    value: 1123.35,
    text: 'available balance'
  },
  scheduled: {
    value: 0,
    text: 'in scheduled activities'
  },
  goals: {
    value: 345.38,
    text: 'in Goals'
  },
  expenses: {
    value: 457.25,
    text: 'in Expenses'
  }
}

const useStyles = makeStyles(() => ({
  root: {
    padding: '1rem',
    backgroundColor: '#f5f5f5'
  },
  expanded: {
    margin: '0 !important'
  },
  summary: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 0,
    flexGrow: 0
  }
}))

export default function SafeToSpend() {
  const classes = useStyles()
  const { balance, scheduled, expenses, goals } = amounts
  const remaining = balance.value - scheduled.value - expenses.value - goals.value

  numeral.defaultFormat('$0.00')

  return (
    <Accordion className={`full-flex ${classes.root}`} classes={{ expanded: classes.expanded }} defaultExpanded>
      <AccordionSummary
        id='balance-header'
        classes={{ content: classes.summary }}
        expandIcon={<ArrowDropDownCircleOutlinedIcon color='primary' />}
        aria-controls='balance-content'
      >
        <Typography variant='h4' display='inline'>
          {numeral(remaining).format()}
        </Typography>
        <Typography variant='h5' display='inline' color='textSecondary' style={{ padding: '0 0.5rem' }}>
          Daily Cash
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        {Object.values(amounts).map((amount, idx) => (
          <Grid
            key={amount.text}
            item
            xs={3}
            zeroMinWidth
            style={{
              textAlign: 'center',
              borderRight: idx < 3 ? '1px solid' : 'none'
            }}
          >
            <Typography variant='h6' display='inline'>
              {numeral(amount.value).format()}
            </Typography>
            <Typography variant='subtitle1' display='inline' color='textSecondary' style={{ padding: '0 0.5rem' }}>
              {amount.text}
            </Typography>
          </Grid>
        ))}
      </AccordionDetails>
    </Accordion>
  )
}
