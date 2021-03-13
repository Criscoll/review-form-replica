import React, { useState, useEffect } from 'react';
import AboutBtn from './AboutBtn';
import * as enumerations from '../constants/enumerations';

export default function ProductStandouts(props) {
  const [ageRange, setAgeRange] = useState();
  const [boughtFor, setBoughtFor] = useState();

  useEffect(() => {
    const customerInfo = { ageRange: ageRange, boughtFor: boughtFor };
    props.setCustomerInfo(customerInfo);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ageRange, boughtFor]);

  return (
    <React.Fragment>
      <h2>About you</h2>
      <h3
        className={
          props.inputChecked && props.infoMissing.ageRange ? 'red' : ''
        }
      >
        Age Range
      </h3>
      <h4>
        Choose <span className="bold">One</span>
      </h4>
      <div className="square-buttons-container">
        <AboutBtn
          value={enumerations.ageRange.first}
          selectedValue={ageRange}
          setValue={setAgeRange}
        />
        <AboutBtn
          value={enumerations.ageRange.second}
          selectedValue={ageRange}
          setValue={setAgeRange}
        />
        <AboutBtn
          value={enumerations.ageRange.third}
          selectedValue={ageRange}
          setValue={setAgeRange}
        />
        <AboutBtn
          value={enumerations.ageRange.fourth}
          selectedValue={ageRange}
          setValue={setAgeRange}
        />
        <AboutBtn
          value={enumerations.ageRange.fifth}
          selectedValue={ageRange}
          setValue={setAgeRange}
        />
        <AboutBtn
          value={enumerations.ageRange.sixth}
          selectedValue={ageRange}
          setValue={setAgeRange}
        />
        <AboutBtn
          value={enumerations.ageRange.seventh}
          selectedValue={ageRange}
          setValue={setAgeRange}
        />
      </div>
      {props.infoMissing.ageRange ? (
        <p className="missing-info">Please select an answer</p>
      ) : null}
      <h3
        className={
          props.inputChecked && props.infoMissing.boughtFor ? 'red' : ''
        }
      >
        Bought For
      </h3>
      <h4>
        Choose <span className="bold">One</span>
      </h4>
      <div className="square-buttons-container">
        <AboutBtn
          value={enumerations.boughtFor.personalUse}
          selectedValue={boughtFor}
          setValue={setBoughtFor}
        />
        <AboutBtn
          value={enumerations.boughtFor.gift}
          selectedValue={boughtFor}
          setValue={setBoughtFor}
        />
      </div>
      {props.infoMissing.boughtFor ? (
        <p className="missing-info">Please select an answer</p>
      ) : null}
    </React.Fragment>
  );
}
