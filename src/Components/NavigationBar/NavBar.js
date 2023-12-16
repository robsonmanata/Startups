/*import "./NavigationBar.css"
import logo15 from "../Svgimages/Group 15.svg"
function Navbar(){
    return (<div className="navbar">
      <img src={logo15} alt="logo"></img>
        <ul>
          <li>Startups</li>
          <li>Contact</li>
          <button>Work with us</button>
        </ul>
    </div>)
}

export default Navbar;*/
import "./NavigationBar.scss"
import logo15 from "../Svgimages/Group 15.svg"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';


function Navbar1() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary,navbar" >
      <Container>
        <Navbar.Brand href="#home"><img
              alt="logo"
              src={logo15}
              className="d-inline-block align-top"
            />{' '}
        
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"  />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Startups</Nav.Link>
            <Nav.Link href="#pricing">Contact</Nav.Link>
            <Button size="md" disabled >
            Work with us
      </Button>{' '}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbar1;