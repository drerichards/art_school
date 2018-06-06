import Link from 'next/link';
import { Button } from 'react-bootstrap';
const Nav = () => (
    <span>
        <Link href="/about">
            <Button bsStyle="primary">Click Me</Button>
        </Link>
    </span>
);

export default Nav;