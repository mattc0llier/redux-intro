import { combineReducers } from 'redux';
import country from './country';
import selectButton from './selectButton';
import countriesVisited from './countriesVisited';

export default combineReducers({
  selectButton: selectButton,
  country: country,
  countriesVisited: countriesVisited
});
