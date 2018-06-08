import { Button, Jumbotron, Grid, Row, Col, Glyphicon } from 'react-bootstrap';
import Theme from '../components/Theme';
import indexStyle from '../styles/index.scss';
import homeStyle from '../styles/scss/home.scss';

const dummyText = "I'm a paragraph. Click here to add your own text and edit me.";
const dummyLink = 'Read More >>';
const dummyWords1 = [
    ['F', 'Fine Art'],
    ['G', 'Graphic Design'],
    ['G', 'Graffiti'],
    ['I', 'Illustration']
];

const dummyWords2 = [
    ['14', 'March'],
    ['26', 'March'],
    ['09', 'April'],
    ['15', 'April']
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

const scrollToDiv = () => {
    const homeCourse = document.getElementById('home-course');
    homeCourse.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
                <Button className="chevron" bsSize="large" onClick={() => scrollToDiv()} >
                    <Glyphicon glyph="chevron-down" />
                </Button>
            </main>
        </Jumbotron>

        {/* Courses section */}
        <div id="home-course" className="container home-course-container">
            <h3>OUR COURSES</h3>
            <p className="btm-border" />
            <Grid>
                <Row className="show-grid">
                    { dummyWords1.map(word => { 
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
        <div className="container next-course-container">
            <h3>NEXT COURSES</h3>
            <p className="btm-border" />
            <Grid>
                <Row className="show-grid">
                    { dummyWords2.map(word => { 
                        return (
                            <Col className="next-course-columns" sm={6} md={3}>
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

        {/* Bottom Jumbotron */}
        <Jumbotron className="home-btm-jumbo">
            <div className="container">
                <h1>IDENTITY</h1>
                <h4>CONQUER YOUR OWN STYLE</h4>
                <p>
                    <Button>Read More >></Button>
                </p>
            </div>
        </Jumbotron>
    </Theme>
);

export default Index;
