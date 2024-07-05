import React, { useState } from 'react';
import './AdminDashboard.css';
const AdminDashboard = () => {
  const [pendingProducts, setPendingProducts] = useState([
    {
      _id: '1',
      name: 'Vintage Camera',
      seller: 'John Doe',
      description: 'A vintage camera from the 1950s in excellent condition.',
    },
    {
      _id: '2',
      name: 'Mountain Bike',
      seller: 'Jane Smith',
      description: 'A sturdy mountain bike suitable for all terrains.',
    },
    {
      _id: '3',
      name: 'Electric Guitar',
      seller: 'Mike Johnson',
      description: 'An electric guitar with a sleek design and great sound quality.',
    },
  ]);

  const handleApprove = (id) => {
    // Simulate approving the product
    setPendingProducts(pendingProducts.filter(product => product._id !== id));
    console.log(`Product ${id} approved`);
  };

  const handleReject = (id) => {
    // Simulate rejecting the product
    setPendingProducts(pendingProducts.filter(product => product._id !== id));
    console.log(`Product ${id} rejected`);
  };

  return (
    <div className="admin-dashboard">
      <h1>Pending Products</h1>
      <table>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Seller</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {pendingProducts.map(product => (
            <tr key={product._id}>
              <td>{product.name}</td>
              <td>{product.seller}</td>
              <td>{product.description}</td>
              <td>
                <button onClick={() => handleApprove(product._id)}>Approve</button>
                <button onClick={() => handleReject(product._id)}>Reject</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;
