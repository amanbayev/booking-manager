import React from 'react'

import { Image, Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

const NotFound = () => {
  let history = useHistory();
  return (
    <div>
      <center>
        <h1 style={{ color: '#007BFF' }}>You seem lost.</h1>
        <h5>Oops! The page that you are trying to reach does not exist.</h5>
        <Image src="/img/travolta.gif" />
        <br />
        <Button style={{ marginTop: '16px' }} onClick={(e) => history.push("/")}>Go to main page</Button>
      </center>

    </div>
  )
}

export default NotFound
