import React from 'react';
import logo from "../assets/img/logo.png";

const PreLoader = () => {
  return (
      <div className="loading-screen">
        <div className="loading">
            <span>
              <img src={logo} alt="Logo"/>
            </span>
        </div>
      </div>
  );
};

export default PreLoader;
