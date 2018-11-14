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
    this.handleAddingStatAmount = this.handleAddingStatAmount.bind(this);
  }

  handleAddingStatAmount(compareKey) {
    let newMasterStatList = this.state.masterStatList.slice();
    let newStat = Object.assign({}, newMasterStatList[compareKey]);
    let newStatAmount = newStat.statAmount + 10;
    newStat.statAmount = newStatAmount;
    newMasterStatList[compareKey] = newStat;
    this.setState({
      masterStatList: newMasterStatList
    }, () => {
      console.log(this.state.masterStatList);
    });
  }

  render() {
    return (
      <div>
        <h1>Life of the Tamagotchi named Rielly</h1>
        <StatButtonList
          onNewStatUpdate={this.handleAddingStatAmount}
        />
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
