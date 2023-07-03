import React from 'react';

const UserCard = ({img, name, id}) => {

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
