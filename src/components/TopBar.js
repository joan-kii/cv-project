import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function TopBar() {
  return (
    <header>
      <Navbar bg='dark' variant='dark' expand='sm' className='justify-content-between w-100'>
        <Navbar.Brand href='#home'>Inicio</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav'/>
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ml-auto'>
            <Nav.Link href='#personal'>Personal</Nav.Link>
            <Nav.Link href='#education'>Formación</Nav.Link>
            <Nav.Link href='#career'>Profesional</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>  
    </header>
  )
}

export default TopBar