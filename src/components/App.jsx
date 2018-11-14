import React from 'react';
import TamagotchiStatsList from './TamagotchiStatsList';
import StatButtonList from './StatButtonList';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      masterStatList: [
        {
          statId: 'feedStat',
          statColor: '#00B12A',
          statAmount: 100
        },
        {
          statId: 'exerciseStat',
          statColor: '#00A1B3',
          statAmount: 100
        },
        {
          statId: 'restStat',
          statColor: '#DA003A',
          statAmount: 100
        }
      ]
    }
  }

  render() {
    return (
      <div>
        <h1>Life of the Tamagotchi named Rielly</h1>
        <StatButtonList/>
        <img/>
        <TamagotchiStatsList
          statList={this.state.masterStatList}
          />
        <button>Play Again</button>
        <button>Start</button>
      </div>
    );
  }
}
export default App;
