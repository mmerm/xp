import React from 'react';
import BurgerMenu from './BurgerMenu';
import './MoreBadges.css';

const MoreBadges = ({ onBack, onNavigate, activePage = 'more-badges' }) => {
  return (
    <div className="more-badges">
      <header className="badges-header">
        <BurgerMenu onNavigate={onNavigate} />
        <h1 onClick={onBack} className="clickable-title">
          <span className="horizon">XP PLUS</span>
        </h1>
      </header>
      
      <div className="badges-content">
        <h2>More Badges</h2>
        <p>Coming Soon...</p>
        <button onClick={onBack}>Back</button>
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

export default MoreBadges;