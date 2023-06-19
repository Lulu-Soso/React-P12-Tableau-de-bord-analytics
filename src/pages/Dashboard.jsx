import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import ApiService from '../services/apiService';
import Profile from '../components/Profile';
import Activity from '../components/Activity';
import Average from '../components/Average';
import Performance from '../components/Performance';
// import UserModel from "../models/UserModel";
import ActivityModel from "../models/ActivityModel";
// import AverageModel from "../models/AverageModel";
// import PerformanceModel from "../models/PerformanceModel";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Card from "../components/card";
import UserModel from "../models/UserModel";
import caloriesIcon from "../assets/img/calories-icon.png"
import proteinIcon from "../assets/img/protein-icon.png"
import carbsIcon from "../assets/img/carbs-icon.png"
import fatIcon from "../assets/img/fat-icon.png"
import Score from "../components/Score";

const Dashboard = () => {
  const [userProfile, setUserProfile] = useState(null);
  const [userActivity, setUserActivity] = useState(null);
  const [userAverage, setUserAverage] = useState(null);
  const [userPerformance, setUserPerformance] = useState(null);
  const {userId} = useParams();

  useEffect(() => {
    ApiService.getUserData(userId)
        .then(userData => {
          // const formattedData = new UserModel(userData);
          // setUserProfile(formattedData);
          setUserProfile(userData);
          return ApiService.getUserActivity(userId);
        })
        .then(activityData => {
          // const formattedData = new ActivityModel(activityData);
          // setUserActivity(formattedData);
          setUserActivity(activityData);
          return ApiService.getUserAverage(userId);
        })
        .then(averageData => {
          // const formattedData = new AverageModel(averageData)
          // setUserAverage(formattedData)
          setUserAverage(averageData)
          return ApiService.getUserPerformance(userId);
        })
        .then(performanceData => {
          // const formattedData = new PerformanceModel(performanceData){
          // setUserPerformance(formattedData)
          setUserPerformance(performanceData);
        })
        .catch(error => {
          console.error('Error:', error);
        });
  }, [userId]);

  const userModel = userProfile ? new UserModel(userProfile) : null;


  return (
      <>
        {/*//   <div className="container">*/}

      {/*<div className="main">*/}
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
                  <div className="box">
                    {userAverage && <Average averageData={userAverage}/>}
                  </div>
                  <div className="box">
                    {/*{userPerformance && <Performance performanceData={userPerformance}/>}*/}
                    {userPerformance && <Performance performanceData={userPerformance}/>}
                  </div>
                  <div className="box">
                    {/*<Score value={userModel?.todayScore} />*/}
                    {/*<Score />*/}
                    {/*{userId === '12' && <Score value={userModel?.todayScore} />}*/}
                    {/*{userId === '18' && <Score value={userModel?.score} />}*/}
                    {/*{userId === '12' && <Score value={userModel} useTodayScore={true} />}*/}
                    {/*{userId === '18' && <Score value={userModel} useTodayScore={false} />}*/}

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

                    {/*<Score value={userId === '12' ? userModel.todayScore : userModel.score} />*/}

                    {/*{userProfile && <Score userData={userProfile} />}*/}
                  </div>
                </div>
                {/*<div>*/}
                {/*  <Score />*/}
                {/*<Score userData={userModel?.todayScore} />*/}
                {/*<Score value={userModel?.todayScore} />*/}
                {/*</div>*/}
              </div>
              <aside className="aside">
                {/*{userProfile && <Card img={caloriesIcon} value={userProfile.calorieCount} symbol="kCal" category="Calories"/>}*/}
                {/*{userProfile &&<Card img={proteinIcon} value={userProfile?.proteinCount} symbol="kg" category="Protéines"/>}*/}
                {/*{userProfile &&<Card img={carbsIcon} value={userProfile?.carbohydrateCount} symbol="kg" category="Glucides"/>}*/}
                {/*{userProfile &&<Card img={fatIcon} value={userProfile?.lipidCount} symbol="kg" category="Lipides"/>}*/}
                <Card img={caloriesIcon} value={userModel?.calorieCount} symbol="kCal" category="Calories"/>
                <Card img={proteinIcon} value={userModel?.proteinCount} symbol="kg" category="Protéines"/>
                <Card img={carbsIcon} value={userModel?.carbohydrateCount} symbol="kg" category="Glucides"/>
                <Card img={fatIcon} value={userModel?.lipidCount} symbol="kg" category="Lipides"/>
              </aside>
            </div>
          </div>
        </div>
        {/*</div>*/}
      </>
      // </div>
  );
};

export default Dashboard;
