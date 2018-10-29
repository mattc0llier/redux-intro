import React from 'react';
import VotingButtons from './VotingButtons';

class App extends React.Component {
  constructor(props){
    super(props);

    const reduxState = this.props.store.getState();

    this.state = {
      selectedButton: reduxState.selectedButton
    }
  }

  componentDidMount(){
    const { store } = this.props;
    store.subscribe( () => {
      this.updateFromStore();
    });
    console.log('subscribed')
  }

  updateFromStore(){
    const { store } = this.props;

    const reduxState = store.getState();

    this.setState({
      selectedButton: reduxState.selectedButton
    });

    console.log('update select button state from redux store')
    console.log('new value', this.state.selectedButton)

  }

  render(){
    return (
      <div>
        <VotingButtons
          selectedButton={this.state.selectedButton}
          dispatch={this.props.store.dispatch}
        />
      </div>
    )
  }
}

export default App;
