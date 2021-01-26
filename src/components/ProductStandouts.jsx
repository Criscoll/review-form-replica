import React, { useState, useEffect } from 'react';
import ProductBtn from './ProductBtn';
import * as enumerations from '../constants/enumerations';

export default function ProductStandouts(props) {
  const [choices, setChoices] = useState([]);
  const [disableBtns, setDisableBtns] = useState(false);

  useEffect(() => {
    props.setProductStandouts(choices);

    if (choices.length === 5) {
      setDisableBtns(true);
    } else {
      setDisableBtns(false);
    }
  }, [choices]);

  return (
    <React.Fragment>
      <h3>Product Standouts</h3>
      <h4>Choose up to 5 that best apply (optional)</h4>
      <div className="square-standouts-container">
        <ProductBtn
          value={enumerations.productStandouts.accurateTimekeeping}
          setChoices={setChoices}
          disabled={disableBtns}
        />
        <ProductBtn
          value={enumerations.productStandouts.highQuality}
          setChoices={setChoices}
          disabled={disableBtns}
        />
        <ProductBtn
          value={enumerations.productStandouts.durable}
          setChoices={setChoices}
          disabled={disableBtns}
        />
        <ProductBtn
          value={enumerations.productStandouts.elegant}
          setChoices={setChoices}
          disabled={disableBtns}
        />
        <ProductBtn
          value={enumerations.productStandouts.goodWeight}
          setChoices={setChoices}
          disabled={disableBtns}
        />
        <ProductBtn
          value={enumerations.productStandouts.versatile}
          setChoices={setChoices}
          disabled={disableBtns}
        />
        <ProductBtn
          value={enumerations.productStandouts.looksExpensive}
          setChoices={setChoices}
          disabled={disableBtns}
        />
        <ProductBtn
          value={enumerations.productStandouts.attractsCompliments}
          setChoices={setChoices}
          disabled={disableBtns}
        />
        <ProductBtn
          value={enumerations.productStandouts.unique}
          setChoices={setChoices}
          disabled={disableBtns}
        />
        <ProductBtn
          value={enumerations.productStandouts.greatGift}
          setChoices={setChoices}
          disabled={disableBtns}
        />
        <ProductBtn
          value={enumerations.productStandouts.greatValue}
          setChoices={setChoices}
          disabled={disableBtns}
        />
      </div>
    </React.Fragment>
  );
}
