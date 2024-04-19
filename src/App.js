import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Opia</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Create Your Account</Nav.Link>
            <Nav.Link href="#link">Pricing</Nav.Link>
            <NavDropdown
              title="Fequently Asked Questions"
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="#action/3.1">
                Presale Info
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Buying Guide
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Wallet Support
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Roadmap and Timeline
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default App;
