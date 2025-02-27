import React from 'react';
import { Card, Button, Container, Row, Col, Nav, Navbar, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const HMDWebsite = () => {
	const whatsappUrl = "https://chat.whatsapp.com/IaXKbJSG7ab4vvqTFZSZNG";
  return (
    <div className="min-vh-100 d-flex flex-column">
      {/* Navbar */}
      <Navbar bg="primary" variant="dark" expand="lg" sticky="top">
        <Container>
          <Navbar.Brand href="#home">HMD Ultimate</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#events">Events</Nav.Link>
              <Nav.Link href="#values">Values</Nav.Link>
              <Nav.Link href="#get-involved">Get Involved</Nav.Link>
              <Nav.Link href="#schedule">Schedule</Nav.Link>
              <Nav.Link href="#social">Social</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Hero Section */}
      <div className="bg-primary text-white py-5" id="home">
        <Container className="py-5 text-center">
          <h1 className="display-4 fw-bold mb-3">HMD Ultimate</h1>
          <p className="lead mb-4">An LGBTQ+ Ultimate Community in New York City</p>
          <div className="d-flex justify-content-center gap-3">
            <Button variant="light" className="px-4 py-2" href="#events">
              Upcoming Games
            </Button>
            <Button variant="outline-light" className="px-4 py-2" href="#get-involved">
              Join Us
            </Button>
          </div>
        </Container>
      </div>

      {/* Welcome Section */}
      <section className="py-5" id="about">
        <Container>
          <Card className="mb-4 border-0 shadow-sm">
            <Card.Body className="p-4">
              <p className="text-secondary">
                Welcome to HMD Ultimate! We're a community that brings together LGBTQ+ players and allies through ultimate frisbee. Our focus is on fostering friendship and inclusion while enjoying the sport we love. Whether you're a seasoned player or new to ultimate, you'll find a welcoming home with us.
              </p>
            </Card.Body>
          </Card>
        </Container>
      </section>

      {/* Upcoming Events */}
      <section className="py-3 bg-light" id="events">
        <Container className="py-4">
          <h2 className="mb-4 text-center">Upcoming Events</h2>
          <Row className="g-4">
            <Col md={6}>
              <Card className="h-100 border-0 shadow-sm">
                <Card.Header className="bg-white border-0">
                  <Card.Title>Spring Season 2025</Card.Title>
                </Card.Header>
                <Card.Body>
                  <p className="text-secondary">
                    Join us for our Spring Season starting March 22! Weekly games with a mix of skills training and gameplay.
                  </p>
                  <ul className="mt-3">
                    <li>Season: March 22 - June 7</li>
                    <li>Beginners welcome!</li>
                    <li>Skills training: 1:00-1:30 PM</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6}>
              <Card className="h-100 border-0 shadow-sm">
                <Card.Header className="bg-white border-0">
                  <Card.Title>Beginners' Day - April 12</Card.Title>
                </Card.Header>
                <Card.Body>
                  <p className="text-secondary">
                    New to ultimate? Join us for a special introduction to the sport! We'll cover basic throws, game rules, and strategy.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Community Values */}
      <section className="py-5" id="values">
        <Container>
          <Card className="mb-5 border-0 shadow-sm">
            <Card.Body className="p-4">
              <h2 className="mb-4 text-center">Our Community Values</h2>
              <Row className="g-4">
                <Col md={6}>
                  <h3 className="h5 fw-bold">Inclusivity</h3>
                  <p className="text-secondary">We welcome players of all skill levels, backgrounds, and identities.</p>
                </Col>
                <Col md={6}>
                  <h3 className="h5 fw-bold">Growth</h3>
                  <p className="text-secondary">Focus on personal development and learning in a supportive environment.</p>
                </Col>
                <Col md={6}>
                  <h3 className="h5 fw-bold">Community</h3>
                  <p className="text-secondary">Building lasting friendships both on and off the field.</p>
                </Col>
                <Col md={6}>
                  <h3 className="h5 fw-bold">Spirit of the Game</h3>
                  <p className="text-secondary">Promoting sportsmanship and mutual respect.</p>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Container>
      </section>

	  {/* Get Involved - Production-Ready Version */}
	  <section className="py-5 bg-light" id="get-involved">
	    <Container>
	      <h2 className="mb-4 text-center">Get Involved</h2>
	      <p className="lead text-center mb-5">Ready to join the fun? Here's how you can get started:</p>
    
	      <Row className="g-4">
	        {/* WhatsApp Card with Hardcoded URL */}
	        <Col lg={6} className="mb-4">
	          <Card className="h-100 border-0 shadow-sm">
	            <Card.Body className="p-4 text-center">
	              <h3 className="h4 fw-bold mb-3">1. Join our WhatsApp Community</h3>
	              <p className="text-secondary mb-4">Connect with our members and stay updated on games and events</p>
	              <a 
	                href="https://chat.whatsapp.com/IaXKbJSG7ab4vvqTFZSZNG"
	                target="_blank" 
	                rel="noopener noreferrer"
	                className="btn btn-success btn-lg px-4 py-2"
	              >
	                Join WhatsApp Group
	              </a>
	            </Card.Body>
	          </Card>
	        </Col>
      
	        <Col lg={6} className="mb-4">
	          <Card className="h-100 border-0 shadow-sm">
	            <Card.Body className="p-4 text-center">
	              <h3 className="h4 fw-bold mb-3">2. Come to a Game</h3>
	              <p className="text-secondary mb-4">Drop in for our weekly pickup games - no registration required!</p>
	              <Button variant="primary" size="lg" className="px-4 py-2" href="#schedule">
	                View Schedule
	              </Button>
	            </Card.Body>
	          </Card>
	        </Col>
      
	        <Col lg={6} className="mb-4">
	          <Card className="h-100 border-0 shadow-sm">
	            <Card.Body className="p-4 text-center">
	              <h3 className="h4 fw-bold mb-3">3. Join the Spring Season</h3>
	              <p className="text-secondary mb-4">Sign up for our structured season with regular games and training</p>
	              <Button variant="primary" size="lg" className="px-4 py-2" href="#events">
	                Season Details
	              </Button>
	            </Card.Body>
	          </Card>
	        </Col>
      
	        <Col lg={6} className="mb-4">
	          <Card className="h-100 border-0 shadow-sm">
	            <Card.Body className="p-4 text-center">
	              <h3 className="h4 fw-bold mb-3">4. Follow Us</h3>
	              <p className="text-secondary mb-4">Stay updated on games and social events through our Instagram</p>
	              <a 
	                href="https://www.instagram.com/horsemeatdisc/" 
	                target="_blank" 
	                rel="noopener noreferrer"
	                className="btn btn-primary btn-lg px-4 py-2"
	              >
	                @horsemeatdisc
	              </a>
	            </Card.Body>
	          </Card>
	        </Col>
	      </Row>
	    </Container>
	  </section>

      {/* Calendar Section */}
      <section className="py-5" id="schedule">
        <Container>
          <h2 className="mb-4 text-center">Our Schedule</h2>
          <Card className="border-0 shadow-sm overflow-hidden">
            <iframe 
              src="https://calendar.google.com/calendar/embed?src=52cf4449b82472898267e25a47a4926021bee7192d9f4a1d85e0cfdd826e5290%40group.calendar.google.com&ctz=America%2FNew_York" 
              className="w-100"
              style={{ height: "500px" }}
              frameBorder="0" 
              scrolling="no"
            ></iframe>
          </Card>
        </Container>
      </section>

      {/* Instagram Feed */}
      <section className="py-3 bg-light" id="social">
        <Container className="py-4">
          <h2 className="mb-4 text-center">Follow Us @horsemeatdisc</h2>
          <Card className="border-0 shadow-sm overflow-hidden">
            <iframe 
              src="https://www.instagram.com/horsemeatdisc/embed" 
              className="w-100"
              style={{ height: "500px" }}
              frameBorder="0" 
              scrolling="no"
            ></iframe>
          </Card>
        </Container>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white py-4 mt-auto">
        <Container className="text-center">
          <p className="mb-3">HMD Ultimate - New York City's LGBTQ+ Ultimate Community</p>
          <Nav className="justify-content-center">
            <Nav.Item>
              <Nav.Link href="https://www.instagram.com/horsemeatdisc/" className="text-light">Instagram</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#contact" className="text-light">Contact Us</Nav.Link>
            </Nav.Item>
          </Nav>
        </Container>
      </footer>
    </div>
  );
};

export default HMDWebsite;