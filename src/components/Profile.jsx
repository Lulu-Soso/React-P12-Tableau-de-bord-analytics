import React from 'react';
import UserModel from "../models/UserModel";
import Card from "./card";

const Profile = ({userData}) => {
  const userModel = new UserModel(userData)
  return (
      <div className="welcome">
      <h2>Bonjour <span>{userModel.firstName}</span></h2>
        <p>Félicitation ! Vous avez explosé vos objectifs hier </p>
      {/*<p>{userModel.calorieCount}kCal <span>Calories</span></p>*/}
      {/*<p>{userModel.proteinCount}g <span>Protéines</span></p>*/}
      {/*<p>{userModel.carbohydrateCount}g <span>Glucides</span></p>*/}
      {/*<p>{userModel.lipidCount}g <span>Lipides</span></p>*/}
      {/*  <Card title="Calorie Count" value={userModel.calorieCount} />*/}
      {/*  <Card value={userModel.calorieCount} />*/}
      {/*  <Card value={userModel.proteinCount} />*/}
      {/*  <Card value={userModel.carbohydrateCount} />*/}
      {/*  <Card value={userModel.lipidCount} />*/}
      </div>
  );
};

export default Profile;
