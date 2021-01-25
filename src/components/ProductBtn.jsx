import React, { useState } from 'react';

export default function SquareButton(props) {
  const [buttonActive, setButtonActive] = useState(false);
  const [buttonClass, setButtonClass] = useState('square-button');

  function handleClick() {
    if (buttonActive) {
      setButtonActive(false);
      setButtonClass('square-button');
      props.setNumSelected((prevState) => prevState - 1);
    } else {
      setButtonActive(true);
      setButtonClass('square-button-active');
      props.setNumSelected((prevState) => prevState + 1);
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
