import React from 'react';
import cx from 'classnames';

const buttons = ['Camel', 'Duck', 'Donut', 'Potato', 'Mash potato'];

function VotingButtons({selectedButton, dispatch}){
  function handleClick(button){
    console.log('dipatched button select')
    dispatch({
      type: 'SELECT_BUTTON',
      selectedButton: button
    })

  }
  function handleClearClick(event){
    console.log('dipatched clear button')
    event.preventDefault();
    dispatch({
      type: 'CLEAR_BUTTON',
    })

  }

  return (
    <div>
      {buttons.map( button => {
        const classes = cx('voting-button', {
          'voting-button--selected': selectedButton === button
        });
        return (
          <button
            key={button}
            className={classes}
            onClick={event => handleClick(button)}
          >{button}</button>
        );
      })}
      <a href="#" onClick={event => handleClearClick(event)}>clear</a>
    </div>
  );
}

export default VotingButtons;
