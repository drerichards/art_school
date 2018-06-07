import { Button, Jumbotron, FormGroup, FormControl, HelpBlock } from 'react-bootstrap';
import Theme from '../components/Theme';
import indexStyle from '../styles/index.scss';

const FieldGroup = ({ id, help, ...props }) => (
    <FormGroup controlId={id}>
        <FormControl {...props} />
        {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
);


const Contact = () => (
    <Theme>
        <style dangerouslySetInnerHTML={{ __html: indexStyle }} />
        {/* Map */}
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

        {/* Contact form section */}
        <div className="container">
            <h3>GET IN TOUCH</h3>
            <section>
                <h4 className="bold">To enroll or for any general information, please contact us:</h4>
                <br />
                <span>
                    <h4 className="bold">Telephone: </h4>
                    <h4>123-456-7890 </h4>
                </span>
                <span>
                    <h4 className="bold">• Email: </h4>
                    <h4>info@mysite.com</h4>
                </span>
                <div>
                    <h4 className="bold">Address: </h4>
                    <h4>500 Terry Francois St, San Francisco, CA 94158</h4>
                </div>
            </section>

            {/* Contact form section */}
            <form>
                <FieldGroup
                    id="formControlsText"
                    type="text"
                    placeholder="Name *"
                />
                <FieldGroup
                    id="formControlsEmail"
                    type="email"
                    placeholder="Email *"
                />
                <FieldGroup
                    id="formControlsText"
                    type="text"
                    placeholder="Subject"
                />
                <FormGroup controlId="formControlsTextarea">
                    <FormControl componentClass="textarea" placeholder="Message" />
                </FormGroup>
                <Button type="submit">Submit</Button>
            </form>
        </div>
    </Theme>
);

export default Contact;
