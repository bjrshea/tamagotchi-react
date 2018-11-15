import React from 'react';
import TamagotchiStatsList from './TamagotchiStatsList';
import StatButtonList from './StatButtonList';
import Moment from 'moment';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      masterStatList: [
        {
          statId: 'feedStat',
          statColor: '#00B12A',
          statAmount: 100,
          tamagotchiDead: false
        },
        {
          statId: 'exerciseStat',
          statColor: '#00A1B3',
          statAmount: 100,
          tamagotchiDead: false
        },
        {
          statId: 'restStat',
          statColor: '#DA003A',
          statAmount: 100,
          tamagotchiDead: false
        }
      ]
    };
    this.handleAddingStatAmount = this.handleAddingStatAmount.bind(this);
    this.handleDecreasingStatAmount = this.handleDecreasingStatAmount.bind(this);
  }

  handleAddingStatAmount(compareKey) {
    let newMasterStatList = this.state.masterStatList.slice();
    let newStat = Object.assign({}, newMasterStatList[compareKey]);
    let newStatAmount = newStat.statAmount + 10;
    newStat.statAmount = newStatAmount;
    newMasterStatList[compareKey] = newStat;
    this.setState({
      masterStatList: newMasterStatList
    });
  }

  handleDecreasingStatAmount() {
    let newMasterStatList = this.state.masterStatList.slice();
    newMasterStatList.forEach((statObject, index) => {
      let newStatObject = Object.assign({}, statObject);
      newStatObject.statAmount -= 10;
      if(newStatObject.statAmount === 0) {
        clearInterval(this.waitTimeUpdateTimer);
      }
      newMasterStatList[index] = newStatObject;
    });
    this.setState({
      masterStatList: newMasterStatList
    });
  }

  componentDidMount() {
    this.waitTimeUpdateTimer = setInterval(() =>
      this.handleDecreasingStatAmount(),
    5000
    );
  }

  render() {

    return (
      <div id='app'>
        <style>{`
            #app {
              text-align: center;
            }
        `}</style>
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

//Notes: Prevent stat bars from overflowing
//Add individual stat decrease plus transition animation
//Add end game and show play again button
//Add start page
//Add tamagotchi animation
