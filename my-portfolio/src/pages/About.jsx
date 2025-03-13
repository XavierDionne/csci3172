import { Container, Row, Col, ProgressBar } from 'react-bootstrap';

function About() {
  const skills = [
    { name: 'Python', level: 100 },
    { name: 'Java', level: 100 },
    { name: 'HCL Terraform', level: 100 },
    { name: 'Angular', level: 100 },
    { name: 'Typescript', level: 100 },
    { name: 'Bootstrap', level: 100 },
    { name: 'AWS Technologies', level: 100 },
    { name: 'Javascript', level: 100 }
  ];

  return (
    <Container>
      <Row className="py-5">
        <Col lg={12}>
          <h1 className="section-title">About Me</h1>
        </Col>
      </Row>

      <Row className="mb-5">
        <Col lg={6} className="mb-4 mb-lg-0">
          <h2 className="h3 mb-4">Education & Background</h2>
          <div className="mb-4">
            <h3 className="h5">Bachelor of Computer Science</h3>
            <p className="text-secondary mb-1">Dalhousie University</p>
            <p className="mb-0">2020 - Present</p>
            <p>Certificate in Communication Technologies and Cyber Security</p>
            <p>Dean's List</p>
          </div>
        </Col>
        <Col lg={6}>
          <h2 className="h3 mb-4">Experience</h2>
          <div className="mb-4">
            <h3 className="h5">Software Engineer Intern</h3>
            <p className="text-secondary mb-1">Resmed</p>
            <p className="mb-0">Summer-Fall 2022</p>
            <p>Fullstack development working on a wide range of projects.</p>
          </div>
          <div className="mb-4">
            <h3 className="h5">Software Engineer Intern</h3>
            <p className="text-secondary mb-1">Resmed</p>
            <p className="mb-0">Summer-Present 2024</p>
            <p>Fullstack development working on a wide range of projects.</p>
          </div>
        </Col>
      </Row>

      <Row className="mb-5">
        <Col lg={12}>
          <h2 className="h3 mb-4">Career Goals</h2>
          <p>My goal is to become a full-stack developer specializing in backend development. I am have worked with a wide range of technologies and hope to keep growing and learning new things.</p>
        </Col>
      </Row>

      <Row className="mb-5">
        <Col lg={12}>
          <h2 className="h3 mb-4">Technical Skills</h2>
        </Col>
        {skills.map((skill, index) => (
          <Col md={6} key={index} className="mb-3">
            <div className="d-flex justify-content-between mb-1">
              <span>{skill.name}</span>
            </div>
            <ProgressBar now={skill.level} variant="primary" />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default About;