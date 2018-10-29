function countriesVisited(state=
    {countries:[]}, action) {
        switch(action.type) {
            case('ADD_COUNTRY'):
                console.log('adding country')
                const updatedCountriesList = state.countries.concat(action.selectedCountry)
                return {countries:updatedCountriesList}
            default:
                return state;
        }
}

export default countriesVisited;