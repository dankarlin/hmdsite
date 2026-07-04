import { lazy, Suspense, useState } from 'react';
import { Card, Button, Container, Row, Col, Nav, Navbar } from 'react-bootstrap';
import './custom.css';
import { Helmet } from 'react-helmet';
import CaptchaModal from './CaptchaModal';

// Lazy load heavy sections
const LazyCalendar = lazy(() => import('./LazyCalendar'));
const LazyInstagram = lazy(() => import('./LazyInstagram'));
const LazyPhotoGallery = lazy(() => import('./LazyPhotoGallery'));

const HMDWebsite = () => {
  const [showCaptcha, setShowCaptcha] = useState(false);
  const [captchaTitle, setCaptchaTitle] = useState('');
  const [pendingAction, setPendingAction] = useState(null);

  const handleProtectedAction = (action, title) => {
    console.log('Setting up protected action:', title);
    setPendingAction(() => action);
    setCaptchaTitle(title);
    setShowCaptcha(true);
  };

  const handleCaptchaSuccess = () => {
    console.log('CAPTCHA solved successfully');
    if (pendingAction) {
      console.log('Executing pending action');
      pendingAction();
    }
    setShowCaptcha(false);
    setPendingAction(null);
  };

  const handleWhatsAppClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('WhatsApp click intercepted');
    handleProtectedAction(
      () => {
        console.log('Opening WhatsApp after CAPTCHA success');
        window.open('https://chat.whatsapp.com/IaXKbJSG7ab4vvqTFZSZNG', '_blank', 'noopener,noreferrer');
      },
      'Join WhatsApp Group'
    );
    return false;
  };

  const handleEmailClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('Email click intercepted');
    handleProtectedAction(
      () => {
        console.log('Opening email after CAPTCHA success');
        window.location.href = 'mailto:info@hmdultimate.com';
      },
      'Contact Us'
    );
    return false;
  };

  return (
    <div className="min-vh-100 d-flex flex-column">
	  
	  {/* Meta Helmet */}
	  <Helmet>
        <title>HMD Ultimate | LGBTQ+ Ultimate Frisbee Community in NYC</title>
        <meta name="description" content="HMD Ultimate is an inclusive LGBTQ+ Ultimate Frisbee community in New York City welcoming players of all skill levels. Join our games, events, and inclusive community!" />
        <link rel="canonical" href="https://hmdultimate.com" />
      </Helmet>
	  
	  {/* Navbar */}
      <Navbar bg="primary" variant="dark" expand="lg" sticky="top" role="navigation" aria-label="Main navigation">
        <Container>
          <Navbar.Brand href="#home" aria-label="HMD Ultimate home">HMD Ultimate</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" aria-label="Toggle navigation menu" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#about" aria-label="About HMD Ultimate">About</Nav.Link>
              <Nav.Link href="#events" aria-label="Upcoming events">Events</Nav.Link>
              <Nav.Link href="#location" aria-label="Game location">Location</Nav.Link>
              <Nav.Link href="#values" aria-label="Community values">Values</Nav.Link>
              <Nav.Link href="#get-involved" aria-label="How to get involved">Get Involved</Nav.Link>
              <Nav.Link href="#schedule" aria-label="Game schedule">Schedule</Nav.Link>
              <Nav.Link href="#social" aria-label="Social media">Social</Nav.Link>
	          <Nav.Link href="#gallery" aria-label="Photo gallery">Gallery</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Hero Section */}
      <section className="hero-gradient text-white py-5" id="home" role="banner" aria-labelledby="hero-title">
        <Container className="py-5 text-center hero-content">
          <h1 id="hero-title" className="display-4 fw-bold mb-3 hero-title">HMD Ultimate</h1>
          <p className="lead mb-4 hero-subtitle">The LGBTQ+ Ultimate Frisbee Community in New York City</p>
          <div className="d-flex justify-content-center gap-3 hero-buttons">
            <Button variant="light" className="px-4 py-2 btn-enhanced btn-pulse" href="#events" aria-label="View upcoming games">
              Upcoming Games
            </Button>
            <Button variant="outline-light" className="px-4 py-2 btn-enhanced" href="#get-involved" aria-label="Learn how to join us">
              Join Us
            </Button>
          </div>
        </Container>
      </section>
	  
	  {/* Welcome Section */}
      <section className="py-5 section-pattern" id="about">
        <Container>
          <Card className="mb-4 border-0 shadow-sm card-hover">
            <Card.Body className="p-4">
              <p className="text-secondary">
                Welcome to HMD Ultimate! We are a community that brings together LGBTQ+ players and allies through ultimate frisbee. We focus on fostering friendship and inclusion while enjoying the sport we love. Whether you are a seasoned player or new to ultimate, you will find a welcoming home here.
              </p>
            </Card.Body>
          </Card>
        </Container>
      </section>

  	  {/* Blog Section - Add this section */}
      {/*<BlogSection />*/}
  
      {/* Upcoming Events */}
      <section className="py-3 bg-light" id="events">
        <Container className="py-4">
          <h2 className="mb-4 text-center">Upcoming and Current Events</h2>
          <Row className="g-4">
            <Col md={6}>
              <Card className="h-100 border-0 shadow-sm card-hover">
                <Card.Header className="bg-white border-0">
                  <Card.Title>Hucktoberfest NYC - LGBTQ+ Ultimate Tournament</Card.Title>
                </Card.Header>
                <Card.Body>
                  <p className="text-secondary">
                    Join us for an amazing LGBTQ+ Ultimate Frisbee tournament on Indigenous Peoples&apos; Day weekend in NYC! 🌈
                  </p>
                  <ul className="mt-3">
                    <li>Date: Indigenous Peoples&apos; Day weekend</li>
                    <li>3 days of sports, socializing, and queer joy</li>
                    <li>Meet hundreds of LGBTQ+ athletes</li>
                    <li>Exclusive tournament events & parties</li>
                    <li>Early bird: $75 (until Aug 1)</li>
                    <li>Regular: $90</li>
                    <li>Registration closes Oct 1</li>
                  </ul>
                  <p className="mt-3 text-primary">
                    <a href="https://www.instagram.com/p/DLlWww5S8m0/" target="_blank" rel="noopener noreferrer">
                      Check our Instagram for full details & registration
                    </a>
                  </p>
                </Card.Body>
              </Card>
            </Col>
            {/*
	  <Col md={6}>
              <Card className="h-100 border-0 shadow-sm">
                <Card.Header className="bg-white border-0">
                  <Card.Title>Beginner Day & Skills Drills - April 19</Card.Title>
                </Card.Header>
                <Card.Body>
                  <p className="text-secondary">
                    New to ultimate? Join us for a special introduction to the sport from where we will cover basic throws, game rules, and strategy.
                  </p>
                  <ul className="mt-3">
                    <li>Saturday 1:00-3:00 PM</li>
                    <li>No experience needed (not even how to throw a frisbee)</li>
                    <li>A great way to learn the basics of ultimate and try playing</li>
                    <li>Drills for returning players as well</li>
                    <li>Wrap up with some fun pickup</li>
                    <li>Bring sneakers or cleats, water, sunscreen</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col> 
	  */}
          </Row>
        </Container>
      </section>
	  
	{/* Location Section with Google Map */}
		<section className="py-5 section-pattern" id="location">
		  <Container>
		    <h2 className="mb-4 text-center">Game Location</h2>
		    <Card className="mb-5 border-0 shadow-sm card-hover">
		      <Card.Body className="p-4">
		        <Row>
		          <Col lg={6} className="mb-4 mb-lg-0">
		            <h3 className="h3 mb-3">DeWitt Clinton Park</h3>
		            <p className="text-secondary">
		              Most of our games are played at DeWitt Clinton Park in Hell&apos;s Kitchen, Manhattan. The park offers open fields perfect for ultimate frisbee in a convenient Midtown location.
		            </p>
		            <div className="mb-3">
		              <h4 className="h4 mb-2">Address</h4>
		              <p className="text-secondary mb-1">DeWitt Clinton Park</p>
		              <p className="text-secondary mb-1">W 52nd St & 11th Ave</p>
		              <p className="text-secondary mb-3">New York, NY 10019</p>
		            </div>
		            <div>
		              <h5 className="h5 mb-2">Transportation</h5>
		              <p className="text-secondary mb-1">
		                <strong>Subway</strong> Close to the 50th Street station (C, E lines)
		              </p>
		              <p className="text-secondary mb-1">
		                <strong>Bus:</strong> M50, M11, and M12 routes nearby
		              </p>
		            </div>
		          </Col>
		          <Col lg={6}>
		            <div className="ratio ratio-4x3 h-100">
		              <iframe 
		                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6043.299376298315!2d-73.998763!3d40.769729!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2594c6ba6eb09%3A0xa2ded373ac4f4bd1!2sDeWitt%20Clinton%20Park!5e0!3m2!1sen!2sus!4v1741820279266!5m2!1sen!2sus" 
		                className="border-0 rounded shadow-sm"
		                allowFullScreen="" 
		                loading="lazy" 
		                referrerPolicy="no-referrer-when-downgrade"
						title="DeWitt Clinton Park location map"
						aria-label="Interactive map showing DeWitt Clinton Park location"
		              ></iframe>
		            </div>
		          </Col>
		        </Row>
		      </Card.Body>
		    </Card>
		  </Container>
		</section>

      {/* Community Values */}
      <section className="py-5" id="values">
        <Container>
          <Card className="mb-5 border-0 shadow-sm card-hover">
            <Card.Body className="p-4">
              <h2 className="mb-4 text-center">Community Values</h2>
              <Row className="g-4">
                <Col md={6}>
                  <div className="value-item">
                    <div className="value-icon">🤝</div>
                    <h3 className="h5 fw-bold">Inclusivity</h3>
                    <p className="text-secondary">We welcome players of all skill levels, backgrounds, and identities</p>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="value-item">
                    <div className="value-icon">📈</div>
                    <h3 className="h5 fw-bold">Growth</h3>
                    <p className="text-secondary">Focus on personal development and learning in a supportive environment</p>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="value-item">
                    <div className="value-icon">❤️</div>
                    <h3 className="h5 fw-bold">Community</h3>
                    <p className="text-secondary">Building lasting friendships both on and off the field</p>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="value-item">
                    <div className="value-icon">⚡</div>
                    <h3 className="h5 fw-bold">Spirit of the Game</h3>
                    <p className="text-secondary">Promoting sportspersonship and mutual respect</p>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Container>
      </section>

	  {/* Get Involved */}
	  <section className="py-5 bg-light" id="get-involved">
	    <Container>
	      <h2 className="mb-4 text-center">Get Involved</h2>
	      <p className="lead text-center mb-5">Ready to join the fun? Here is how you can get started</p>
	      <Row className="g-4">
        
	        {/* WhatsApp Card with Hardcoded URL */}
	        <Col lg={6} className="mb-4">
	          <Card className="h-100 border-0 shadow-sm get-involved-card">
	            <Card.Body className="p-4 text-center">
	              <h3 className="h4 fw-bold mb-3">1. Join our WhatsApp Community</h3>
	              <p className="text-secondary mb-4">Connect with the group for updates on games and events</p>
	              <button 
	                type="button"
	                onMouseDown={handleWhatsAppClick}
	                className="btn btn-success btn-lg px-4 py-2 btn-enhanced"
	              >
	                Join WhatsApp Group
	              </button>
	            </Card.Body>
	          </Card>
	        </Col>
      
	        <Col lg={6} className="mb-4">
	          <Card className="h-100 border-0 shadow-sm get-involved-card">
	            <Card.Body className="p-4 text-center">
	              <h3 className="h4 fw-bold mb-3">2. Come to a Game</h3>
	              <p className="text-secondary mb-4">Drop in for our weekly pickup games - no registration required!</p>
	              <Button variant="primary" size="lg" className="px-4 py-2 btn-enhanced" href="#schedule">
	                View Schedule
	              </Button>
	            </Card.Body>
	          </Card>
	        </Col>
      
	        <Col lg={6} className="mb-4">
	          <Card className="h-100 border-0 shadow-sm get-involved-card">
	            <Card.Body className="p-4 text-center">
	              <h3 className="h4 fw-bold mb-3">3. Play in the Spring Season</h3>
	              <p className="text-secondary mb-4">Sign up for our structured season with regular games with a mix of set teams and pickup, and training</p>
	              <Button variant="primary" size="lg" className="px-4 py-2 btn-enhanced" href="#events">
	                Season Details
	              </Button>
	            </Card.Body>
	          </Card>
	        </Col>
      
	        <Col lg={6} className="mb-4">
	          <Card className="h-100 border-0 shadow-sm get-involved-card">
	            <Card.Body className="p-4 text-center">
	              <h3 className="h4 fw-bold mb-3">4. Follow Us</h3>
	              <p className="text-secondary mb-4">Stay updated on games and social events through our Instagram</p>
	              <a 
	                href="https://www.instagram.com/horsemeatdisc/" 
	                target="_blank" 
	                rel="noopener noreferrer"
	                className="btn btn-primary btn-lg px-4 py-2 btn-enhanced"
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
          <h2 className="mb-4 text-center">Schedule</h2>
          <Suspense fallback={<div className="text-center p-5"><div className="spinner-border text-primary" role="status"><span className="visually-hidden">Loading calendar...</span></div></div>}>
            <LazyCalendar />
          </Suspense>
        </Container>
      </section>

      {/* Instagram Feed */}
      <section className="py-3 bg-light" id="social">
        <Container className="py-4">
          <h2 className="mb-4 text-center">Follow Us @horsemeatdisc</h2>
          <Suspense fallback={<div className="text-center p-5"><div className="spinner-border text-primary" role="status"><span className="visually-hidden">Loading Instagram...</span></div></div>}>
            <LazyInstagram />
          </Suspense>
        </Container>
      </section>
	  
	  {/* Photo Gallery Section */}
	  <section className="py-5 bg-light" id="gallery">
	    <Container>
	      <h2 className="mb-4 text-center">Photo Gallery</h2>
	      <Suspense fallback={<div className="text-center p-5"><div className="spinner-border text-primary" role="status"><span className="visually-hidden">Loading gallery...</span></div></div>}>
	        <LazyPhotoGallery />
	      </Suspense>
	    </Container>
	  </section>

      {/* Updated Footer with Email Link */}
      <footer className="bg-dark text-white py-4 mt-auto" role="contentinfo">
        <Container className="text-center">
          <p className="mb-3">HMD Ultimate - New York City&apos;s LGBTQ+ Ultimate Community</p>
          <Nav className="justify-content-center" role="navigation" aria-label="Footer navigation">
            <Nav.Item>
              <Nav.Link href="https://www.instagram.com/horsemeatdisc/" className="text-light" aria-label="Visit our Instagram page" target="_blank" rel="noopener noreferrer">Instagram</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <button 
                type="button"
                onMouseDown={handleEmailClick}
                className="nav-link text-light bg-transparent border-0 p-2"
                aria-label="Send us an email"
                style={{ cursor: 'pointer', textDecoration: 'none' }}
              >
                Contact Us
              </button>
            </Nav.Item>
          </Nav>
        </Container>
      </footer>
      
      <CaptchaModal 
        show={showCaptcha}
        onHide={() => setShowCaptcha(false)}
        onSuccess={handleCaptchaSuccess}
        title={captchaTitle}
      />
    </div>
  );
};

export default HMDWebsite;