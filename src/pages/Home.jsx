import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import UserCard from "../components/UserCard";
import ApiService from '../services/apiService';
import dataModelFactory from "../models/dataModelFactory";
import imgCecilia from '../assets/img/Cecilia.png'
import imgKarl from '../assets/img/Karl.png'

const Home = () => {
  const [user12Data, setUser12Data] = useState(null);
  const [user18Data, setUser18Data] = useState(null);

  useEffect(() => {
    ApiService.getUserData(12)
        .then(userData => {
          setUser12Data(userData);
        })
        .catch(error => {
          console.error('Error:', error);
        });

    ApiService.getUserData(18)
        .then(userData => {
          setUser18Data(userData);
        })
        .catch(error => {
          console.error('Error:', error);
        });
  }, []);

  const userModel12 = user12Data ? dataModelFactory.createUserModel(user12Data) : null;
  const userModel18 = user18Data ? dataModelFactory.createUserModel(user18Data) : null;

  return (
      <div className="home">
        <h1>Projet 12 OpenClassrooms</h1>
        <h2>Développez un tableau de bord d'analytics avec React</h2>
        <p className="text-choice">Sélectionnez un utilisateur :</p>
        <div className="users-home">
          <NavLink to="/dashboard/12">
            {/*<div className="profile-home">*/}
              {/*<div className="profile-img">*/}
              {userModel12 && <UserCard img={imgKarl} name={userModel12?.firstName} id={userModel12?.id} />}
              {/*</div>*/}
              {/*<p>Utilisateur ID 12</p>*/}
            {/*</div>*/}
          </NavLink>
          <NavLink to="/dashboard/18">
            {/*<div className="profile-home">*/}
              {/*<div className="profile-img">*/}
            {userModel18 && <UserCard img={imgCecilia} name={userModel18?.firstName} id={userModel18?.id} />}
              {/*</div>*/}
              {/*<p>Utilisateur ID 18</p>*/}
            {/*</div>*/}
          </NavLink>
        </div>
      </div>
  );
};

export default Home;
