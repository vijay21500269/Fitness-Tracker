import React, { useState, useEffect } from 'react';
import WorkoutProgressChart from './Components/WorkoutProgressChart.jsx';
import WeeklyProgressChart from './Components/WeeklyProgressChart';
import './App.css';

const App = () => {
  const [workoutData, setWorkoutData] = useState([]);
  const [weeklyData, setWeeklyData] = useState([]);

  useEffect(() => {
    // Fetch or generate workout data
    const fetchedWorkoutData = [
      { date: '2024-01-01', distance: 5, calories: 300 },
      { date: '2024-01-02', distance: 6, calories: 350 },
      // more data
    ];
    setWorkoutData(fetchedWorkoutData);

    const fetchedWeeklyData = [
      { week: 'Week 1', distance: 20, calories: 1200 },
      { week: 'Week 2', distance: 25, calories: 1500 },
      // more data
    ];
    setWeeklyData(fetchedWeeklyData);
  }, []);

  return (
    <div className="app">
      <h1>Workout Progress</h1>
      <WorkoutProgressChart data={workoutData} />
      <h2>Weekly Progress</h2>
      <WeeklyProgressChart data={weeklyData} />
    </div>
  );
};

export default App;
