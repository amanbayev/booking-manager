import React from 'react'

import ClientsTable from './clients-table'
import AddClient from './clients-add'
import { NotFound } from '../../pages'

import { Route, Switch } from 'react-router-dom'

const Clients = () => {
  return (
    <Switch>
      <Route path="/clients" exact component={ClientsTable} />
      <Route path="/clients/add" component={AddClient} />
      <Route component={NotFound} />
    </Switch>
  )
}

export default Clients
