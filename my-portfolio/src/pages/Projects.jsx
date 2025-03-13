import { Container, Row, Col, Card, Badge, Button } from 'react-bootstrap';

function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Hospital Manager',
      description: 'Springboot Application to create a Hospital Management Application done as a personnal project.',
      technologies: ['Springboot', 'Java', 'Rest API', 'SwaggerUI'],
      link: '#'
    },
    {
      id: 2,
      title: 'Werewolf Testing Application',
      description: 'Angular Typescript application to test in-house data during my internship.',
      technologies: ['AWS', 'Typescript', 'Npm-Bootstrap', 'Angular', 'AWS Lambda', 'AWS DynamoDB'],
      link: '#'
    }
  ];

  return (
    <Container>
      <Row className="py-5">
        <Col>
          <h1 className="section-title">My Projects</h1>
          <p className="lead mb-5">Here are some of the projects I've worked on that showcase my skills and problem-solving abilities.</p>
        </Col>
      </Row>

      <Row className="g-4">
        {projects.map(project => (
          <Col key={project.id} lg={4} md={6} className="mb-4">
            <Card className="custom-card h-100">
              <Card.Img 
                variant="top" 
                src={project.image} 
                alt={`Screenshot of ${project.title} project`} 
              />
              <Card.Body>
                <Card.Title className="h4 mb-3">{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
                <div className="mb-3">
                  {project.technologies.map(tech => (
                    <Badge bg="secondary" className="me-2 mb-2" key={tech}>
                      {tech}
                    </Badge>
                  ))}
                </div>
                <Button variant="primary" href={project.link} className="custom-btn">
                  View Project
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Row className="mt-5 pt-3 text-center">
        <Col>
          <p className="lead">Interested in seeing more of my work?</p>
          <Button 
            variant="outline-primary" 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            size="lg"
          >
            Visit My GitHub
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Projects;