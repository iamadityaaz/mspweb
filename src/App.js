import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from "react-router-dom";
import { Events } from "./components/events";
import { Post } from './components/post';
import { Home } from './components/home'
import { Navbar, Nav, Form, FormControl, } from "react-bootstrap";

function App() {
  return (
    <Router>
      <div>
        <Navbar bg="light" expand="lg" sticky="top">
          <Navbar.Brand ><Link className='nav-link' to="/home" style={{fontSize : '16px'}}>Microsoft Student Partner</Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link ><Link className='nav-link' to="/home">Home</Link></Nav.Link>
              <Nav.Link ><Link className='nav-link' to="/events">Events</Link></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path='/'>
            <Redirect to="/home" />
          </Route>
          <Route exact path="/home" render={(props) => <Home {...props} />} />
          <Route exact path="/events" render={(props) => <Events {...props} />} />
          <Route exact path="/event/:handle" render={(props) => <Post {...props} />} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
