import React from 'react';
import RatingBar from '../components/RatingBar';
import '../styles/main.css';
import * as enumerations from '../constants/enumerations';

export default function Form() {
  return (
    <React.Fragment>
      <div className="form-background">
        <div className="form-container">
          <RatingBar name={enumerations.ratingBarType.quality} />
        </div>
      </div>
    </React.Fragment>
  );
}
