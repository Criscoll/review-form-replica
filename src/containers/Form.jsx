import React from 'react';
import RatingBar from '../components/RatingBar';
import ProductStandouts from '../components/ProductStandouts';
import '../styles/main.css';
import * as enumerations from '../constants/enumerations';

export default function Form() {
  return (
    <React.Fragment>
      <div className="form-background">
        <div className="form-page">
          <RatingBar name={enumerations.ratingBarType.quality} />
          <RatingBar name={enumerations.ratingBarType.design} />
          <RatingBar name={enumerations.ratingBarType.experience} />
          <ProductStandouts />
        </div>
      </div>
    </React.Fragment>
  );
}
