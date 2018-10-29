import React from 'react';
import cx from 'classnames';

const countries = ['Belgium', 'France', 'Germany', 'Holland', 'Ireland', 'Italy', 'Luxemburg', 'Portugal', 'Spain'];

function CountrySelector({ countryListOpen, selectedCountry, dispatch}){

  function selectCountry(country){
    dispatch({
      type: 'SET_SELECTED_COUNTRY',
      selectedCountry: country
    });

    dispatch({
      type: 'SET_COUNTRY_LIST_OPEN',
      countryListOpen: false
    });
  }

  function addCountry(event) {
    event.preventDefault();
    dispatch({
      type: 'ADD_COUNTRY',
      selectedCountry: selectedCountry
    });
  }

  function handleFocus(event){
    dispatch({
      type: 'SET_COUNTRY_LIST_OPEN',
      countryListOpen: true
    });
  }

  function handleBlur(event){
    dispatch({
      type: 'SET_COUNTRY_LIST_OPEN',
      countryListOpen: false
    });
  }

  const listClasses = cx('country-input__list',  {
    'country-input__list--visible': countryListOpen
  });

  return (
    <form className="country-input" onSubmit={addCountry}>
      <input
        type="text"
        className="country-input__field"
        value={selectedCountry}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      <button type="submit"></button>
      <div className={listClasses}>
        <ul>
          {countries.map( country => {
            return <li key={country} onMouseDown={() => selectCountry(country)}>{country}</li>
          })}
        </ul>
      </div>
    </form>
  );
}

export default CountrySelector;
