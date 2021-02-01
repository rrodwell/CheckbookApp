import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Paper, BottomNavigation, BottomNavigationAction, Fab, Card, CardContent } from '@material-ui/core'
import { AttachMoney, Loop, Equalizer, Add } from '@material-ui/icons'
import './OldApp.css'

const accounts = [
  { name: 'Simple' },
  { name: 'Savings Goal' },
  { name: 'Emergency Fund' },
  { name: 'Simple' },
  { name: 'Savings Goal' },
  { name: 'Emergency Fund' },
  { name: 'Simple' },
  { name: 'Savings Goal' },
  { name: 'Emergency Fund' }
]

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'inherit'
  },
  tabContainer: {
    height: '100%'
  },
  fab: {
    position: 'absolute',
    margin: theme.spacing(2),
    bottom: 0,
    right: 0
  },
  card: {
    width: '90%',
    margin: '1rem auto'
  }
}))

export default function OldApp() {
  const classes = useStyles()
  const [value, setValue] = useState(0)
  console.log(accounts)
  return (
    <div className='wrapper'>
      <Paper className={classes.root}>
        <div className='title-bar'></div>
        <div className='main'>
          <div className='main-container'>
            {accounts.map(account => (
              <Card key={account.name} className={classes.card}>
                <CardContent>{account.name}</CardContent>
              </Card>
            ))}
          </div>
          <Fab color='primary' aria-label='add' className={classes.fab}>
            <Add />
          </Fab>
        </div>
        <div className='navigation-bar'>
          <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue)
            }}
            showLabels
            className={classes.root}
          >
            <BottomNavigationAction icon={<AttachMoney />} />
            <BottomNavigationAction icon={<Loop />} />
            <BottomNavigationAction icon={<Equalizer />} />
          </BottomNavigation>
        </div>
      </Paper>
    </div>
  )
}
