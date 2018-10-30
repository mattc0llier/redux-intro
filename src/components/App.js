import React from 'react';
import VotingButtonsContainer from '../containers/VotingButtonsContainer';
import CountrySelectorContainer from '../containers/CountrySelectorContainer';

class App extends React.Component {
  render(){
    return (
      <div>
        <VotingButtonsContainer />
        <CountrySelectorContainer />
      </div>
    )
  }
}

export default App;
