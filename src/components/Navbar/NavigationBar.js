import React, { Component } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Activities from '../Activities';
import About from '../About';
import Home from '../Home/Home';
import Parks from '../Parks';
import Park from '../Park';

export default class Navigationbar extends Component {
  render() {
    return (
      <Router>
        <div>
          <>
            <Navbar bg="dark" variant="dark">
              <Container>
                <Navbar.Brand>National Park WebApp</Navbar.Brand>
                <Nav className="me-auto">
                  <Nav.Link as={Link} to={'/home'}>
                    Home
                  </Nav.Link>
                  <Nav.Link as={Link} to={'/activities'}>
                    Activities
                  </Nav.Link>
                  <Nav.Link as={Link} to={'/about'}>
                    About
                  </Nav.Link>
                </Nav>
              </Container>
            </Navbar>
          </>
        </div>
        <div>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/activities">
              <Activities />
            </Route>
            <Route path="/parks/:activityName">
              <Parks state={this.state}></Parks>
            </Route>
            <Route path="/locations/:parkCode">
              <Park state={this.state}></Park>
            </Route>
            <Route path="/">
              <Home></Home>
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
