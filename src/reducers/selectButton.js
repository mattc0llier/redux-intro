function selectButton( state = {}, action ){
  switch(action.type) {
    case 'SELECT_BUTTON':
    console.log('update redux state')
      return {
        selectedButton: action.selectedButton
      };
    case 'CLEAR_BUTTON':
      console.log('clear button update reduc state')
        return {
          selectedButton: undefined
        }
    default:
      return state;
  }
}

export default selectButton;
