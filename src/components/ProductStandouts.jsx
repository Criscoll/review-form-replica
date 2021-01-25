import React from 'react';
import SquareButton from './SquareButton';
import * as enumerations from '../constants/enumerations';

export default function ProductStandouts() {
  return (
    <React.Fragment>
      <div className="product-standouts-wrapper">
        <h3>Product Standouts</h3>
        <h4>Choose up to 5 that best apply (optional)</h4>
        <div className="product-standouts-container">
          <SquareButton
            value={enumerations.productStandouts.accurateTimekeeping}
          />
          <SquareButton value={enumerations.productStandouts.highQuality} />
          <SquareButton value={enumerations.productStandouts.durable} />
        </div>
      </div>
    </React.Fragment>
  );
}
