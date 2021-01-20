import React, { useState, useEffect } from 'react'

import { Button, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { app } from '../../firebase/fb'

const db = app.firestore()

const ClientsTable = () => {
  const [clients, setClients] = useState([])

  useEffect(() => {
    let isMounted = true;
    db.collection('clients').onSnapshot((snapshot) => {
      const tempClients = []
      snapshot.forEach(doc => {
        tempClients.push(doc.data())
      })
      if (isMounted) setClients(tempClients)
    })
    return () => { isMounted = false }
  }, [])

  return (
    <div>
      <div className="my-font-bebas">Clients table</div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            clients.map((client, index) => {
              return (
                <tr key={client.name}>
                  <td>
                    {index + 1}
                  </td>
                  <td>
                    {client.name}
                  </td>
                  <td>
                    {client.lastName ? client.lastName : <p style={{ color: 'darkred' }}>No last name given.</p>}
                  </td>
                  <td>
                    <Button onClick={e => {
                      db.collection('clients').doc(client.name).delete()
                    }} variant="outline-danger"><i className="fa fa-trash-o" /> Delete</Button>
                  </td>
                </tr>
              )
            })
          }

        </tbody>
      </Table>
      <Button as={Link} to="/clients/add">Add new client</Button>
    </div>
  )
}

export default ClientsTable