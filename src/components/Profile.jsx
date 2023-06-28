import React from 'react';
import UserModel from "../models/UserModel";
import createUserModel from "../models/dataModelFactory";
import dataModelFactory from "../models/dataModelFactory"

const Profile = ({userData}) => {
  // const userModel = new UserModel(userData)
  const userModel = dataModelFactory.createUserModel(userData);
  return (
      <div className="welcome">
        <h2>Bonjour <span>{userModel.firstName}</span></h2>
        <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      </div>
  );
};

export default Profile;
