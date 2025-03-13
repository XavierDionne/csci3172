import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <Container>
      <Row className="py-5 align-items-center">
        <Col lg={6} className="mb-5 mb-lg-0">
          <h1 className="display-4 fw-bold mb-4">Hi, I'm Xavier</h1>
          <h2 className="h3 mb-4 text-secondary">Software Developer</h2>
          <p className="lead mb-4">
            I create a wide range of applications using industry popular technologies.
          </p>
          <div className="d-flex gap-3">
            <Button 
              as={Link} 
              to="/projects" 
              variant="primary" 
              size="lg"
              className="custom-btn"
            >
              View My Work
            </Button>
            <Button 
              as={Link} 
              to="/about" 
              variant="outline-primary" 
              size="lg"
            >
              About Me
            </Button>
          </div>
        </Col>
      </Row>

      <Row className="py-5">
        <Col className="text-center mb-5">
          <h2 className="section-title text-center">What I Do</h2>
        </Col>
      </Row>

      <Row className="g-4 mb-5">
        <Col md={4}>
          <div className="custom-card card h-100 p-4">
            <div className="card-body">
              <h3 className="h5 mb-3">Fullstack Development</h3>
              <p>Creating applications using AWS technologies.</p>
            </div>
          </div>
        </Col>
        <Col md={4}>
          <div className="custom-card card h-100 p-4">
            <div className="card-body">
              <h3 className="h5 mb-3">University Student</h3>
              <p>Completing my degree and making sure to learn as much as I can.</p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;