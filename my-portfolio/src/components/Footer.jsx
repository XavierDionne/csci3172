import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-light py-4 mt-5">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="text-center text-md-start">
            <p className="mb-0">© {year} Xavier Dionne. All rights reserved.</p>
          </Col>
          <Col md={6} className="text-center text-md-end mt-3 mt-md-0">
            <ul className="list-inline mb-0">
              <li className="list-inline-item">
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="text-decoration-none text-dark mx-2"
                >
                  <i className="bi bi-github" aria-hidden="true"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-decoration-none text-dark mx-2"
                >
                  <i className="bi bi-linkedin" aria-hidden="true"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a 
                  href="test:example@email.com" 
                  aria-label="Email"
                  className="text-decoration-none text-dark mx-2"
                >
                  <i className="bi bi-envelope" aria-hidden="true"></i>
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;