import Link from 'next/link';
import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

const Navigation = () => (
    <Navbar inverse collapseOnSelect>
        <Navbar.Header>
            <Navbar.Brand>
                <a href="#brand">ART SCHOOL.</a>
            </Navbar.Brand>
            <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
            <Nav pullRight>
                <NavItem eventKey={1} href="#">
                    <span>
                        <Link href="/">
                            <p>Home</p>
                        </Link>
                    </span>
                </NavItem>
                <NavItem eventKey={2} href="#">
                    <span>
                        <Link href="/about">
                            <p>About</p>
                        </Link>
                    </span>
                </NavItem>
                <NavItem eventKey={3} href="#">
                    <span>
                        <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                            <MenuItem eventKey={3.1}>
                                <Link href="/courses">
                                    <p>Fine Art</p>
                                </Link>
                            </MenuItem>
                            <MenuItem eventKey={3.2}>
                                <Link href="/courses">
                                    <p>Graphic Design</p>
                                </Link>
                            </MenuItem>
                            <MenuItem eventKey={3.3}>
                                <Link href="/courses">
                                    <p>Graffiti</p>
                                </Link>
                            </MenuItem>
                            <MenuItem eventKey={3.4}>
                                <Link href="/courses">
                                    <p>Illustration</p>
                                </Link>
                            </MenuItem>
                        </NavDropdown>
                       
                    </span>
                </NavItem>
                <NavItem eventKey={4} href="#">
                    <span>
                        <Link href="/contact">
                            <p>Contact</p>
                        </Link>
                    </span>
                </NavItem>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
);

export default Navigation;