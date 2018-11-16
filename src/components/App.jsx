import React from 'react';
import StatList from './StatList';
import StatButtonList from './StatButtonList';
import EndGame from './EndGame';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      death: false,
      start: false,
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
    this.handleResetGame = this.handleResetGame.bind(this);
    this.handleStartGame = this.handleStartGame.bind(this);
  }

  handleAddingStatAmount(compareKey) {
    let newMasterStatList = this.state.masterStatList.slice();
    if (newMasterStatList[compareKey].statAmount < 100) {
      let newStat = Object.assign({}, newMasterStatList[compareKey]);
      if (newStat.statAmount <= 90) {
        let newStatAmount = newStat.statAmount + 10;
        newStat.statAmount = newStatAmount;
      } else {
        let difference = 100 - newStat.statAmount;
        let newStatAmount = newStat.statAmount + difference;
        newStat.statAmount = newStatAmount;
      }
      newMasterStatList[compareKey] = newStat;
      this.setState({
        masterStatList: newMasterStatList
      });
    }
  }

  handleDecreasingStatAmount() {
    if(this.state.death === true) {
      clearInterval(this.waitTimeUpdateTimer);
    } else {
      let newMasterStatList = this.state.masterStatList.slice();
      newMasterStatList.forEach((statObject, index) => {
        let newStatObject = Object.assign({}, statObject);
        let randomNumberGenerator = Math.floor(Math.random() * 50) + 1;
        if (randomNumberGenerator > newStatObject.statAmount) {
          newStatObject.statAmount -= newStatObject.statAmount;
        } else {
          newStatObject.statAmount -= randomNumberGenerator;
        }
        if(newStatObject.statAmount === 0) {
          this.setState({death: true});
        }
        newMasterStatList[index] = newStatObject;
      });
      this.setState({
        masterStatList: newMasterStatList
      });
    }
  }

  handleResetGame() {
    let newMasterStatListAsDeepCopy = JSON.parse(JSON.stringify(this.state.masterStatList));
    newMasterStatListAsDeepCopy.map((statObject, index)=> {
      newMasterStatListAsDeepCopy[index].statAmount = statObject.Amount = 100;
    });
    this.setState({masterStatList: newMasterStatListAsDeepCopy, death: false, start: false});
  }

  handleStartGame() {
    this.setState({start: true});
    this.waitTimeUpdateTimer = setInterval(() =>
      this.handleDecreasingStatAmount(),
    1000
    );
  }

  render() {
    let gameState = null;
    let startButton = null;

    if(this.state.start === false) {
      startButton = <button onClick={this.handleStartGame}>Start</button>;
    } else {
      startButton = null;
    }




    if(this.state.death) {
      gameState = <EndGame
        onResetGame={this.handleResetGame}
      />;
    } else {
      gameState =
        <div>
          <StatButtonList
            onNewStatUpdate={this.handleAddingStatAmount}
          />
          <img/>
          <StatList
            statList={this.state.masterStatList}
          />
          {startButton}
        </div>;
    }

    return (
      <div id='app'>
        <style>{`
            #app {
              text-align: center;
            }
        `}</style>
        <h1>Life of the Tamagotchi named Rielly</h1>
        {gameState}
      </div>
    );
  }
}
export default App;

//Notes: Prevent stat bars from overflowing <--- COMPLETE
//Add individual stat decrease plus transition animation
//Add end game and show play again button
//Add start page
//Add tamagotchi animation
