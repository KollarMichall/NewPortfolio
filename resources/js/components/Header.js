import React from 'react'
import logo from './img/logo 1.png'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
const Header = () => {
  const pathname = window.location.pathname
    return (
        <div className="header">
          <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
            <Navbar.Brand href="/"><img src={logo}></img></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-center">
              <Nav activeKey={pathname}>
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/blog">Blog</Nav.Link>
                <Nav.Link href="/portfolio">Portfolio</Nav.Link>
                <Nav.Link href="/contact">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
           
        </div>
    )
}

export default Header
