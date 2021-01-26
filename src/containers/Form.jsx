import React, { useState, useEffect } from 'react';
import RatingBar from '../components/RatingBar';
import ProductStandouts from '../components/ProductStandouts';
import AboutYou from '../components/AboutYou';
import CountrySelector from '../components/CountrySelector';
import NextBtn from '../components/NextBtn';
import '../styles/main.css';
import * as enumerations from '../constants/enumerations';

export default function Form() {
  const [formInput, setFormInput] = useState();
  const [quality, setQuality] = useState();
  const [design, setDesign] = useState();
  const [experience, setExperience] = useState();
  const [productStandouts, setProductStandouts] = useState([]);
  const [customerInfo, setCustomerInfo] = useState({
    ageRange: null,
    boughtFor: null,
  });
  const [country, setCountry] = useState();

  const [inputChecked, setInputChecked] = useState(false);
  const [inputMissing, setInputMissing] = useState({
    quality: false,
    design: false,
    experience: false,
    productStandouts: false,
    ageRange: false,
    boughtFor: false,
    country: false,
  });

  useEffect(() => {
    setFormInput({
      quality: quality,
      design: design,
      experience: experience,
      productStandouts: productStandouts,
      customerInfo: customerInfo,
      country: country,
    });

    if (inputChecked) {
      checkInputs();
    }
  }, [quality, design, experience, productStandouts, customerInfo, country]);

  function checkInputs() {
    setInputChecked(true);
    let inputMissing = {
      quality: false,
      design: false,
      experience: false,
      ageRange: false,
      boughtFor: false,
      country: false,
    };

    if (!quality) {
      inputMissing.quality = true;
    }

    if (!design) {
      inputMissing.design = true;
    }

    if (!experience) {
      inputMissing.experience = true;
    }

    if (!customerInfo.ageRange) {
      inputMissing.ageRange = true;
    }

    if (!customerInfo.boughtFor) {
      inputMissing.boughtFor = true;
    }

    if (!country) {
      inputMissing.country = true;
    }

    setInputMissing(inputMissing);
  }

  return (
    <React.Fragment>
      <div className="form-background">
        <div className="form-page">
          <RatingBar
            name={enumerations.ratingBarType.quality}
            setRating={setQuality}
            infoMissing={inputMissing.quality}
            inputChecked={inputChecked}
          />
          <RatingBar
            name={enumerations.ratingBarType.design}
            setRating={setDesign}
            infoMissing={inputMissing.design}
            inputChecked={inputChecked}
          />
          <RatingBar
            name={enumerations.ratingBarType.experience}
            setRating={setExperience}
            infoMissing={inputMissing.experience}
            inputChecked={inputChecked}
          />
          <ProductStandouts
            setProductStandouts={setProductStandouts}
            inputChecked={inputChecked}
          />
          <AboutYou
            setCustomerInfo={setCustomerInfo}
            infoMissing={{
              ageRange: inputMissing.ageRange,
              boughtFor: inputMissing.boughtFor,
            }}
            inputChecked={inputChecked}
          />
          <div className="country-selector-container">
            <CountrySelector
              setCountry={setCountry}
              infoMissing={inputMissing.country}
              inputChecked={inputChecked}
            />
          </div>
        </div>
        <NextBtn formInput={formInput} checkInputs={checkInputs} />
      </div>
    </React.Fragment>
  );
}
