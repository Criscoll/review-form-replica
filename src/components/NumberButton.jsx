import React, { useState } from 'react';

export default function NumberButton(props) {
  const [buttonActive, setButtonActive] = useState(false);
  const [buttonClass, setButtonClass] = useState('number-button');

  function handleClick() {
    if (buttonActive) {
      setButtonActive(false);
      setButtonClass('number-button');
    } else {
      setButtonActive(true);
      setButtonClass('number-button-active');
    }
  }

  return (
    <React.Fragment>
      <div className={buttonClass} onClick={handleClick}>
        <div className="rating-number">{props.value}</div>
      </div>
    </React.Fragment>
  );
}
