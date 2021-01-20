import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Login from './login'
import Register from './register'
import { NotFound } from '../../pages'

const LoginMain = () => {
  return (
    <div>
      <Switch>
        <Route path="/auth/register" component={Register} />
        <Route path="/auth" exact component={Login} />
        <Route component={NotFound} />
      </Switch>
    </div>
  )
}

export default LoginMain
