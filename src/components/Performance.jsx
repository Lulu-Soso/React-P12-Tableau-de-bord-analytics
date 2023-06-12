import React from 'react';

const Performance = ({ performanceData }) => {
  return (
      <div>
        <h2>User Performance</h2>
        <p>Energy: {performanceData.energy}</p>
        <p>Endurance: {performanceData.endurance}</p>
        <p>Strength: {performanceData.strength}</p>
        <p>Speed: {performanceData.speed}</p>
      </div>
  );
};

export default Performance;
