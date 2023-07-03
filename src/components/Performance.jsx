import React from 'react';
import {PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, ResponsiveContainer} from 'recharts';
import dataModelFactory from "../models/dataModelFactory";

const Performance = ({performanceData}) => {
  const performanceModel = dataModelFactory.createPerformanceModel(performanceData)


  const radarData = performanceModel.performanceData.map(item => ({
    subject: item.kind,
    A: item.value,
  }));

  const formatSubject = (value) => {
    switch (value) {
      case 'cardio':
        return 'Cardio';
      case 'energy':
        return 'Energie';
      case 'endurance':
        return 'Endurance';
      case 'strength':
        return 'Force';
      case 'speed':
        return 'Vitesse';
      case 'intensity':
        return 'Intensité';
      default:
        return value;
    }
  };

  return (
      <div className="performance">
        <div className="performance-chart">
          <ResponsiveContainer width="100%" height="100%" >
            <RadarChart cx="50%" cy="54%" innerRadius={0} outerRadius="70%" data={radarData} >
              <PolarGrid stroke="#ffffff" />
              <PolarAngleAxis dataKey="subject" tickFormatter={formatSubject} stroke="#ffffff" />
              {/*<PolarRadiusAxis/>*/}
              <Radar name="Performance" dataKey="A" stroke="#FF0101" fill="#FF0101" fillOpacity={0.6} />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>
  );
};

export default Performance;
