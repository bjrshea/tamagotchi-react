import React from 'react';
import TamagotchiStatsList from './TamagotchiStatsList';
import StatButtonList from './StatButtonList';
import Moment from 'moment';

function App() {
  return (
    <div>
      <h1>Life of the Tamagotchi named Rielly</h1>
      <StatButtonList/>
      <img/>
      <TamagotchiStatsList/>
      <button>Play Again</button>
      <button>Start</button>
    </div>
  );
}
export default App;
