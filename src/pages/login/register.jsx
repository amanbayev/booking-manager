import React from 'react'


import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div>
      Register comp
      <Button as={Link} to="/auth">Login</Button>
    </div>
  )
}

export default Register
