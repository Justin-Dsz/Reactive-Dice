import React, { useState } from 'react';

const Dice = () => {
  const [number, setNumber] = useState(1);

  const rollDice = () => {
    
    const newNumber = Math.floor(Math.random() * 6) + 1;
    setNumber(newNumber);
  };

 
  return (
    <div>
      <h1>Dice Roll: {number}</h1>
      <button onClick={rollDice}>Roll Dice</button>
    </div>
  );
};

export default Dice;