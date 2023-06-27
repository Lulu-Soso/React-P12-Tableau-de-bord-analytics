import React from 'react';
import {RadialBar, RadialBarChart, ResponsiveContainer} from 'recharts';

const Score = ({value}) => {

  const convertToPercentage = (value) => {
    return Math.round(value * 100);
  };

  const maxScore = 100
  const convertedValue = convertToPercentage(value);
  const data = [
    {name: 'Score', value: convertedValue, fill: '#FF0000'},
    {name: 'Score max', value: maxScore - value, fill: '#FBFBFB'}
  ];


  return (
      <div className="score">
        <h2>Score</h2>
        {/*<ResponsiveContainer width="100%" height={273}>*/}
        <div className="score-container">
          <ResponsiveContainer width="100%" minHeight={200}>
            <RadialBarChart cx="50%" cy="50%" innerRadius="150%" outerRadius={0} barSize={12} data={data}>
              <RadialBar minAngle={15} background clockWise dataKey="value" cornerRadius={10}/>
            </RadialBarChart>
          </ResponsiveContainer>
        </div>
        <div className="text-score">
          <span>{convertedValue}%</span>
          <p>de votre objectif</p>
        </div>

      </div>
  );
};

export default Score;
