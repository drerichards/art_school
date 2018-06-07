import Theme from '../components/Theme';
import { Button, Jumbotron} from 'react-bootstrap';
import indexStyle from '../styles/index.scss';

const About = () => (
    <Theme>
        <style dangerouslySetInnerHTML={{ __html: indexStyle }} />
        {/* Hero */}
        <Jumbotron>
            <h1>Hello, world!</h1>
            <p>
                This is a simple hero unit, a simple jumbotron-style component for calling
                extra attention to featured content or information.
            </p>
            <p>
                <Button bsStyle="primary">Learn more</Button>
            </p>
        </Jumbotron>
        <div className="container">
            <h3>OUR SCHOOL</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type 
                specimen book. 
            </p>
            <br />
            <p>
                It has survived not only five centuries, but also the leap into 
                electronic typesetting, remaining essentially unchanged. It was popularised in 
                the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                and more recently with desktop publishing software like Aldus PageMaker including 
                versions of Lorem Ipsum.
            </p>
            <br />
            <p>
                It is a long established fact that a reader will be distracted by the readable content 
                of a page when looking at its layout. The point of using Lorem Ipsum is that it has a 
                more-or-less normal distribution of letters, as opposed to using 'Content here, content 
                here', making it look like readable English. Many desktop publishing packages and web page
                editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' 
                will uncover many web sites still in their infancy.
            </p>
        </div>
    </Theme>
);

export default About;
