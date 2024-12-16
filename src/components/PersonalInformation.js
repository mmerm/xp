import React from 'react';
import './PersonalInformation.css';
import BurgerMenu from './BurgerMenu';

const PersonalInformation = ({ onBack }) => {
  return (
    <div className="personal-info">
      <header className="personal-info-header">
        <BurgerMenu onNavigate={() => {}} />
        <h1 onClick={onBack} className="clickable-title">
          <span className="horizon">XP PLUS</span>
        </h1>
      </header>
      
      <form className="personal-info-form">
        <input type="text" placeholder="Name" className="form-input" />
        <input type="text" placeholder="Familiy name" className="form-input" />
        <input type="text" placeholder="Street, No." className="form-input" />
        <input type="text" placeholder="Zip code / City" className="form-input" />
        <input type="text" placeholder="Country" className="form-input" />
        <input type="text" placeholder="Fan ID" className="form-input" />
        <input type="email" placeholder="E-Mail" className="form-input" />
        <input type="tel" placeholder="Phone" className="form-input" />
        
        <button type="button" className="back-button" onClick={onBack}>
          Back
        </button>
      </form>
    </div>
  );
};

export default PersonalInformation; 