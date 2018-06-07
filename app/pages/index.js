import { Button, Jumbotron, Grid, Row, Col, Glyphicon } from 'react-bootstrap';
import Theme from '../components/Theme';
import indexStyle from '../styles/index.scss';
import homeStyle from '../styles/scss/home.scss';

const dummyText = "I'm a paragraph. Click here to add your own text and edit me.";
const dummyLink = 'Read More >>';
const dummyWords = [
    ['F', 'Fine Art'],
    ['G', 'Graphic Design'],
    ['G', 'Graffiti'],
    ['I', 'Illustration']
];

const filenames = [
    ['head', 'paint', 'poster'],
    ['leaf', 'deer', 'ladies'],
    ['flower', 'melon', 'table'],
    ['ace', 'clip', 'horn']
];

const imageGenerator = index => {
    const columnImages = [];
    filenames[index].map(name => {
        const imgTag = (
            <div
                key={name}
                alt={name}
                style={{ backgroundImage: `url("https://res.cloudinary.com/andrerichards/image/upload/v1528382161/artschool/${name}.png")` }}
            />
        );
        columnImages.push(imgTag);
    });
    return columnImages;
};

const columnGenerator = () => {
    const columns = [];
    for (let i = 0; i < 4; i++) {
        columns.push(
            <Col sm={6} md={3}>
                <br />
                <div className="img-column">
                    {imageGenerator(i)}
                </div>
            </Col>);
    }
    return columns;
};

const Index = () => (
    <Theme>
        <style dangerouslySetInnerHTML={{ __html: indexStyle }} />
        <style dangerouslySetInnerHTML={{ __html: homeStyle }} />
        {/* Top Jumbotron */}
        <Jumbotron className="home-jumbo">
            <main>
                <h1>CRE</h1>
                <h1>ATIV</h1>
                <h1>ITY.</h1>
                <Button className="chevron" bsSize="large">
                    <Glyphicon glyph="chevron-down" />
                </Button>
            </main>
        </Jumbotron>

        {/* Courses section */}
        <div className="container home-course-container">
            <h3>OUR COURSES</h3>
            <p className="btm-border" />
            <Grid>
                <Row className="show-grid">
                    { dummyWords.map(word => { 
                        return (
                            <Col className="home-course-columns" sm={6} md={3}>
                                <br />
                                <h1>{word[0]}</h1>
                                <h5>{word[1]}</h5>
                                <p>{dummyText}</p>
                                <br />
                                <a href="#">{dummyLink}</a>
                            </Col>
                        );
                    })}
                </Row>
            </Grid>
        </div>

        {/* Image gallery */}
        <div className="container home-image-container">
            <Grid>
                <Row className="show-grid">
                    {columnGenerator()}
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
                    </Col>
                    <Col sm={6} md={3}>
                        <br />
                    </Col>
                    <Col sm={6} md={3}>
                        <br />
                    </Col>
                    <Col sm={6} md={3}>
                        <br />
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
