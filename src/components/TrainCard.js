import React from 'react';
import { Link } from 'react-router-dom';

const TrainCard = ({ train }) => {
  return (
    <div className="train-card">
      <h3>{train.name}</h3>
      <p>Departure: {train.departureTime}</p>
      <p>Price: {train.price}</p>
      {/* Display seat availability and other information */}
      <Link to={`/train/${train.id}`}>View Details</Link>
    </div>
  );
};

export default TrainCard;
