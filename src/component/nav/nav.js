import { Link } from 'react-router-dom';
import { Navbar,Container,Nav } from 'react-bootstrap';
import "./nav.css";

function Navbarr(){
    return(
        <div className='nav'>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Shop By Categories</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link to="home">Home</Link>
                        <Link to="about">ABOUT US</Link>
                        <Link to="delivery">DELIVERY</Link>
                        <Link to="blog">BLOG</Link>
                        <Link to="featured">FEATURED</Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default Navbarr;