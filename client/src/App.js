import './App.css';
import { GameCard } from '../src/components/GameCard/GameCard'

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Welcome to Miren and Conor's Flashcards Game!
        </h1>
        <div>
          <h3>
            Which game would you like to play?
          </h3>
          <div className="card-holder">
            <GameCard text="Colors" img="blue.jpg" />
            <GameCard text="Numbers" img="fox.jpg" />
            <GameCard text="Letters" img="owl.jpg" />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;

// import { useState, useEffect } from 'react';
// import axios from 'axios';
  // const [v, setV] = useState([]);
  // useEffect(() => {
  //   async function fetchData() {
  //     const rawr = await axios.get('http://localhost:5000');
      // console.log(rawr.statusText);
      // setV(rawr);
    // }
    // fetchData()
  // });
