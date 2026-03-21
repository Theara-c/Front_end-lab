import React, { useState } from "react";

// ----------------------------------------------------------------------------------------------------------
// HELPER FUNCTIONS
// ----------------------------------------------------------------------------------------------------------
function Player({ name, hp }) {
  return (
    <>
      <section className="container">
        <h2>{name} Health</h2>
        <div className="healthbar">
          <div style={{ width: `${hp}%` }} className="healthbar__value"></div>
        </div>
      </section>
    </>
  );
}
// Generate a random values in the range {min, max}
function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// Create an attack log
function createLogAttack(isPlayer, damage) {
  return {
    isPlayer: isPlayer,
    isDamage: true,
    text: ` takes ${damage} damages`,
  };
}

// Create a healing log
function createLogHeal(healing) {
  return {
    isPlayer: true,
    isDamage: false,
    text: ` heal ${healing} life points`,
  };
}

function Game() {
  // ----------------------------------------------------------------------------------------------------------
  // STATES & VARIABLES
  // ----------------------------------------------------------------------------------------------------------
  const [hpMonster, setHpMonster] = useState(100);
  const [hpHero, setHpHero] = useState(100);
  const [startBattle, setStartBattle] = useState(true);
  const [special, setSpecial] = useState(0);
  const [logs, setLogs] = useState([]);
  // ----------------------------------------------------------------------------------------------------------
  // BUTTONS EVENT FUNCTIONS
  // ----------------------------------------------------------------------------------------------------------
  function GameOver({ name }) {
    return (
      <>
        <section className="container">
          <h2>Game Over!</h2>
          <h3> {name}</h3>
          <button onClick={restartGame}>Start New Game</button>
        </section>
        ;
      </>
    );
  }
  function findWinner() {
    if (hpHero == 0 && hpMonster == 0) {
      return "It's a draw!";
    } else if (hpHero == 0) {
      return "Monster wins!";
    }
    return "You Win!";
  }
  function StartGame() {
    return (
      <>
        <section id="controls">
          <button onClick={attack}>ATTACK</button>
          <button
            disabled={special % 3 != 0 || special == 0}
            onClick={specialSkill}
          >
            SPECIAL !
          </button>
          <button onClick={heal}>HEAL</button>
          <button onClick={killMyself}>KILL YOURSELF</button>
        </section>
      </>
    );
  }
  function restartGame() {
    setStartBattle(true);
    setHpHero(100);
    setHpMonster(100);
    setSpecial(0);
  }
  function HistoryBattle ( {data}) {
    return (
      <>
        <section id="log" className="container">
        <h2>Battle Log</h2>
        <ul>
          {data.map((log, index) => (
            <li key={index}>
              <span>{log.isPlayer ? 'Player' : 'Monster'}</span>
              <span className = {log.isDamage ? 'log--damage': 'log--heal'}>{log.text}</span>
            </li>
          ))}
        </ul>
        </section>
      </>
    )
  }
  // ----------------------------------------------------------------------------------------------------------
  // JSX FUNCTIONS
  // ----------------------------------------------------------------------------------------------------------
  function killMyself() {
    setHpHero(0);
    setStartBattle(false);
  }
  function heal() {
    let healing = getRandomValue(8, 15);
    if (hpHero + healing >= 100) {
      setHpHero(100);
    } else {
      setHpHero((pre) => pre + healing);
    }
    setLogs((pre) => [createLogHeal(healing), ...pre]);
    monsterAttack();
    setSpecial((pre) => pre + 1);
  }
  function attack() {
    let attackPower = getRandomValue(5, 12);
    if (hpMonster - attackPower <= 0) {
      setStartBattle(false);
      setHpMonster(0);
    } else {
      setHpMonster((pre) => pre - attackPower);
    }
    monsterAttack();
    setSpecial((pre) => pre + 1);
    setLogs((pre) => [createLogAttack(true, attackPower),...pre, ]);

  }
  function monsterAttack() {
    let monsterPower = getRandomValue(5, 12);
    if (hpHero - monsterPower <= 0) {
      setStartBattle(false);
      setHpHero(0);
    } else {
      setHpHero((pre) => pre - monsterPower);
    }
    setLogs((pre) => [createLogAttack(false, monsterPower),...pre ]);
  }
  function specialSkill() {
    // implement laster
    let specialPower = getRandomValue(8, 25);
    if (hpMonster - specialPower <= 0) {
      setStartBattle(false);
      setHpMonster(0);
    } else {
      setHpMonster((pre) => pre - specialPower);
    }
    setSpecial((pre) => pre + 1);
    setLogs((pre) => [createLogAttack(true, specialPower),...pre ]);

  }
  // ----------------------------------------------------------------------------------------------------------
  // MAIN  TEMPLATE

  // ----------------------------------------------------------------------------------------------------------

  return (
    <>
      <Player name="Monster" hp={hpMonster} />
      <Player name="Your" hp={hpHero} />
      {startBattle ? <StartGame /> : <GameOver name={findWinner()} />}
      <HistoryBattle data={logs} />
    </>
  );
}
export default Game;
