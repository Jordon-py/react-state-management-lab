import React, { useState } from 'react';

function App() {
  // Create state variables for team, money, and zombieFighters
  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [zombieFighters, setZombieFighters] = useState([
    {
      id: 1,
      name: 'Survivor',
      price: 12,
      strength: 6,
      agility: 4,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/0c2d6b.png',
    },
    {
      id: 2,
      name: 'Scavenger',
      price: 10,
      strength: 5,
      agility: 5,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/033a16.png',
    },
    {
      id: 3,
      name: 'Shadow',
      price: 18,
      strength: 7,
      agility: 8,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/262c36.png',
    },
    {
      id: 4,
      name: 'Tracker',
      price: 14,
      strength: 7,
      agility: 6,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/3c1e70.png',
    },
    {
      id: 5,
      name: 'Sharpshooter',
      price: 20,
      strength: 6,
      agility: 8,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/4b2900.png',
    },
    {
      id: 6,
      name: 'Medic',
      price: 15,
      strength: 5,
      agility: 7,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5a1e02.png',
    },
    {
      id: 7,
      name: 'Engineer',
      price: 16,
      strength: 6,
      agility: 5,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5e103e.png',
    },
    {
      id: 8,
      name: 'Brawler',
      price: 11,
      strength: 8,
      agility: 3,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/67060c.png',
    },
    {
      id: 9,
      name: 'Infiltrator',
      price: 17,
      strength: 5,
      agility: 9,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/ac3220.png',
    },
    {
      id: 10,
      name: 'Leader',
      price: 22,
      strength: 7,
      agility: 6,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/e41f26.png',
    },
  ]);

  // Handler function for adding a fighter to the team
  const handleAddFighter = (fighter) => {
    // Check if there's enough money to add the fighter
    if (money < fighter.price) {
      console.log("Not enough money");
      return;
    }

    // Subtract fighter's price from money and add fighter to the team
    setMoney(money - fighter.price);
    setTeam([...team, fighter]);

    // Remove the fighter from the zombieFighters array
    setZombieFighters(zombieFighters.filter((f) => f.id !== fighter.id));
  };

  // Handler function for removing a fighter from the team
  const handleRemoveFighter = (fighter) => {
    // Remove fighter from the team array
    setTeam(team.filter((f) => f.id !== fighter.id));

    // Add the fighter back to the zombieFighters array
    setZombieFighters([...zombieFighters, fighter]);

    // Refund the fighter's price back to money
    setMoney(money + fighter.price);
  };

  // Calculate total strength and agility from team members (regular variables, not state)
  const totalStrength = team.reduce((acc, fighter) => acc + fighter.strength, 0);
  const totalAgility = team.reduce((acc, fighter) => acc + fighter.agility, 0);

  return (
    <div className="App">
      <h1>Zombie Fighters Recruitment</h1>
      <p>Available Money: ${money}</p>

      <h2>Available Fighters</h2>
      <ul>
        {zombieFighters.map((fighter) => (
          <li key={fighter.id} style={{ listStyle: 'none', marginBottom: '20px' }}>
            <img src={fighter.img} alt={fighter.name} width="100" />
            <p>Name: {fighter.name}</p>
            <p>Price: ${fighter.price}</p>
            <p>Strength: {fighter.strength}</p>
            <p>Agility: {fighter.agility}</p>
            <button onClick={() => handleAddFighter(fighter)}>Add</button>
          </li>
        ))}
      </ul>

      <h2>Your Team</h2>
      {team.length === 0 ? (
        <p>Pick some team members!</p>
      ) : (
        <ul>
          {team.map((fighter) => (
            <li key={fighter.id} style={{ listStyle: 'none', marginBottom: '20px' }}>
              <img src={fighter.img} alt={fighter.name} width="100" />
              <p>Name: {fighter.name}</p>
              <p>Price: ${fighter.price}</p>
              <p>Strength: {fighter.strength}</p>
              <p>Agility: {fighter.agility}</p>
              <button onClick={() => handleRemoveFighter(fighter)}>Remove</button>
            </li>
          ))}
        </ul>
      )}

      <h3>Team Totals</h3>
      <p>Total Strength: {totalStrength}</p>
      <p>Total Agility: {totalAgility}</p>
    </div>
  );
}

export default App;
