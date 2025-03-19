import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Badge, Button } from 'react-bootstrap';

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch projects from the backend API
    const fetchProjects = async () => {
      try {
        const response = await fetch('/api/projects');
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        const data = await response.json();
        setProjects(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return (
      <Container className="py-5">
        <Row>
          <Col>
            <h1 className="section-title">My Projects</h1>
            <p>Loading projects...</p>
          </Col>
        </Row>
      </Container>
    );
  }

  if (error) {
    return (
      <Container className="py-5">
        <Row>
          <Col>
            <h1 className="section-title">My Projects</h1>
            <p className="text-danger">Failed to load projects: {error}</p>
          </Col>
        </Row>
      </Container>
    );
  }

  return (
    <Container>
      <Row className="py-5">
        <Col>
          <h1 className="section-title">My Projects</h1>
          <p className="lead mb-5">
            Here are some of the projects I've worked on that showcase my skills and problem-solving abilities.
          </p>
        </Col>
      </Row>

      <Row className="g-4">
        {projects.map(project => (
          <Col key={project.id} lg={4} md={6} className="mb-4">
            <Card className="custom-card h-100">
              <Card.Img
                variant="top"
                src={project.image || 'https://via.placeholder.com/300'}
                alt={`Screenshot of ${project.title} project`}
              />
              <Card.Body>
                <Card.Title className="h4 mb-3">{project.title}</Card.Title>
                <Card.Text>
                  <strong>Description:</strong> {project.description}
                  <br />
                  <strong>Technologies:</strong>
                  <div className="mb-3">
                    {project.technologies.map(tech => (
                      <Badge bg="secondary" className="me-2 mb-2" key={tech}>
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </Card.Text>
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
