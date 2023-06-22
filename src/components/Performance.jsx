import React, { useEffect, useState } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import PerformanceModel from "../models/PerformanceModel";
import dataModelFactory from "../models/dataModelFactory";

const Performance = ({ performanceData }) => {
  // const performanceModel = new PerformanceModel(performanceData)
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
      <div>
        <ResponsiveContainer width="100%" height={350}>
          <RadarChart cx="50%" cy="39%" outerRadius="60%" data={radarData} >
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" tickFormatter={formatSubject} />
            <PolarRadiusAxis />
            <Radar name="Performance" dataKey="A" stroke="#FF0101" fill="#FF0101" fillOpacity={0.6} />
          </RadarChart>
        </ResponsiveContainer>
      </div>
  );
};

export default Performance;
