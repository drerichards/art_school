import Link from 'next/link';
import { Nav, Navbar, NavItem } from 'react-bootstrap';

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
                        <Link href="/courses">
                            <p>Courses</p>
                        </Link>
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