import React, { useState } from 'react';

export default function SquareButton(props) {
  const [buttonActive, setButtonActive] = useState(false);
  const [buttonClass, setButtonClass] = useState('square-button');

  function handleClick() {
    if (buttonActive) {
      setButtonActive(false);
      setButtonClass('square-button');
    } else {
      setButtonActive(true);
      setButtonClass('square-button-active');
    }
  }

  return (
    <React.Fragment>
      <button className={buttonClass} onClick={handleClick}>
        {props.value}
      </button>
    </React.Fragment>
  );
}
