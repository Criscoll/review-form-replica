import React, { useState } from 'react';

export default function SquareButton(props) {
  const [buttonActive, setButtonActive] = useState(false);
  const [buttonClass, setButtonClass] = useState('square-button');

  function handleClick() {
    if (buttonActive) {
      setButtonActive(false);
      setButtonClass('square-button');

      props.setChoices((prevState) => {
        const index = prevState.indexOf(props.value);
        prevState.splice(index, 1);
        return [...prevState];
      });
    } else {
      setButtonActive(true);
      setButtonClass('square-button-active');
      props.setChoices((prevState) => {
        prevState.push(props.value);
        return [...prevState];
      });
    }
  }

  return (
    <React.Fragment>
      <button
        className={buttonClass}
        onClick={handleClick}
        disabled={props.disabled && !buttonActive}
      >
        {props.value}
      </button>
    </React.Fragment>
  );
}
