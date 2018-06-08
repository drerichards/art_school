import Theme from '../components/Theme';
import { Jumbotron } from 'react-bootstrap';
import indexStyle from '../styles/index.scss';
import coursesStyle from '../styles/scss/courses.scss';

const Graffiti = () => (
    <Theme>
        <style dangerouslySetInnerHTML={{ __html: indexStyle }} />
        <style dangerouslySetInnerHTML={{ __html: coursesStyle }} />
        {/* Hero */}
        <Jumbotron className="graffiti-jumbo" />

        {/* Course section */}
        <div className="container courses-container">
            <h3>Graffiti</h3>
            <p className="btm-border" />
            <section>
                <aside>
                    <div className="date">
                        <h1>09</h1>
                        <h5>April</h5>
                    </div>
                    <div className="course-dates">
                        <div>
                            <span className="bold">Dates: </span>
                            <span>09/04 - 05/05</span>
                        </div>
                        <div>
                            <span className="bold">Total Duration: </span>
                            <span>48h</span>
                            <div>Sundays, 08:00am - 12:00pm</div>
                        </div>
                        <a href="#">Enroll >></a>
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

export default Graffiti;
