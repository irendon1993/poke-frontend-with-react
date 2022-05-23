import './App.css';
import React, { useEffect, useState } from 'react'

function App() {
  const [trainerData, setTrainerData] = useState([])

  async function fetchUserInfo() {
    const response = await fetch(`http://localhost:3000/master/2`)
    const json = await response.json()
    setTrainerData(json)
  }

  useEffect(() => {
    fetchUserInfo()
  }, [])

  let party = [];
  party.push(trainerData.poke_party)
  // console.log(party)
  let parseParty = JSON.parse(party)
  console.log(parseParty)
  

  return (
    <div class="App">
      <div class="game-container">
        <div class="hud">
          <div class="player">
            <img alt="pokemon-trainer" class="trainer-picture" src="https://i.imgur.com/7aP7beL.png"/>
          </div>
          <div class="party">
            <ul class="party-list">
              <li class="poke-list-item"><img alt="pokemon" class="poke-pic" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png"/></li>
              <li class="poke-list-item"><img alt="pokemon" class="poke-pic" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png"/></li>
              <li class="poke-list-item"><img alt="pokemon" class="poke-pic" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png"/></li>
            </ul>
          </div>
        </div>
        <div class = "game">
          
        </div>
      </div>
    </div>
  );
}

export default App;
