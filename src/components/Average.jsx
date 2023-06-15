import React from 'react';
import AverageModel from "../models/AverageModel";

const Average = ({ averageData }) => {
  const averageModel = new AverageModel(averageData)

  return (
      <div>
        <h2>Average Sessions</h2>
        <ul>
          {averageModel.sessions.map(session => (
              <li key={session.day}>
                <strong>Day:</strong> {session.day}
                <strong>Session length:</strong> {session.sessionLength}
              </li>
          ))}
        </ul>
      </div>
  );
};

export default Average;
