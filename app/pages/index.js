import Theme from '../components/Theme';
import Nav from './nav';
import indexStyle from '../styles/index.scss';

const Index = () => (
    <Theme>
        <style dangerouslySetInnerHTML={{ __html: indexStyle }} />
        <Nav />
        <div className="img-container">
            <img alt="" src="/icons/github.png" />
        </div>


        {/* Styling using styled-jsx. */}
        <style jsx>{`
              .btn {
                display: flex;
                justify-content: center;
              }`
        }
        </style>
    </Theme>
);

export default Index;
