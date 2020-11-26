import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function Footer() {
  return (
    <footer>
      <Navbar bg='dark' variant='dark' expand='sm' className="justify-content-center">
        <Nav>
          <Nav.Link href='https://www.theodinproject.com' target='_blank'>The Odin Project</Nav.Link>
          <Nav.Link href='https://github.com/joan-kii?tab=repositories' target='_blank'>joankii's Github</Nav.Link>
        </Nav>
      </Navbar>
    </footer>
  )
}

export default Footer;