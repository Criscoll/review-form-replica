import React, { useState, useEffect } from 'react';

export default function CircleButton(props) {
  const [buttonClass, setButtonClass] = useState('number-button');
  const [barClass, setBarClass] = useState('connecting-bar');

  useEffect(() => {
    if (props.currentRating >= props.value) {
      setButtonClass('number-button-active');
      setBarClass('connecting-bar-active');
    } else {
      setButtonClass('number-button');
      setBarClass('connecting-bar');
    }
  }, [props]);

  function handleClick() {
    props.handleRating(props.value);
  }

  return (
    <React.Fragment>
      {props.hasConnectingBar ? <div className={barClass}></div> : null}
      <div className={buttonClass} onClick={handleClick}>
        <div className="rating-number">{props.value}</div>
      </div>
    </React.Fragment>
  );
}
