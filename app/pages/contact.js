import { Button, Jumbotron, FormGroup, FormControl, HelpBlock } from 'react-bootstrap';
import Theme from '../components/Theme';
import indexStyle from '../styles/index.scss';
import contactStyle from '../styles/scss/contact.scss';

const FieldGroup = ({ id, help, ...props }) => (
    <FormGroup controlId={id}>
        <FormControl {...props} />
        {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
);


const Contact = () => (
    <Theme>
        <style dangerouslySetInnerHTML={{ __html: indexStyle }} />
        <style dangerouslySetInnerHTML={{ __html: contactStyle }} />
        {/* Map */}
        <Jumbotron className="contact-jumbo" />
        {/* Contact form section */}
        <div className="container contact-container">
            <h3>GET IN TOUCH</h3>
            <p className="btm-border" />
            <section>
                <h5 className="bold-only">To enroll or for any general information, please contact us:</h5>
                <br />
                <span>
                    <h5 className="bold-only">Telephone: </h5>
                    <p>123-456-7890 </p>
                </span>
                <span>
                    <h5 className="bold-only"> • Email: </h5>
                    <p>info@mysite.com</p>
                </span>
                <div>
                    <h5 className="bold-only">Address: </h5>
                    <p>500 Terry Francois St, San Francisco, CA 94158</p>
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
                <Button type="submit">Send >></Button>
            </form>
        </div>
    </Theme>
);

export default Contact;
