# Ecom - Decentralized E-Commerce Platform

Ecom is a full-stack decentralized e-commerce application built on the Ethereum blockchain. It demonstrates how to create a decentralized marketplace without relying on traditional databases.

## Features

- Decentralized product listing and purchasing
- Smart contract-based transactions
- Transparent order history
- Secure payment processing
- Modern React-based user interface

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- MetaMask browser extension
- Ganache (for local development)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/ethereact.git
cd ethereact
```

2. Install dependencies:
```bash
npm install
```

3. Start Ganache:
- Download and install Ganache from https://www.trufflesuite.com/ganache
- Start Ganache and keep it running

4. Compile and deploy the smart contract:
```bash
truffle compile
truffle migrate
```

5. Start the development server:
```bash
npm start
```

## Usage

1. Open your browser and navigate to `http://localhost:3000`
2. Connect your MetaMask wallet to the local Ganache network
3. Import one of the Ganache accounts into MetaMask
4. Start using the application!

## Project Structure

- `contracts/` - Smart contracts
- `src/` - React application source code
  - `components/` - Reusable React components
  - `pages/` - Main application pages
  - `contracts/` - Compiled contract artifacts

## Smart Contract

The main smart contract (`ECommerce.sol`) handles:
- Product listing
- Order processing
- Payment handling
- Inventory management

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Ethereum Foundation
- Truffle Suite
- React.js
- Bootstrap 