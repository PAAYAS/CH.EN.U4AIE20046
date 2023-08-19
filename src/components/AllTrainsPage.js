import React, { useEffect, useState } from 'react';
import { fetchTrainsSchedule } from '../api';
import TrainCard from './TrainCard';

const AllTrainsPage = () => {
  const [trains, setTrains] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchTrainsSchedule();
        setTrains(data);
      } catch (error) {
        console.error('Error fetching train schedule:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="all-trains-page">
      <h2>All Trains Schedule</h2>
      <div className="train-list">
        {trains.map(train => (
          <TrainCard key={train.id} train={train} />
        ))}
      </div>
    </div>
  );
};

export default AllTrainsPage;
