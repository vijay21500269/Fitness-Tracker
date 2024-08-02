import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './WorkoutProgressChart.css';

const WorkoutProgressChart = ({ data }) => (
  <div className="chart-container">
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="distance" stroke="#8884d8" />
        <Line type="monotone" dataKey="calories" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  </div>
);

export default WorkoutProgressChart;
