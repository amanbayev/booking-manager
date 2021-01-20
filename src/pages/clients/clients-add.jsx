import React, { useState } from 'react'
import { app } from '../../firebase/fb'
import { useHistory } from 'react-router-dom'
import { Button, Form, Card } from 'react-bootstrap'

import Swal from 'sweetalert2'

const db = app.firestore()

const AddClient = () => {

  const [name, setName] = useState("")
  const [lastName, setLastName] = useState("")
  let history = useHistory();

  return (
    <Card style={{ width: '18rem', margin: '0 auto' }}>
      <Card.Header>
        Add new client
      </Card.Header>
      <Card.Body>
        <Form onSubmit={(e) => {
          e.preventDefault();
          if (!name) {
            Swal.fire({
              title: 'Name cannot be null!',
              text: 'Please enter valid name',
              icon: 'warning',
              confirmButtonText: 'OK'
            })
            return
          }
          if (!lastName) {
            Swal.fire({
              title: 'Last name cannot be null!',
              text: 'Please enter valid last name',
              icon: 'warning',
              confirmButtonText: 'OK'
            })
            return
          }
          db.collection('clients').doc(name).set({
            name,
            lastName
          })
          Swal.fire({
            title: 'Client added!',
            text: `New client ${name} ${lastName} has been successfully added!`,
            icon: 'success',
            confirmButtonText: 'OK'
          })
          setName("")
          setLastName("")
          history.push("/clients")
        }
        }>
          <Form.Group>
            <Form.Label>
              First name
            </Form.Label>
            <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Last name</Form.Label>
            <Form.Control type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
          </Form.Group>
          <Button type="submit" >Save</Button>
        </Form>
      </Card.Body>
    </Card>
  )
}

export default AddClient
