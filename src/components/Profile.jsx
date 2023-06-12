import React from 'react';

const Profile = ({userData}) => {
  return (
      <>
      <p>{userData.firstName}</p>
      <p>{userData.calorieCount}</p>
      </>
  );
};

export default Profile;
