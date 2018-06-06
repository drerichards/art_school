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
    'Nam vestibulum accumsan nisl.'
  ]

const Index = () => (
    <Theme>
        <style dangerouslySetInnerHTML={{ __html: indexStyle }} />
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
    </Theme>
);

export default Index;
