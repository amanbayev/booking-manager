import React from 'react'

import { Row, Col, Button, Card, Form, InputGroup, FormControl, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <Row className="justify-content-md-center">
      <Col md="auto">
        <Card style={{ width: '28rem' }}>
          <Card.Header>
            Login
            </Card.Header>
          <Card.Body>
            <center>
              <Image
                style={{ width: '25rem' }}
                src="https://www.independentcottages.co.uk/holiday-blog/wp-content/uploads/2019/04/online-booking1-1-1024x680.jpg" />
            </center>
            <Card.Text>
              If you need to create a new account, please click <Link to="/auth/register">Register</Link>.
            </Card.Text>

            <Form onSubmit={(e) => { e.preventDefault(); }}>
              <InputGroup className="mb-2 mr-sm-2">
                <InputGroup.Prepend>
                  <InputGroup.Text>Login</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl type="text" placeholder="Username" />
              </InputGroup>
              <InputGroup className="mb-2 mr-sm-2">
                <InputGroup.Prepend>
                  <InputGroup.Text>Password</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl type="password" placeholder="Password" />
              </InputGroup>
              <Button type="submit">Login</Button>
            </Form>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  )
}

export default Login
