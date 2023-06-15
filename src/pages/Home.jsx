import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
      <div>
        <h1>Projet 12 OpenClassrooms</h1>
        <h2>Développez un tableau de bord d'analytics avec React</h2>
        <p>Sélectionner un utilisateur:</p>
        <ul>
          <li>
            <NavLink to="/dashboard/12">Utilisateur ID 12</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/18">Utilisateur ID 18</NavLink>
          </li>
        </ul>
      </div>
  );
};

export default Home;

