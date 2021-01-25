import React, { useState, useEffect } from 'react';

export default function SquareButtonAge(props) {
  const [buttonClass, setButtonClass] = useState('square-button');

  useEffect(() => {
    if (props.selectedValue === props.value) {
      setButtonClass('square-button-active');
    } else {
      setButtonClass('square-button');
    }
  }, [props]);

  function handleClick() {
    props.setValue(props.value);
  }

  return (
    <React.Fragment>
      <button className={buttonClass} onClick={handleClick}>
        {props.value}
      </button>
    </React.Fragment>
  );
}
