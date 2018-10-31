export function selectButton(button){
  return {
    type: 'SELECT_BUTTON',
    selectedButton: button
  };
};
export function setCountry(country){
  return {
    type: 'SET_SELECTED_COUNTRY',
    selectedCountry: country
  }
};
export function setCountryListOpen(display){
  return {
    type: 'SET_COUNTRY_LIST_OPEN',
    countryListOpen: display
  }
};
