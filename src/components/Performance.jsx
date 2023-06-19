import React, { useEffect, useState } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

const Performance = ({ performanceData }) => {
  const [rendered, setRendered] = useState(false);

  useEffect(() => {
    setRendered(true);
  }, []);

  // if (!rendered || !performanceData || !performanceData.data) {
  if (!rendered) {
    return null; // Ne rend rien avant le premier rendu ou si les données de performance sont manquantes
  }

  const { data, kind } = performanceData;

  const radarData = data.map(item => ({
    subject: kind[item.kind],
    A: item.value,
  }));

  return (
      <div>
        {/*<ul>*/}
        {/*  {data.map((item, index) => (*/}
        {/*      <li key={index}>*/}
        {/*        {kind[item.kind]}: {item.value}*/}
        {/*      </li>*/}
        {/*  ))}*/}
        {/*</ul>*/}
        <ResponsiveContainer width="100%" height={300}>
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <PolarRadiusAxis />
            <Radar name="Performance" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
          </RadarChart>
        </ResponsiveContainer>
      </div>
  );
};

export default Performance;
