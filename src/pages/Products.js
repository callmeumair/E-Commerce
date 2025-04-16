import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';

const Products = () => {
  const dummyProducts = [
    {
      id: 1,
      name: "Premium Wireless Headphones",
      description: "High-quality wireless headphones with noise cancellation and 30-hour battery life.",
      price: "0.15 ETH",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80"
    },
    {
      id: 2,
      name: "Smart Watch Pro",
      description: "Advanced smartwatch with health tracking, GPS, and seamless connectivity.",
      price: "0.12 ETH",
      image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500&q=80"
    },
    {
      id: 3,
      name: "4K Drone Camera",
      description: "Professional drone with 4K camera, 30-minute flight time, and advanced stabilization.",
      price: "0.25 ETH",
      image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=500&q=80"
    },
    {
      id: 4,
      name: "Gaming Laptop",
      description: "High-performance gaming laptop with RTX graphics and 165Hz display.",
      price: "2.5 ETH",
      image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500&q=80"
    },
    {
      id: 5,
      name: "Smart Home Hub",
      description: "Central hub for controlling all your smart home devices with voice commands.",
      price: "0.08 ETH",
      image: "https://images.unsplash.com/photo-1558089687-db5ff4cfe3ac?w=500&q=80"
    },
    {
      id: 6,
      name: "Professional Camera",
      description: "Full-frame mirrorless camera with 8K video capabilities.",
      price: "1.8 ETH",
      image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&q=80"
    }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <Container>
      <motion.h2 
        className="text-center mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Available Products
      </motion.h2>
      <Row>
        {dummyProducts.map((product, index) => (
          <Col md={4} className="mb-4" key={product.id}>
            <motion.div
              {...fadeInUp}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="product-card">
                <Card.Body>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="product-image"
                  />
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>{product.description}</Card.Text>
                  <div className="product-price">{product.price}</div>
                  <Button variant="primary" className="w-100">
                    Purchase Now
                  </Button>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Products; 