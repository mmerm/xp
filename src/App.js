import React, { useState } from 'react';
import BadgeCard from './components/BadgeCard';
import BadgeDetails from './components/BadgeDetails';
import LoadingScreen from './components/LoadingScreen';
import MoreBadges from './components/MoreBadges'; 
import MyRewards from './components/MyRewards'; 
import BurgerMenu from './components/BurgerMenu';
import PersonalInformation from './components/PersonalInformation';
import './App.css';

const App = () => {
  const [selectedBadge, setSelectedBadge] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all'); // Track active menu category
  const [loading, setLoading] = useState(true); // State for loading screen
  const [currentScreen, setCurrentScreen] = useState('home'); // Track the current screen
  const [currentView, setCurrentView] = useState('home');

  const badges = [
    { 
      id: '001', 
      title: 'Soccer Badge\nCollection 2024 / 2025', 
      image: '/images/Still_Soccer.png', 
      gif: '/images/gifs/FBALL.gif' 
    },
    { 
      id: '002', 
      title: 'Icehockey Badge\nCollection 2024 / 2025', 
      image: '/images/Still_Icehockey.png', 
      gif: '/images/gifs/ICEHOCKEY.gif' 
    },
    { 
      id: '003', 
      title: 'Handball Badge\nCollection 2024 / 2025', 
      image: '/images/Still_Handball.png', 
      gif: '/images/gifs/HANDBALL.gif' 
    },
    { 
      id: '004', 
      title: 'Football Badge\nCollection 2024 / 2025', 
      image: '/images/Still_Football.png', 
      gif: '/images/gifs/AF.gif' 
    },
    { 
      id: '005', 
      title: 'Basketball Badge\nCollection 2024 / 2025', 
      image: '/images/Still_Basketball.png', 
      gif: '/images/gifs/BBALL.gif' 
    },
    { 
      id: '006', 
      title: 'Baseball Badge\nCollection 2024 / 2025', 
      image: '/images/Still_Baseball.png', 
      gif: '/images/gifs/BASEBALL.gif' 
    },
  ];  

  const menuCategories = [
    { key: 'all', label: 'All Badges' },
    { key: 'soccer', label: 'Target Badges' },
    { key: 'hockey', label: 'Loyalty Badges' },
    { key: 'official', label: 'Official Badges' },
  ];

  const handleMenuNavigation = (view) => {
    if (view === 'more-badges' || view === 'my-rewards') {
      setCurrentScreen(view);  // Update currentScreen instead of currentView
    } else {
      setCurrentView(view);
      setCurrentScreen('home');
    }
  };

  const handleTitleClick = () => {
    setCurrentView('home');
    setCurrentScreen('home');
    setSelectedBadge(null);
  };

  // If still loading, show the loading screen
  if (loading) {
    return <LoadingScreen onContinue={() => setLoading(false)} />;
  }

  // Check for menu navigation views first
  if (currentView === 'personal-info') {
    return <PersonalInformation onBack={() => setCurrentView('home')} />;
  }

  // Then check for screen changes
  if (currentScreen === 'more-badges') {
    return <MoreBadges 
      onBack={() => setCurrentScreen('home')} 
      onNavigate={handleMenuNavigation}
      activePage={currentScreen}  // Pass the current screen as activePage
    />;
  }

  if (currentScreen === 'my-rewards') {
    return <MyRewards 
      onBack={() => setCurrentScreen('home')} 
      onNavigate={handleMenuNavigation}
      activePage={currentScreen}  // Pass the current screen as activePage
    />;
  }

  return (
    <div className="app">
      <header className="app-header">
        <BurgerMenu onNavigate={handleMenuNavigation} />
        <h1 onClick={handleTitleClick} className="clickable-title">
          <span className="horizon">XP PLUS</span>
        </h1>
      </header>

      {/* Menu bar */}
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

      <main className="app-content">
        {selectedBadge ? (
          <BadgeDetails badge={selectedBadge} onBack={() => setSelectedBadge(null)} />
        ) : (
          <div className="badge-list">
            {badges.map((badge, index) => (
              <BadgeCard
                key={badge.id}
                badge={badge}
                onClick={setSelectedBadge}
                style={{ zIndex: badges.length - index }} // Ensure proper stacking order
              />
            ))}
          </div>
        )}
      </main>

      <footer className="app-footer">
        <button 
          onClick={() => handleMenuNavigation('more-badges')}
          className={currentScreen === 'more-badges' ? 'active' : ''}
        >
          More Badges
        </button>
        <button 
          onClick={() => handleMenuNavigation('my-rewards')}
          className={currentScreen === 'my-rewards' ? 'active' : ''}
        >
          My Rewards
        </button>
      </footer>
    </div>
  );
};

export default App;