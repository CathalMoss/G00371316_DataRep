import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import { Collections } from './components/collections';
import { Children } from './components/children';
import { Women } from './components/women';
import { Men } from './components/men';
//browserRouter will now be known as Router
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="#home">Home</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/mensPage">Men</Nav.Link>
              <Nav.Link href="/womenPage">Women</Nav.Link>
              <Nav.Link href="/childrenPage">Children</Nav.Link>
              <Nav.Link href="/collectionsPage">Collections </Nav.Link>
            </Nav>
            {/* <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-light">Search</Button>
    </Form> */}
          </Navbar>
          <Switch>
            <Route path='/mensPage' component={Men} exact />
            <Route path='/womenPage' component={Women} exact />
            <Route path='/childrenPage' component={Children} exact />
            <Route path='/collectionsPage' component={Collections} exact />
          </Switch>


        </div>
      </Router>
    );
  }
}
export default App;
