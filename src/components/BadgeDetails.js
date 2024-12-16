import React from 'react';
import './BadgeDetails.css';

const BadgeDetails = ({ badge, onBack }) => {
  return (
    <div className="badge-details">
      <header className="details-header">
        <h1>{badge.title.split('\n').map((line, i) => (
          <React.Fragment key={i}>
            {line}
            {i === 0 && <br />}
          </React.Fragment>
        ))}</h1>
      </header>

      <div className="details-image-container">
        <img src={badge.gif} alt={badge.title} className="details-image" />
      </div>

      <section className="details-content">
        <h2>Badge exclusive 1st edition</h2>
        <p>
          This exclusive collection is for everyone who has been part of our movement since day one!
          As long as you hold this piece, you are entitled to a lifelong discount on all badges!
        </p>

        <div className="buttons-container">
          <div className="attributes-container">
            <button className="attribute-button">Milestones</button>
            <button className="attribute-button">Achievements</button>
            <button className="attribute-button">Rewards</button>
          </div>
          
          <button className="back-button" onClick={onBack}>
            Back
          </button>
        </div>
      </section>
    </div>
  );
};

export default BadgeDetails;