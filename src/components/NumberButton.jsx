import React from 'react';

export default function NumberButton(props) {
  return (
    <React.Fragment>
      <div className="number-button ">
        <div className="rating-number">{props.value}</div>
      </div>
    </React.Fragment>
  );
}
