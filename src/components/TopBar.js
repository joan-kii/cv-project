import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function TopBar() {
  return (
    <header>
      <Navbar>
        <Navbar.Brand href='#home'>Inicio</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className='justify-content-end'>
          <Nav className='mr-auto'>
            <Nav.Link href='#personal'>Personal</Nav.Link>
            <Nav.Link href='#formacion'>Formación</Nav.Link>
            <Nav.Link href='#profesional'>Profesional</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>  
    </header>
  )
}

export default TopBar