import React from 'react';
import CountrySelector from '../components/CountrySelector';
import PropTypes from 'Prop-Types'

class CountrySelectorContainer extends React.Component {
  constructor(props, context){
    super(props, context);

    const reduxState = this.context.store.getState();

    this.state = {
      selectedCountry: reduxState.country.selectedCountry,
      countryListOpen: reduxState.country.countryListOpen
    }

    this.selectCountry = this.selectCountry.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  componentDidMount(){
    const { store } = this.context;
    store.subscribe( () => {
      this.updateFromStore();
    });
  }

  updateFromStore(){
    const { store } = this.context;

    const reduxState = store.getState();

    this.setState({
      selectedCountry: reduxState.country.selectedCountry,
      countryListOpen: reduxState.country.countryListOpen
    });
  }

  selectCountry(country){
    this.props.store.dispatch({
      type: 'SET_SELECTED_COUNTRY',
      selectedCountry: country
    });

    this.props.store.dispatch({
      type: 'SET_COUNTRY_LIST_OPEN',
      countryListOpen: false
    });
  }

  handleFocus(event){
    this.props.store.dispatch({
      type: 'SET_COUNTRY_LIST_OPEN',
      countryListOpen: true
    });
  }

  handleBlur(event){
    this.props.store.dispatch({
      type: 'SET_COUNTRY_LIST_OPEN',
      countryListOpen: false
    });
  }

  render(){
    return (
      <CountrySelector
        selectedCountry={this.state.selectedCountry}
        countryListOpen={this.state.countryListOpen}
        selectCountry={this.selectCountry}
        handleFocus={this.handleFocus}
        handleBlur={this.handleBlur}
      />
    );
  }
}

CountrySelectorContainer.contextTypes = {
  store: PropTypes.object
};

export default CountrySelectorContainer;
