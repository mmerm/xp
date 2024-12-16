import React, { useState } from 'react';
import BurgerMenu from './BurgerMenu';
import BadgeCard from './BadgeCard';
import './MyRewards.css';

const MyRewards = ({ onBack, onNavigate, activePage = 'my-rewards' }) => {
  const [activeCategory, setActiveCategory] = useState('all');

  const menuCategories = [
    { key: 'all', label: 'ALL REWARDS' },
    { key: 'stadium', label: 'STADIUM' },
    { key: 'merch', label: 'MERCH' },
    { key: 'other', label: 'OTHER' },
  ];

  // Sample rewards badges data
  const rewardBadges = [
    { 
      id: 'r001', 
      title: 'Reward Badge #001\nCollection  2024/2025',
      image: '/images/Basketball_closeup.png'
    },
    { 
      id: 'r002', 
      title: 'Reward Badge #002\nCollection  2024/2025',
      image: '/images/Football_closeup.png'
    },
    { 
      id: 'r003', 
      title: 'Reward Badge#004\nCollection  2024/2025',
      image: '/images/Baseball_closeup.png'
    }
  ];

  const handleBadgeClick = (badge) => {
    // Handle badge click if needed
    console.log('Clicked reward badge:', badge);
  };

  return (
    <div className="my-rewards">
      <header className="rewards-header">
        <BurgerMenu onNavigate={onNavigate} />
        <h1 onClick={onBack} className="clickable-title">
          <span className="horizon">XP PLUS</span>
        </h1>
      </header>
      
      <nav className="menu-bar">
        {menuCategories.map((category) => (
          <button
            key={category.key}
            className={`menu-button ${activeCategory === category.key ? 'active' : ''}`}
            onClick={() => setActiveCategory(category.key)}
          >
            {category.label}
          </button>
        ))}
      </nav>

      <div className="rewards-content">
        <h2>My Rewards</h2>
        <div className="badge-list">
          {rewardBadges.map((badge, index) => (
            <BadgeCard
              key={badge.id}
              badge={badge}
              onClick={handleBadgeClick}
              style={{ zIndex: rewardBadges.length - index }}
            />
          ))}
        </div>
      </div>

      <footer className="app-footer">
        <button 
          onClick={() => onNavigate('more-badges')}
          className={activePage === 'more-badges' ? 'active' : ''}
        >
          More Badges
        </button>
        <button 
          onClick={() => onNavigate('my-rewards')}
          className={activePage === 'my-rewards' ? 'active' : ''}
        >
          My Rewards
        </button>
      </footer>
    </div>
  );
};

export default MyRewards;