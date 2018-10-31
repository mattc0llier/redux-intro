import { connect } from 'react-redux';
import CountrySelector from '../components/CountrySelector';
import { setSelectedCountry, setCountryListOpen } from '../actions';


const mapStateToProps = state => {
  return {
    selectedCountry: state.country.selectedCountry,
    countryListOpen: state.country.countryListOpen
  }
}

const mapDispatchToProps = dispatch =>{
  return{
    handleFocus: event => dispatch(setCountryListOpen(true));
    handleBlur: event => dispatch(setCountryListOpen(false));
    selectCountry: country => {
      dispatch(setSelectedCountry(country));
      dispatch(setCountryListOpen(false));
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps)
  (CountrySelector);
