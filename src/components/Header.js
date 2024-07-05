import React from 'react';
import SearchBar from './SearchBar';
import ProfileIcon from './ProfileIcon';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="logo">Marketplace</h1>
        <SearchBar />
        <button className="add-product-button">Add New Product</button>
        <ProfileIcon />
      </div>
    </header>
  );
}

export default Header;
