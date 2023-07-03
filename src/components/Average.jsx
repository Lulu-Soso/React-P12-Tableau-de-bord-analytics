import React, {useEffect, useState} from 'react';
// import AverageModel from "../models/AverageModel";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import dataModelFactory from "../models/dataModelFactory";

const Average = ({ averageData }) => {
  // const averageModel = new AverageModel(averageData)
  const averageModel = dataModelFactory.createAverageModel(averageData)
  // console.log(averageModel)


  const lineChartData = averageModel.sessions.map(session => ({
    day: session.day,
    sessionLength: session.sessionLength,
  }));

  const formatDay = (value) => {
    switch (value) {
      case 1:
        return 'L';
      case 2:
        return 'M';
      case 3:
        return 'M';
      case 4:
        return 'J';
      case 5:
        return 'V';
      case 6:
        return 'S';
      case 7:
        return 'D';
      default:
        return value;
    }
  };

  const CustomAverageTooltip = ({ payload }) => {
    if (payload && payload.length) {
      const sessionLength = payload[0].payload.sessionLength;

      return (
          <div className="average-tooltip">
            <p className="average-session-tooltip">{sessionLength} mn</p>
          </div>
      );
    }

    return null;
  };



  return (
      <div className="average">
        <div className="average-title">
          <p>Durée moyenne des sessions</p>
        </div>
        <div className="average-chart">
        <ResponsiveContainer width="100%" height={150}>
          <LineChart cx="50%" cy="47%" outerRadius="60%"
              data={lineChartData}
              margin={{
                top: 5,
                right: 20,
                left: 20,
                bottom: 40,
              }}
          >
            <CartesianGrid horizontal={false} vertical={false} />
            <XAxis dataKey="day" axisLine={false} tickLine={false} tickFormatter={formatDay} tickMargin={30} tick={{fill: '#ffffff'}}  />
            <Tooltip content={<CustomAverageTooltip />} />
            {/*<Legend />*/}
            <Line type="monotone" dataKey="sessionLength" stroke="#ffffff" strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
        </div>
      </div>
  );
};

export default Average;
