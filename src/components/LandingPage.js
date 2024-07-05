import React from 'react';
import ProductCard from '../components/ProductCard';
import './LandingPage.css';
import Header from './Header';

const products = [
  {
    id: 1,
    name: 'Product 1',
    description: 'This is a great product.',
    price: 29.99,
    image: 'https://via.placeholder.com/150'
  },
  {
    id: 2,
    name: 'Product 2',
    description: 'This is another great product.',
    price: 39.99,
    image: 'https://via.placeholder.com/150'
  },
  {
    id: 3,
    name: 'Product 3',
    description: 'You will love this product.',
    price: 49.99,
    image: 'https://via.placeholder.com/150'
  },
];

function LandingPage() {
  return (
    <div className="landing-page">
      
    <Header />
     
      <main className="main-content">
        <h2>Products</h2>
        <div className="product-list">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default LandingPage;
