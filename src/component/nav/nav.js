import { Link } from 'react-router-dom';
import { Navbar,Container,Nav } from 'react-bootstrap';
import "./nav.css";

import src from '../../../package.json';

function Navbarr(){
    return(
        <div className='nav'>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Shop By Categories</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link to={src.homepage}>Home</Link>
                        <Link to={src.homepage + "about"}>ABOUT US</Link>
                        <Link to={src.homepage + "delivery"}>DELIVERY</Link>
                        <Link to={src.homepage + "blog"}>BLOG</Link>
                        <Link to={src.homepage + "featured"}>FEATURED</Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default Navbarr;