import React from 'react';

const Performance = ({ performanceData }) => {
  return (
      <div>
        <h2>Performance</h2>
        <p>User ID: {performanceData.userId}</p>
        <ul>
          {performanceData.performanceData.map((item, index) => (
              <li key={index}>
                {item.kind}: {item.value}
              </li>
          ))}
        </ul>
      </div>
  );
};

export default Performance;
