import React, { useState } from 'react'
import { app } from '../../firebase/fb'

const db = app.firestore()

const AddClient = () => {

  const [name, setName] = useState("")

  return (
    <div>
      Add Client
      <input value={name} onChange={(e) => setName(e.target.value)} type="text" />
      <button onClick={() => {
        if (!name) {
          return
        }
        db.collection('clients').doc(name).set({
          name: name
        })
        setName("")
      }
      }>Save</button>
    </div>
  )
}

export default AddClient
