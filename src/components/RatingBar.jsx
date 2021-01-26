import React, { useState, useEffect } from 'react';
import CircleButton from './CircleButton';

export default function RatingBar(props) {
  const [rating, setRating] = useState();

  useEffect(() => {
    props.setRating(rating);
  }, [rating]);

  return (
    <React.Fragment>
      <p className="rating-text">{props.name}</p>
      <div className="rating-bar-container">
        <CircleButton
          value={1}
          currentRating={rating}
          setRating={setRating}
          hasConnectingBar={false}
        />
        <CircleButton
          value={2}
          currentRating={rating}
          setRating={setRating}
          hasConnectingBar={true}
        />
        <CircleButton
          value={3}
          currentRating={rating}
          setRating={setRating}
          hasConnectingBar={true}
        />
        <CircleButton
          value={4}
          currentRating={rating}
          setRating={setRating}
          hasConnectingBar={true}
        />
        <CircleButton
          value={5}
          currentRating={rating}
          setRating={setRating}
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
