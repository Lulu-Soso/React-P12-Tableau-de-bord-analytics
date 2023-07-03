import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import UserCard from "../components/UserCard";
import ApiService from '../services/apiService';
import dataModelFactory from "../models/dataModelFactory";
import imgCecilia from '../assets/img/imgCecilia.png'
import imgKarl from '../assets/img/imgKarl.png'

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
        <p className="text-choice">Sélectionnez un utilisateur :</p>
        <div className="users-home">
          <NavLink to="/dashboard/12">
              {userModel12 && <UserCard img={imgKarl} name={userModel12?.firstName} id={userModel12?.id} />}
          </NavLink>
          <NavLink to="/dashboard/18">
            {userModel18 && <UserCard img={imgCecilia} name={userModel18?.firstName} id={userModel18?.id} />}
          </NavLink>
        </div>
      </div>
  );
};

export default Home;
