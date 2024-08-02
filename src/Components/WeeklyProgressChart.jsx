import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './WeeklyProgressChart.css';

const WeeklyProgressChart = ({ data }) => (
  <div className="chart-container">
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="week" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="distance" fill="#8884d8" />
        <Bar dataKey="calories" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  </div>
);

export default WeeklyProgressChart;
