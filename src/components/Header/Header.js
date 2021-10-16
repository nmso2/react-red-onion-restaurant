import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import headerLogo from '../../resources/logo2.png'

const Header = () => {

    const { user, logOut, loggedIn} = useAuth();

    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" variant="light" sticky="top" bg="white" style={{ position: "sticky", top: 0 }}>
                <Container>
                    <Navbar.Brand as={Link} to="/"><img src={headerLogo} style={{ width: '10rem' }} alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto align-items-center">
                            <Nav.Link className="p-0 px-5" href="#cart"><Link className="text-decoration-none nav-link" to="/cart">{cartIcon}</Link></Nav.Link>

                            {
                                !loggedIn ? <Nav.Link className="p-0" href="#login"><Link className="text-decoration-none nav-link" to="/login">Login</Link></Nav.Link> : user.displayName

                            }
                            {
                                !loggedIn ? <Nav.Link eventKey={2} className="p-0" href="#signup"><Link className="text-decoration-none nav-link" to="/signup"><Button className="rounded-pill" style={{ background: "crimson", border: "none", padding: "7px 25px" }}>Sign Up</Button></Link></Nav.Link> :
                                    <Nav.Link eventKey={2} className="p-0 px-2" href="#signout">
                                        <Button className="rounded-pill" style={{ background: "crimson", border: "none", padding: "7px 25px" }} onClick={logOut}>Sign Out</Button>
                                    </Nav.Link>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;