import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import { Children } from './components/children';
import { Women } from './components/women';
import { Men } from './components/men';
import { ShoppingCart} from './components/shoppingcart';
//browserRouter will now be known as Router
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Read } from './components/read';
import { CreateAccount } from './components/createAccount';
import { AccountInfo } from './components/accountInfo';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="#home">Home</Navbar.Brand>
            <Nav className="mr-auto">
            <Nav.Link href="/shoppingPage">Clothes</Nav.Link>
              <Nav.Link href="/mensPage">Men</Nav.Link>
              <Nav.Link href="/womenPage">Women</Nav.Link>
              <Nav.Link href="/childrenPage">Children</Nav.Link>
              <Nav.Link href="/createPage">Create Account</Nav.Link>
              <Nav.Link href="/accountPage">My Account</Nav.Link>


            </Nav>
           {new Date().toLocaleTimeString('en-GB')}
                / {new Date().toLocaleDateString()}
            {/* <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-light">Search</Button>
    </Form> */}
          </Navbar>
          <Switch>
          <Route path='/shoppingPage' component={Read} exact />
            <Route path='/mensPage' component={Men} exact />
            <Route path='/womenPage' component={Women} exact />
            <Route path='/childrenPage' component={Children} exact />
            <Route path='/createPage' component={CreateAccount} exact />
            <Route path='/accountPage' component={AccountInfo} exact/>
          </Switch>


        </div>
      </Router>
    );
  }
}
export default App;
