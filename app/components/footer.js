import { } from 'react-bootstrap';
import indexStyle from '../styles/index.scss';

const FooterBar = () => (
    <div>
        <style dangerouslySetInnerHTML={{ __html: indexStyle }} />
        <span>© 2023 by ART SCHOOL.</span>
        <span>Tel: 123-456-7890 | Fax: 123-456-7890</span>
    </div>
);

export default FooterBar;
