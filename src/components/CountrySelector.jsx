import React, { useState } from 'react';
import Select from 'react-select';
import countryList from 'react-select-country-list';

export default function CountrySelector(props) {
  const [options] = useState(countryList().getData());
  const [value, setValue] = useState({ value: 'AU', label: 'Australia' });

  function changeHandler(value) {
    setValue(value);
    props.setCountry(value);
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
