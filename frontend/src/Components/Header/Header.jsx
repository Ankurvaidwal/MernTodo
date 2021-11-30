import React from 'react'
import { Navbar, Form, Nav, NavDropdown, Container, FormControl } from 'react-bootstrap'

const Header = () => {
    return (
        <Navbar bg="primary" expand="lg" variant="dark">
            <Container><Container fluid>
                <Navbar.Brand href="/">MernTODO</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="m-auto">
                        <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                        </Form>
                    </Nav>
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#action1">Notes</Nav.Link>
                        <NavDropdown title="Ankur Vaidwal" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">My profile</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">
                                Logout
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
            </Container>

        </Navbar>
    )
}

export default Header
