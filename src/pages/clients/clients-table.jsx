import React, { useState, useEffect } from 'react'

import { Button } from 'react-bootstrap'
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
      Clients table
      <ul>
        {
          clients.map(client => {
            return (
              <li key={client.name}>{client.name}</li>
            )
          })
        }
      </ul>
      <br />
      <Button as={Link} to="/clients/add">Add new client</Button>
    </div>
  )
}

export default ClientsTable