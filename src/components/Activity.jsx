import React from 'react';

const Activity = ({ activityData }) => {
  return (
      <div>
        <h2>Activity</h2>
        {activityData.userId}
        <ul>
          {activityData.sessions.map(session => (
              <li key={session.day}>
                <strong>Day:</strong> {session.day}, <strong>Kilogram:</strong> {session.kilogram}, <strong>Calories:</strong> {session.calories}
              </li>
          ))}
        </ul>
      </div>
  );
};

export default Activity;





