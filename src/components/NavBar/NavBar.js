import "./NavBar.css";
import { CartWidget } from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

export const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container className="container">
        <Navbar.Brand className="navbar-brand">
          <Link to="/">Logo</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav>
              <Link to="/">Inicio</Link>
            </Nav>
            <NavDropdown title="Productos" id="collasible-nav-dropdown">
              <NavDropdown.Item>
                <Link to="/productos/Cerveza">Cerveza</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/productos/Whisky">Whisky</Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav>
              <Link to="cart">
                <CartWidget />
              </Link>
            </Nav>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
