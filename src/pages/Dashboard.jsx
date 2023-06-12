import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ApiService from '../services/apiService';
import Profile from '../components/Profile';
import Activity from '../components/Activity';
import Average from '../components/Average';
import Performance from '../components/Performance';
import UserModel from "../models/UserModel";
import ActivityModel from "../models/ActivityModel";
import AverageModel from "../models/AverageModel";

const Dashboard = () => {
  const [userProfile, setUserProfile] = useState(null);
  const [userActivity, setUserActivity] = useState(null);
  const [userAverage, setUserAverage] = useState(null);
  const [userPerformance, setUserPerformance] = useState(null);
  const { userId } = useParams();

  useEffect(() => {
    ApiService.getUserData(userId)
        .then(userData => {
          const formattedData = new UserModel(userData);
          setUserProfile(formattedData);
          return ApiService.getUserActivity(userId);
        })
        .then(activityData => {
          const formattedData = new ActivityModel(activityData);
          setUserActivity(formattedData);

          return ApiService.getUserAverage(userId);
        })
        .then(averageData => {
          const formattedData = new AverageModel(averageData)
          setUserAverage(formattedData)
          return ApiService.getUserPerformance(userId);
        })
        .then(performanceData => {
          setUserPerformance(performanceData);
        })
        .catch(error => {
          console.error('Error:', error);
        });
  }, [userId]);

  return (
      <div>
        <h1>Bonjour</h1>
        {userProfile && <Profile userData={userProfile} />}
        {userActivity && <Activity activityData={userActivity} />}
        {userAverage && <Average averageData={userAverage} />}
        {userPerformance && <Performance performanceData={userPerformance} />}
      </div>
  );
};

export default Dashboard;
