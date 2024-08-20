import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" className="color-nav" variant="dark" sticky='top'>
      <Container>
        <Navbar.Brand href="#home" className='Navbrand'>NITESH KUMAR SHAH</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#publications">Publications</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#skills">Activities</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="https://drive.google.com/file/d/1MMJmRui4BNsOf1RdDbEPsRxvPoW4ZWj-/view?usp=drive_link" target='_blank'><button>Resume</button> </Nav.Link>
            <Nav.Link href="#contact"><button> Contact</button></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;