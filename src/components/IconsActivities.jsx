import React from 'react';
import iconYoga from '../assets/img/icon-yoga.png'
import iconNatation from '../assets/img/icon-natation.png'
import iconBike from '../assets/img/icon-bike.png'
import iconDumbbells from '../assets/img/icon-dumbbells.png'

const IconsActivities = () => {
  return (
      <div className="icons-activities">
        <img src={iconYoga} alt="logo yoga"/>
        <img src={iconNatation} alt="logo natation"/>
        <img src={iconBike} alt="logo vélo"/>
        <img src={iconDumbbells} alt="logo altères"/>
      </div>
  );
};

export default IconsActivities;
