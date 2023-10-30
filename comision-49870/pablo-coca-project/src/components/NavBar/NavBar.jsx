import { CartWidget } from "../CartWidget/CartWidget"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


export const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Super Store</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#capas">Capas</Nav.Link>
            <Nav.Link href="#vehiculos">Vehículos</Nav.Link>
            <Nav.Link href="#guaridas">Guaridas</Nav.Link>
            <Nav.Link href="#superarmas">Super Armas</Nav.Link>
            
          </Nav>
          <Nav>
            
            <Nav.Link eventKey={2} href="#supercarrito">
              <CartWidget />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
