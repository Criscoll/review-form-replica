import React, { useState } from 'react';
import Select from 'react-select';
import countryList from 'react-select-country-list';

export default function CountrySelector() {
  const [options] = useState(countryList().getData());
  const [value, setValue] = useState();

  function changeHandler(value) {
    setValue(value);
  }

  return (
    <React.Fragment>
      <h3>Country</h3>
      <div className="select-up">
        <Select
          options={options}
          value={value}
          onChange={changeHandler}
          menuPlacement="top"
        ></Select>
      </div>
    </React.Fragment>
  );
}
