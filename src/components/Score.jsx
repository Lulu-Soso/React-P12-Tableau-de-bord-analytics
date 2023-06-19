import React, { useEffect, useState } from 'react';
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';
import UserModel from "../models/UserModel";

const Score = ({ value }) => {
  const [rendered, setRendered] = useState(false);

  useEffect(() => {
    setRendered(true);
  }, []);

  if (!rendered) {
    return null; // Ne rend rien avant le premier rendu
  }

  const scaledValue = value / 1; // Calcul du pourcentage du score
  const data = [
    { name: 'Score', uv: scaledValue, fill: '#FF0101' },
    { name: 'Reste', uv: 1 - scaledValue },
  ];


  const style = {
    top: '50%',
    right: 0,
    transform: 'translate(0, -50%)',
    lineHeight: '24px',
  };

  return (
      <div>
        <h1>Score today</h1>
        <ResponsiveContainer width="100%" height={300}>
          <RadialBarChart cx="50%" cy="50%" innerRadius="10%" outerRadius="80%" barSize={10} data={data}>
            <RadialBar minAngle={15} label={{ position: 'insideStart', fill: '#fff' }} background clockWise dataKey="uv" />
            <Legend iconSize={10} layout="vertical" verticalAlign="middle" wrapperStyle={style} />
          </RadialBarChart>
        </ResponsiveContainer>
        <p>Score: {scaledValue * 100}% de votre objectif</p>
      </div>
  );
};

export default Score;
