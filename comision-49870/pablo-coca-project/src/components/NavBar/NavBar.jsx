import { CartWidget } from "../CartWidget/CartWidget"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, NavLink } from "react-router-dom";


export const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand >
          <Link className="btn" to="/">
            Super Store
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavLink className={({isActive}) => isActive ? "btn btn-dark" : "btn"} to="/">Inicio</NavLink>
                        
            <NavLink className={({isActive}) => isActive ? "btn btn-dark" : "btn"} to="/categoria/capas">Capas</NavLink>
            
            <NavLink className={({isActive}) => isActive ? "btn btn-dark" : "btn"} to="/categoria/vehiculos">Vehículos</NavLink>
            <NavLink className={({isActive}) => isActive ? "btn btn-dark" : "btn"} to="/categoria/guaridas">Guaridas</NavLink>
            <NavLink className={({isActive}) => isActive ? "btn btn-dark" : "btn"} to="/categoria/superarmas">Super Armas</NavLink>
            
          </Nav>
          <Nav>
            
            <Nav.Link eventKey={2} href="">
              <Link className="btn" to="/">
              <CartWidget />
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
