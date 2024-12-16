import React from 'react';
import './BadgeCard.css';

const BadgeCard = ({ badge, onClick }) => {
  // Split the title into two parts
  const [mainTitle, subTitle] = badge.title.split('\n');

  return (
    <div className="badge-card" onClick={() => onClick(badge)}>
      <h3 className="badge-title">
        {mainTitle}
        <br />
        <span className="badge-subtitle">{subTitle}</span>
      </h3>
      <img src={badge.image} alt={badge.title} className="badge-image" />
    </div>
  );
};

export default BadgeCard;
