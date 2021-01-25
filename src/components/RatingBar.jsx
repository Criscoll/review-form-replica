import React, { useState } from 'react';
import NumberButton from './NumberButton';

export default function RatingBar(props) {
  const [rating, setRating] = useState(0);

  function handleRating(rating) {
    setRating(rating);
  }

  return (
    <React.Fragment>
      <p className="rating-text">{props.name}</p>
      <div className="rating-bar-container">
        <NumberButton
          value={1}
          currentRating={rating}
          handleRating={handleRating}
          hasConnectingBar={false}
        />
        <NumberButton
          value={2}
          currentRating={rating}
          handleRating={handleRating}
          hasConnectingBar={true}
        />
        <NumberButton
          value={3}
          currentRating={rating}
          handleRating={handleRating}
          hasConnectingBar={true}
        />
        <NumberButton
          value={4}
          currentRating={rating}
          handleRating={handleRating}
          hasConnectingBar={true}
        />
        <NumberButton
          value={5}
          currentRating={rating}
          handleRating={handleRating}
          hasConnectingBar={true}
        />
      </div>
      <div className="rating-name">
        <p>Poor</p>
        <p>Excellent</p>
      </div>
    </React.Fragment>
  );
}
