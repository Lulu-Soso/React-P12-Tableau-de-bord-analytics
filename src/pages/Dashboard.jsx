import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import ApiService from '../services/apiService';
import Profile from '../components/Profile';
import Activity from '../components/Activity';
import Average from '../components/Average';
import Performance from '../components/Performance';
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Card from "../components/card";
import caloriesIcon from "../assets/img/calories-icon.png"
import proteinIcon from "../assets/img/protein-icon.png"
import carbsIcon from "../assets/img/carbs-icon.png"
import fatIcon from "../assets/img/fat-icon.png"
import Score from "../components/Score";
import dataModelFactory from '../models/dataModelFactory'

const Dashboard = () => {
  const [userProfile, setUserProfile] = useState(null);
  const [userActivity, setUserActivity] = useState(null);
  const [userAverage, setUserAverage] = useState(null);
  const [userPerformance, setUserPerformance] = useState(null);
  const {userId} = useParams();

  useEffect(() => {
    ApiService.getUserData(userId)
        .then(userData => {
          setUserProfile(userData);
          return ApiService.getUserActivity(userId);
        })
        .then(activityData => {
          setUserActivity(activityData);
          return ApiService.getUserAverage(userId);
        })
        .then(averageData => {
          setUserAverage(averageData)
          return ApiService.getUserPerformance(userId);
        })
        .then(performanceData => {
          setUserPerformance(performanceData);
        })
        .catch(error => {
          console.error('Error:', error);
        });
  }, [userId]);


  const userModel = userProfile ? dataModelFactory.createUserModel(userProfile) : null;


  return (
      <>
        <div className="sidebar-content">
          <Sidebar/>
        </div>
        <div className="dashboard">
          <div className="top">
            <Header/>
          </div>
          <div className="content">
            <div className="welcome">
              {userProfile && <Profile userData={userProfile}/>}
            </div>
            <div className="infos-content">
              <div className="charts-content">
                <div className="chart-activity">
                  {userActivity && <Activity activityData={userActivity}/>}
                </div>
                <div className="box-chart">
                  <div className="box average">
                    {userAverage && <Average averageData={userAverage}/>}
                  </div>
                  <div className="box performance">
                    {userPerformance && <Performance performanceData={userPerformance}/>}
                  </div>
                  <div className="box">
                    {userId === '12' && userModel && (
                        <Score
                            value={userModel.todayScore}
                        />
                    )}

                    {userId === '18' && userModel && (
                        <Score
                            value={userModel.score}
                        />
                    )}
                  </div>
                </div>
              </div>
              <aside className="aside">
                <Card img={caloriesIcon} value={userModel?.calorieCount} symbol="kCal" category="Calories"/>
                <Card img={proteinIcon} value={userModel?.proteinCount} symbol="kg" category="Protéines"/>
                <Card img={carbsIcon} value={userModel?.carbohydrateCount} symbol="kg" category="Glucides"/>
                <Card img={fatIcon} value={userModel?.lipidCount} symbol="kg" category="Lipides"/>
              </aside>
            </div>
          </div>
        </div>
      </>
  );
};

export default Dashboard;
