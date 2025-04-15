import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';

const Home = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="home-page">
      <motion.div 
        className="hero-section bg-dark text-white py-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Container>
          <motion.h1 
            className="display-4 fw-bold"
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            Welcome to Ecom
          </motion.h1>
          <motion.p 
            className="lead mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            The Future of Decentralized Commerce
          </motion.p>
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.8 }}
          >
            <Button variant="primary" size="lg" className="me-3">
              Explore Products
            </Button>
            <Button variant="outline-light" size="lg">
              Learn More
            </Button>
          </motion.div>
        </Container>
      </motion.div>

      <Container className="py-5">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <Row>
            <Col md={4}>
              <motion.div variants={fadeIn}>
                <Card className="feature-card h-100">
                  <Card.Body>
                    <div className="feature-icon mb-3">
                      <i className="bi bi-shield-lock fs-1 text-primary"></i>
                    </div>
                    <Card.Title className="h4">Decentralized Security</Card.Title>
                    <Card.Text>
                      Built on Ethereum blockchain, ensuring transparency and security in every transaction. 
                      No middlemen, no hidden fees, just pure peer-to-peer commerce.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
            <Col md={4}>
              <motion.div variants={fadeIn}>
                <Card className="feature-card h-100">
                  <Card.Body>
                    <div className="feature-icon mb-3">
                      <i className="bi bi-cash-coin fs-1 text-primary"></i>
                    </div>
                    <Card.Title className="h4">Smart Payments</Card.Title>
                    <Card.Text>
                      Smart contracts handle all transactions, eliminating the need for intermediaries.
                      Instant settlements and automated escrow ensure safe and efficient trading.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
            <Col md={4}>
              <motion.div variants={fadeIn}>
                <Card className="feature-card h-100">
                  <Card.Body>
                    <div className="feature-icon mb-3">
                      <i className="bi bi-eye fs-1 text-primary"></i>
                    </div>
                    <Card.Title className="h4">Complete Transparency</Card.Title>
                    <Card.Text>
                      All transactions and product information are stored on the blockchain, 
                      visible to everyone. Track your orders in real-time with immutable records.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          </Row>
        </motion.div>
      </Container>

      <motion.div 
        className="cta-section bg-light py-5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <Container className="text-center">
          <h2 className="mb-4">Ready to Experience the Future of E-Commerce?</h2>
          <p className="lead mb-4">Join thousands of users already trading on our decentralized platform</p>
          <Button variant="primary" size="lg">
            Get Started
          </Button>
        </Container>
      </motion.div>
    </div>
  );
};

export default Home; 