import './App.css';

function App() {
  return (
    <div class="App">
      <div class="game-container">
        <div class="hud">
          <div class="player">
            <img class="trainer-picture" src="https://i.imgur.com/7aP7beL.png"/>
          </div>
          <div class="party">
            <ul class="party-list">
              <li class="poke-list-item"><img class="poke-pic" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png"/></li>
              <li class="poke-list-item"><img class="poke-pic" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png"/></li>
              <li class="poke-list-item"><img class="poke-pic" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png"/></li>
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
