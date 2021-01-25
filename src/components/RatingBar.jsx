import React from 'react';
import NumberButton from './NumberButton';

export default function RatingBar(props) {
  return (
    <React.Fragment>
      <p className="rating-text">{props.name}</p>
      <div className="rating-bar-container">
        <NumberButton value={1} />
        <NumberButton value={2} />
        <NumberButton value={3} />
        <NumberButton value={4} />
        <NumberButton value={5} />
      </div>
    </React.Fragment>
  );
}
