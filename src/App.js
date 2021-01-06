import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import { Children } from './components/children';
import { Women } from './components/women';
import { Men } from './components/men';
//browserRouter will now be known as Router
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Read } from './components/read';
import { addClothing } from './components/addClothing';
import { Update } from './components/update';
import { Home } from './components/home';

//navbar
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="/home">Home</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/mensPage">Men</Nav.Link>
              <Nav.Link href="/womenPage">Women</Nav.Link>
              <Nav.Link href="/childrenPage">Children</Nav.Link>
              <Nav.Link href="/addClothing">Add To Basket</Nav.Link>
              <Nav.Link href="/shoppingPage">Shopping Basket</Nav.Link>
            </Nav>

            {/*time and date to be shown every page */}
            {new Date().toLocaleTimeString('en-GB')}
                / {new Date().toLocaleDateString()}
            {/* <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-light">Search</Button>
    </Form> */}
          </Navbar>
          {/*NavBar links*/}
          <Switch>
            <Route path='/home' component={Home} />
            <Route path='/shoppingPage' component={Read} />
            <Route path='/update/:id' component={Update} />
            <Route path='/mensPage' component={Men} exact />
            <Route path='/womenPage' component={Women} exact />
            <Route path='/childrenPage' component={Children} exact />
            <Route path='/addClothing' component={addClothing}>
            </Route>

          </Switch>


        </div>
      </Router>
    );
  }
}
export default App;
