import React from 'react';
import {NavLink} from "react-router-dom";

const Navigation = () => {
  return (
        <ul className="navigation">
          <li>
            <NavLink to="/">
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink to="/user/#">
              Profile
            </NavLink>
          </li>
          <li>
            <NavLink to="/#">
              Réglage
            </NavLink>
          </li>
          <li>
            <NavLink to="/#">
              Communauté
            </NavLink>
          </li>
        </ul>
  );
};

export default Navigation;
