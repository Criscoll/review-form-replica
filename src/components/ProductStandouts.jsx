import React, { useState, useEffect } from 'react';
import ProductBtn from './ProductBtn';
import * as enumerations from '../constants/enumerations';

export default function ProductStandouts() {
  const [numSelected, setNumSelected] = useState(0);
  const [disableBtns, setDisableBtns] = useState(false);

  useEffect(() => {
    if (numSelected === 5) {
      setDisableBtns(true);
    } else {
      setDisableBtns(false);
    }
  });

  return (
    <React.Fragment>
      <h3>Product Standouts</h3>
      <h4>Choose up to 5 that best apply (optional)</h4>
      <div className="square-standouts-container">
        <ProductBtn
          value={enumerations.productStandouts.accurateTimekeeping}
          setNumSelected={setNumSelected}
          disabled={disableBtns}
        />
        <ProductBtn
          value={enumerations.productStandouts.highQuality}
          setNumSelected={setNumSelected}
          disabled={disableBtns}
        />
        <ProductBtn
          value={enumerations.productStandouts.durable}
          setNumSelected={setNumSelected}
          disabled={disableBtns}
        />
        <ProductBtn
          value={enumerations.productStandouts.elegant}
          setNumSelected={setNumSelected}
          disabled={disableBtns}
        />
        <ProductBtn
          value={enumerations.productStandouts.goodWeight}
          setNumSelected={setNumSelected}
          disabled={disableBtns}
        />
        <ProductBtn
          value={enumerations.productStandouts.versatile}
          setNumSelected={setNumSelected}
          disabled={disableBtns}
        />
        <ProductBtn
          value={enumerations.productStandouts.looksExpensive}
          setNumSelected={setNumSelected}
          disabled={disableBtns}
        />
        <ProductBtn
          value={enumerations.productStandouts.attractsCompliments}
          setNumSelected={setNumSelected}
          disabled={disableBtns}
        />
        <ProductBtn
          value={enumerations.productStandouts.unique}
          setNumSelected={setNumSelected}
          disabled={disableBtns}
        />
        <ProductBtn
          value={enumerations.productStandouts.greatGift}
          setNumSelected={setNumSelected}
          disabled={disableBtns}
        />
        <ProductBtn
          value={enumerations.productStandouts.greatValue}
          setNumSelected={setNumSelected}
          disabled={disableBtns}
        />
      </div>
    </React.Fragment>
  );
}
