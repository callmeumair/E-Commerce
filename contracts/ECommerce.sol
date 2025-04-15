// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ECommerce {
    struct Product {
        uint id;
        string name;
        string description;
        uint price;
        address seller;
        bool isAvailable;
    }

    struct Order {
        uint id;
        uint productId;
        address buyer;
        uint quantity;
        uint totalPrice;
        bool isCompleted;
    }

    mapping(uint => Product) public products;
    mapping(uint => Order) public orders;
    uint public productCount;
    uint public orderCount;

    event ProductAdded(uint id, string name, uint price, address seller);
    event ProductPurchased(uint orderId, uint productId, address buyer, uint quantity, uint totalPrice);

    function addProduct(string memory _name, string memory _description, uint _price) public {
        productCount++;
        products[productCount] = Product(
            productCount,
            _name,
            _description,
            _price,
            msg.sender,
            true
        );
        emit ProductAdded(productCount, _name, _price, msg.sender);
    }

    function purchaseProduct(uint _productId, uint _quantity) public payable {
        Product storage product = products[_productId];
        require(product.isAvailable, "Product is not available");
        require(msg.value >= product.price * _quantity, "Insufficient payment");

        orderCount++;
        orders[orderCount] = Order(
            orderCount,
            _productId,
            msg.sender,
            _quantity,
            product.price * _quantity,
            true
        );

        // Transfer funds to seller
        payable(product.seller).transfer(product.price * _quantity);
        
        emit ProductPurchased(orderCount, _productId, msg.sender, _quantity, product.price * _quantity);
    }

    function getProduct(uint _productId) public view returns (
        uint id,
        string memory name,
        string memory description,
        uint price,
        address seller,
        bool isAvailable
    ) {
        Product storage product = products[_productId];
        return (
            product.id,
            product.name,
            product.description,
            product.price,
            product.seller,
            product.isAvailable
        );
    }

    function getOrder(uint _orderId) public view returns (
        uint id,
        uint productId,
        address buyer,
        uint quantity,
        uint totalPrice,
        bool isCompleted
    ) {
        Order storage order = orders[_orderId];
        return (
            order.id,
            order.productId,
            order.buyer,
            order.quantity,
            order.totalPrice,
            order.isCompleted
        );
    }
} 