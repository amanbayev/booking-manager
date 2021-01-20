import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Navbar from './components/navbar'
import { Container } from 'react-bootstrap'
import { HomePage, Bookings, NotFound, Clients, Login } from './pages'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Container style={{ marginTop: '16px' }}>
          <Switch>
            <Route path="/bookings" component={Bookings} />
            <Route path="/clients" component={Clients} />
            <Route path="/auth" component={Login} />
            <Route path="/" component={HomePage} exact />
            <Route component={NotFound} />
          </Switch>
        </Container>
      </Router>
    </div>
  );
}

export default App;
