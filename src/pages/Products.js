import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import Web3 from 'web3';
import ECommerceContract from '../contracts/ECommerce.json';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [web3, setWeb3] = useState(null);
  const [contract, setContract] = useState(null);
  const [account, setAccount] = useState('');

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

          loadProducts(contractInstance);
        } catch (error) {
          console.error('Error initializing web3:', error);
        }
      }
    };

    initWeb3();
  }, []);

  const loadProducts = async (contractInstance) => {
    try {
      const productCount = await contractInstance.methods.productCount().call();
      const loadedProducts = [];

      for (let i = 1; i <= productCount; i++) {
        const product = await contractInstance.methods.getProduct(i).call();
        loadedProducts.push({
          id: product.id,
          name: product.name,
          description: product.description,
          price: product.price,
          seller: product.seller,
          isAvailable: product.isAvailable
        });
      }

      setProducts(loadedProducts);
    } catch (error) {
      console.error('Error loading products:', error);
    }
  };

  const purchaseProduct = async (productId, quantity) => {
    try {
      const product = products.find(p => p.id === productId);
      const totalPrice = product.price * quantity;

      await contract.methods.purchaseProduct(productId, quantity)
        .send({ from: account, value: totalPrice });

      // Refresh products after purchase
      loadProducts(contract);
    } catch (error) {
      console.error('Error purchasing product:', error);
    }
  };

  return (
    <Container>
      <h2 className="mb-4">Available Products</h2>
      <Row>
        {products.map(product => (
          <Col md={4} key={product.id} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Card.Text>Price: {web3 ? web3.utils.fromWei(product.price, 'ether') : '0'} ETH</Card.Text>
                <Form.Group>
                  <Form.Label>Quantity</Form.Label>
                  <Form.Control type="number" min="1" defaultValue="1" />
                </Form.Group>
                <Button
                  variant="primary"
                  onClick={() => purchaseProduct(product.id, 1)}
                  disabled={!product.isAvailable}
                >
                  {product.isAvailable ? 'Purchase' : 'Sold Out'}
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Products; 