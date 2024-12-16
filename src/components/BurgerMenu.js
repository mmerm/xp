import React, { useState } from 'react';
import './BurgerMenu.css';

const BurgerMenu = ({ onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { id: 'personal-info', label: 'Personal information' },
    { id: 'fan-ids', label: 'Fan IDs' },
    { id: 'payment-info', label: 'Payment information' },
    { id: 'faqs', label: 'FAQs' },
    { id: 'wallet-export', label: 'Wallet Export' }
  ];

  const handleMenuClick = (itemId) => {
    setIsOpen(false);
    onNavigate(itemId);
  };

  return (
    <div className="burger-menu">
      <button className="burger-button" onClick={() => setIsOpen(!isOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </button>
      
      {isOpen && (
        <div className="menu-items">
          {menuItems.map((item) => (
            <div 
              key={item.id} 
              className="menu-item"
              onClick={() => handleMenuClick(item.id)}
            >
              {item.label}
              <div className="menu-line"></div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BurgerMenu; 