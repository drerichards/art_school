import Theme from '../components/Theme';
import { Button, Jumbotron} from 'react-bootstrap';
import indexStyle from '../styles/index.scss';

const Courses = () => (
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
            <section>
                <aside>
                    <div className="date">
                        <div>14</div>
                        <div>March</div>
                    </div>
                    <div className="course-dates">
                        <div>
                            <span className="bold">Dates: </span>
                            <span>14/03 - 05/04</span>
                        </div>
                        <div>
                            <span className="bold">Total Duration: </span>
                            <span>14/03 - 05/04</span></div>
                        <div>Enroll >></div>
                    </div>
                </aside>
                <main>
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
                </main>
            </section>
        </div>
    </Theme>
);

export default Courses