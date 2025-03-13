import { Link, NavLink } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';

function Header() {
  return (
    <header>
      <Navbar bg="light" expand="lg" className="py-3 shadow-sm">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <span className="fw-bold text-primary">Dev Portfolio</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link 
                as={NavLink} 
                to="/"
                className={({ isActive }) => isActive ? 'active fw-bold' : ''}
                end
              >
                Home
              </Nav.Link>
              <Nav.Link 
                as={NavLink} 
                to="/about"
                className={({ isActive }) => isActive ? 'active fw-bold' : ''}
              >
                About
              </Nav.Link>
              <Nav.Link 
                as={NavLink} 
                to="/projects"
                className={({ isActive }) => isActive ? 'active fw-bold' : ''}
              >
                Projects
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;