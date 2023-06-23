import React from 'react';
import dataModelFactory from "../models/dataModelFactory";

const UserCard = ({img, name, id}) => {
  // const userModel = dataModelFactory.createUserModel(userData);

  return (
      <div className="user-card">
        <div className="user-card-content">
          <div className="user-card-img">
            <img src={img} alt="image profile"/>
          </div>
          <div>
            <h2>{name}</h2>
            <p>Utilisateur ID {id}</p>
          </div>
        </div>
      </div>
  );
};

export default UserCard;
