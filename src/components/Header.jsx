import React from 'react';
import Navigation from "./Navigation";
import Logo from "./Logo";

const Header = () => {
  return (
      <div className="header">
        <Logo />
        <Navigation />
      </div>
  );
};

export default Header;
