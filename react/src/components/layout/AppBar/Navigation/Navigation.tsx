import React, { useContext } from 'react'
import { Paper, Tabs, Tab } from '@material-ui/core'
import { NavContext, NavContextType } from '../../../../context/navContext'

const navRoutes = ['activity', 'goals', 'expenses']

export default function Navigation() {
  const { route, changeRoute } = useContext(NavContext) as NavContextType

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    changeRoute(navRoutes[newValue])
  }

  const a11yProps = (index: string) => ({
    id: `tab-${index}`,
    'aria-controls': `tabpanel-${index}`
  })

  return (
    <Paper square>
      <Tabs
        value={navRoutes.indexOf(route)}
        onChange={handleChange}
        indicatorColor='primary'
        textColor='primary'
        centered
      >
        <Tab label={navRoutes[0]} {...a11yProps(navRoutes[0])} />
        <Tab label={navRoutes[1]} {...a11yProps(navRoutes[1])} />
        <Tab label={navRoutes[2]} {...a11yProps(navRoutes[2])} />
      </Tabs>
    </Paper>
  )
}
