import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const features = [
    {
      icon: "shield-lock",
      title: "Decentralized Security",
      description: "Built on Ethereum blockchain, ensuring transparency and security in every transaction. No middlemen, no hidden fees, just pure peer-to-peer commerce."
    },
    {
      icon: "cash-coin",
      title: "Smart Payments",
      description: "Smart contracts handle all transactions, eliminating the need for intermediaries. Instant settlements and automated escrow ensure safe and efficient trading."
    },
    {
      icon: "eye",
      title: "Complete Transparency",
      description: "All transactions and product information are stored on the blockchain, visible to everyone. Track your orders in real-time with immutable records."
    }
  ];

  return (
    <div className="home-page">
      <motion.div 
        className="hero-section text-white py-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Container className="py-5">
          <motion.h1 
            className="display-3 fw-bold mb-4"
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            Welcome to Ecom
          </motion.h1>
          <motion.p 
            className="lead mb-4 text-light fs-3"
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
            className="d-flex gap-3"
          >
            <Button 
              as={Link} 
              to="/products" 
              variant="light" 
              size="lg"
              className="px-4 py-3 fw-semibold"
            >
              <i className="bi bi-box-seam me-2"></i>
              Explore Products
            </Button>
            <Button 
              variant="outline-light" 
              size="lg"
              className="px-4 py-3 fw-semibold"
            >
              <i className="bi bi-info-circle me-2"></i>
              Learn More
            </Button>
          </motion.div>
        </Container>
      </motion.div>

      <Container className="py-5">
        <Row className="g-4">
          {features.map((feature, index) => (
            <Col md={4} key={index}>
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                transition={{ delay: index * 0.2 }}
                className="feature-section py-4"
              >
                <div className="text-center">
                  <div 
                    className="feature-icon-wrapper mb-4 mx-auto"
                    style={{
                      background: 'rgba(255, 255, 255, 0.1)',
                      padding: "1.5rem",
                      borderRadius: "50%",
                      width: "100px",
                      height: "100px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center"
                    }}
                  >
                    <i className={`bi bi-${feature.icon} display-4 text-white`}></i>
                  </div>
                  <motion.h2 
                    className="display-6 fw-bold mb-4 text-white"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 + index * 0.2 }}
                  >
                    {feature.title}
                  </motion.h2>
                  <motion.p 
                    className="lead fs-4 text-light mb-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 + index * 0.2 }}
                  >
                    {feature.description}
                  </motion.p>
                </div>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>

      <motion.div 
        className="cta-section py-5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <Container className="text-center py-5">
          <h2 className="display-5 mb-4 text-white">Ready to Experience the Future of E-Commerce?</h2>
          <p className="lead mb-4 text-light fs-4">Join thousands of users already trading on our decentralized platform</p>
          <Button 
            as={Link}
            to="/products"
            variant="light" 
            size="lg"
            className="px-5 py-3 fw-semibold"
          >
            <i className="bi bi-rocket me-2"></i>
            Get Started
          </Button>
        </Container>
      </motion.div>
    </div>
  );
};

export default Home; 