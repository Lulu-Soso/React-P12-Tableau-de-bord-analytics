import React from 'react';

const Average = ({ averageData }) => {
  return (
      <div>
        <h2>Average Sessions</h2>
        <ul>
          {averageData.sessions.map(session => (
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
