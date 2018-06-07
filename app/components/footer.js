import Theme from '../components/Theme';
import { Button, Jumbotron } from 'react-bootstrap';
import indexStyle from '../styles/index.scss';

const FooterBar = () => (
    <Theme>
        <style dangerouslySetInnerHTML={{ __html: indexStyle }} />
        {/* Hero */}
        <div>
            <span>© 2023 by ART SCHOOL.</span>
            <span>Tel: 123-456-7890 | Fax: 123-456-7890</span>
        </div>
    </Theme>
);

export default FooterBar