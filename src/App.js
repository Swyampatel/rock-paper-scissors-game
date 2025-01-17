
import React, { useState } from 'react';
import './App.css';

const choices = [
  { name: 'Rock', icon: '✊' },
  { name: 'Paper', icon: '✋' },
  { name: 'Scissors', icon: '✌️' }
];

const App = () => {
  const [playerChoice, setPlayerChoice] = useState('');
  const [computerChoice, setComputerChoice] = useState('');
  const [result, setResult] = useState('');
  const [score, setScore] = useState({ wins: 0, losses: 0, ties: 0 });

  const handlePlayerChoice = (choice) => {
    const computer = choices[Math.floor(Math.random() * choices.length)];
    setPlayerChoice(choice);
    setComputerChoice(computer);

    if (choice.name === computer.name) {
      setResult("It's a Tie!");
      setScore((prev) => ({ ...prev, ties: prev.ties + 1 }));
    } else if (
      (choice.name === 'Rock' && computer.name === 'Scissors') ||
      (choice.name === 'Paper' && computer.name === 'Rock') ||
      (choice.name === 'Scissors' && computer.name === 'Paper')
    ) {
      setResult('You Win!');
      setScore((prev) => ({ ...prev, wins: prev.wins + 1 }));
    } else {
      setResult('You Lose!');
      setScore((prev) => ({ ...prev, losses: prev.losses + 1 }));
    }
  };

  return (
    <div className="App">
      <h1>Rock, Paper, Scissors</h1>
      <div className="choices">
        {choices.map((choice) => (
          <button
            key={choice.name}
            onClick={() => handlePlayerChoice(choice)}
            className="choice-button"
          >
            <span role="img" aria-label={choice.name}>{choice.icon}</span>
            <p>{choice.name}</p>
          </button>
        ))}
      </div>
      <div className="results">
        <div className="result-section">
          <h3>Player</h3>
          <p className="choice-icon">{playerChoice.icon}</p>
        </div>
        <div className="result-section">
          <h3>Computer</h3>
          <p className="choice-icon">{computerChoice.icon}</p>
        </div>
      </div>
      <h2 className="result-message">{result}</h2>
      <div className="scoreboard">
        <h2>Scoreboard</h2>
        <p>Wins: {score.wins}</p>
        <p>Losses: {score.losses}</p>
        <p>Ties: {score.ties}</p>
      </div>
    </div>
  );
};

export default App;
