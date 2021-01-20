import React from 'react'

import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div>
      Login comp
      <Button as={Link} to="/auth/register">Register</Button>
    </div>
  )
}

export default Login
