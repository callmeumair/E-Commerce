import React, { useState, useEffect } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import Web3 from 'web3';
import ECommerceContract from '../contracts/ECommerce.json';

const AddProduct = () => {
  const [web3, setWeb3] = useState(null);
  const [contract, setContract] = useState(null);
  const [account, setAccount] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: ''
  });
  const [status, setStatus] = useState('');

  useEffect(() => {
    const initWeb3 = async () => {
      if (window.ethereum) {
        try {
          const web3Instance = new Web3(window.ethereum);
          await window.ethereum.enable();
          setWeb3(web3Instance);

          const accounts = await web3Instance.eth.getAccounts();
          setAccount(accounts[0]);

          const networkId = await web3Instance.eth.net.getId();
          const deployedNetwork = ECommerceContract.networks[networkId];
          const contractInstance = new web3Instance.eth.Contract(
            ECommerceContract.abi,
            deployedNetwork && deployedNetwork.address
          );
          setContract(contractInstance);
        } catch (error) {
          console.error('Error initializing web3:', error);
        }
      }
    };

    initWeb3();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const priceInWei = web3.utils.toWei(formData.price, 'ether');
      
      await contract.methods.addProduct(
        formData.name,
        formData.description,
        priceInWei
      ).send({ from: account });

      setStatus('success');
      setFormData({
        name: '',
        description: '',
        price: ''
      });
    } catch (error) {
      console.error('Error adding product:', error);
      setStatus('error');
    }
  };

  return (
    <Container>
      <h2 className="mb-4">Add New Product</h2>
      {status === 'success' && (
        <Alert variant="success">Product added successfully!</Alert>
      )}
      {status === 'error' && (
        <Alert variant="danger">Error adding product. Please try again.</Alert>
      )}
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Product Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Price (ETH)</Form.Label>
          <Form.Control
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            step="0.01"
            min="0"
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Add Product
        </Button>
      </Form>
    </Container>
  );
};

export default AddProduct; 