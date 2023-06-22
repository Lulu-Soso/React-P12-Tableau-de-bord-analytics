import React from 'react';
import dataModelFactory from "../models/dataModelFactory";
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const Activity = ({ activityData }) => {
  const activityModel = dataModelFactory.createActivityModel(activityData);

  // if (!activityModel) {
  //   return null;
  // }

  const data = activityModel.sessions.map(session => ({
    day: new Date(session.day).getDate(),
    kilogram: session.kilogram,
    calories: session.calories
  }));

  return (
      <div className="activity">
        <p>Activité quotidienne</p>

        <ResponsiveContainer width="100%" height={290}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="2 2" vertical={false} />
            <XAxis dataKey="day" scale="point" padding={{ left: 10, right: 10 }} />
            <YAxis orientation="right" domain={['auto']} axisLine={false} tickLine={false} tickMargin={30} />
            <Tooltip />
            <Legend verticalAlign="top" align="right" />
            <Bar dataKey="kilogram" barSize={7} radius={[10, 10, 0, 0]} fill="#282D30" />
            <Bar dataKey="calories" barSize={7} radius={[10, 10, 0, 0]} fill="#E60000" />
          </BarChart>
        </ResponsiveContainer>
      </div>
  );
};

export default Activity;
