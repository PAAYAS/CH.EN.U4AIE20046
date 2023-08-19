import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchTrainsSchedule } from '../api';

const SingleTrainPage = () => {
  const { trainId } = useParams();
  const [train, setTrain] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchTrainsSchedule();
        const selectedTrain = data.find(train => train.id === trainId);
        setTrain(selectedTrain);
      } catch (error) {
        console.error('Error fetching train details:', error);
      }
    };

    fetchData();
  }, [trainId]);

  return (
    <div className="single-train-page">
      {train ? (
        <div>
          <h2>{train.name} Details</h2>
          <p>Departure: {train.departureTime}</p>
          <p>Price: {train.price}</p>
          {/* Display seat availability and other details */}
        </div>
      ) : (
        <p>Loading train details...</p>
      )}
    </div>
  );
};

export default SingleTrainPage;
