import footerStyle from '../styles/scss/footer.scss';

const FooterBar = () => (
    <div className="footer">
        {/* css */}
        <style dangerouslySetInnerHTML={{ __html: footerStyle }} />
        {/* html */}
        <span>© 2023 by ART SCHOOL.</span>
        <span>Tel: 123-456-7890 | Fax: 123-456-7890</span>
    </div>
);

export default FooterBar;
