import React from 'react';
import {NavLink} from "react-router-dom";

const Navigation = () => {
  return (
      // <div className="navigation">
        <ul className="navigation">
          <li>
            <NavLink to="/">
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink to="/user/:id">
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
      // </div>
  );
};

export default Navigation;
