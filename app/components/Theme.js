import PropTypes from 'prop-types';
import BootstrapStyle from '../styles/vendor/bootstrap.min.css';
import Navigation from './navigation';
import FooterBar from './footer';

const Theme = ({ children }) => (
    <div>
        <style dangerouslySetInnerHTML={{ __html: BootstrapStyle }} />
        <Navigation />
        {children}
        <FooterBar />
    </div>
);

Theme.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.element),
        PropTypes.element
    ]).isRequired,
};

export default Theme;
