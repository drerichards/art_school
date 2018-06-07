import Theme from '../components/Theme';
import { Button, Jumbotron, Grid, Row, Col } from 'react-bootstrap';
import indexStyle from '../styles/index.scss';

const dummySentences = [
    'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    'Donec hendrerit tempor tellus.',
    'Donec pretium posuere tellus.',
    'Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus.',
    'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    'Nulla posuere.',
    'Donec vitae dolor.',
    'Nullam tristique diam non turpis.',
    'Cras placerat accumsan nulla.',
    'Nullam rutrum.',
    'Nam vestibulum accumsan nisl.']

const Index = () => (
    <Theme>
        <style dangerouslySetInnerHTML={{ __html: indexStyle }} />
        {/* Top Jumbotron */}
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

        {/* Courses section */}
        <div className="container">
            <h3>OUR COURSES</h3>
            <Grid>
                <Row className="show-grid">
                    <Col sm={6} md={3}>
                        <br />
                        {dummySentences.slice(0, 3).join(' ')}
                    </Col>
                    <Col sm={6} md={3}>
                        <br />
                        {dummySentences.slice(0, 3).join(' ')}
                    </Col>
                    <Col sm={6} md={3}>
                        <br />
                        {dummySentences.slice(0, 3).join(' ')}
                    </Col>
                    <Col sm={6} md={3}>
                        <br />
                        {dummySentences.slice(0, 3).join(' ')}
                    </Col>
                </Row>
            </Grid>
        </div>

        {/* Image gallery */}
        <div className="container">
            <Grid>
                <Row className="show-grid">
                    <Col sm={6} md={3}>
                        <br />
                        <div className="img-container">
                            <img alt="" src="/icons/github.png" />
                            <img alt="" src="/icons/github.png" />
                            <img alt="" src="/icons/github.png" />
                            <img alt="" src="/icons/github.png" />
                        </div>
                    </Col>
                    <Col sm={6} md={3}>
                        <br />
                        <div className="img-container">
                            <img alt="" src="/icons/github.png" />
                            <img alt="" src="/icons/github.png" />
                            <img alt="" src="/icons/github.png" />
                            <img alt="" src="/icons/github.png" />
                        </div>
                    </Col>
                    <Col sm={6} md={3}>
                        <br />
                        <div className="img-container">
                            <img alt="" src="/icons/github.png" />
                            <img alt="" src="/icons/github.png" />
                            <img alt="" src="/icons/github.png" />
                            <img alt="" src="/icons/github.png" />
                        </div>
                    </Col>
                    <Col sm={6} md={3}>
                        <br />
                        <div className="img-container">
                            <img alt="" src="/icons/github.png" />
                            <img alt="" src="/icons/github.png" />
                            <img alt="" src="/icons/github.png" />
                            <img alt="" src="/icons/github.png" />
                        </div>
                    </Col>
                </Row>
            </Grid>
        </div>

        {/* Next Courses */}
        <div className="container">
            <h3>NEXT COURSES</h3>
            <Grid>
                <Row className="show-grid">
                    <Col sm={6} md={3}>
                        <br />
                        {dummySentences.slice(0, 3).join(' ')}
                    </Col>
                    <Col sm={6} md={3}>
                        <br />
                        {dummySentences.slice(0, 3).join(' ')}
                    </Col>
                    <Col sm={6} md={3}>
                        <br />
                        {dummySentences.slice(0, 3).join(' ')}
                    </Col>
                    <Col sm={6} md={3}>
                        <br />
                        {dummySentences.slice(0, 3).join(' ')}
                    </Col>
                </Row>
            </Grid>
        </div>

        {/* Bottom Jumbotron */}
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
    </Theme>
);

export default Index;
