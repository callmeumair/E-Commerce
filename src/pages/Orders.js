import React, { useState, useEffect } from 'react';
import { Container, Table, Alert } from 'react-bootstrap';
import Web3 from 'web3';
import ECommerceContract from '../contracts/ECommerce.json';

const Orders = () => {
  const [orders, setOrders] = useState([]);
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

          loadOrders(contractInstance);
        } catch (error) {
          console.error('Error initializing web3:', error);
        }
      }
    };

    initWeb3();
  }, []);

  const loadOrders = async (contractInstance) => {
    try {
      const orderCount = await contractInstance.methods.orderCount().call();
      const loadedOrders = [];

      for (let i = 1; i <= orderCount; i++) {
        const order = await contractInstance.methods.getOrder(i).call();
        if (order.buyer.toLowerCase() === account.toLowerCase()) {
          const product = await contractInstance.methods.getProduct(order.productId).call();
          loadedOrders.push({
            id: order.id,
            productName: product.name,
            quantity: order.quantity,
            totalPrice: order.totalPrice,
            isCompleted: order.isCompleted
          });
        }
      }

      setOrders(loadedOrders);
    } catch (error) {
      console.error('Error loading orders:', error);
    }
  };

  return (
    <Container>
      <h2 className="mb-4">My Orders</h2>
      {orders.length === 0 ? (
        <Alert variant="info">You haven't placed any orders yet.</Alert>
      ) : (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Product</th>
              <th>Quantity</th>
              <th>Total Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(order => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.productName}</td>
                <td>{order.quantity}</td>
                <td>{web3 ? web3.utils.fromWei(order.totalPrice, 'ether') : '0'} ETH</td>
                <td>{order.isCompleted ? 'Completed' : 'Pending'}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </Container>
  );
};

export default Orders; 