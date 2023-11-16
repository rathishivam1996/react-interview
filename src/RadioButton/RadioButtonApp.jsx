import React, { useState } from 'react';
import './RadioButtonApp.css';
import RadioForm from './RadioForm';

const games = ['Football', 'Cricket', 'Hockey', 'VolleyBall'];
const days = ['Weekend', 'Weekdays'];

function RadioButtonApp() {
  const [selectedGame, setSelectedGame] = useState('');

  const handleGameRadioChange = (e) => {
    setSelectedGame(e.target.value);
  };

  const [selectedDay, setSelectedDay] = useState('');
  const handleDayRadioChange = (e) => {
    setSelectedDay(e.target.value);
  };
  return (
    <div className="container">
      <div className="form-container">
        <RadioForm
          formName="game-form"
          options={games}
          onChange={handleGameRadioChange}
          selectedItem={selectedGame}
        />
        <p>selected Game is {selectedGame}</p>
      </div>
      <div className="form-container">
        <RadioForm
          formName="days-form"
          options={days}
          onChange={handleDayRadioChange}
          selectedItem={selectedDay}
        />
        <p>selected Game is {selectedDay}</p>
      </div>
    </div>
  );
}

export default RadioButtonApp;
