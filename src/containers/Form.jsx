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
  const [productStandouts, setProductStandouts] = useState();
  const [aboutYou, setAboutYou] = useState();
  const [country, setCountry] = useState();

  useEffect(() => {
    setFormInput({
      quality: quality,
      design: design,
      experience: experience,
      productStandouts: productStandouts,
      aboutYou: aboutYou,
      country: country,
    });
  }, [quality, design, experience, productStandouts, aboutYou, country]);

  return (
    <React.Fragment>
      <div className="form-background">
        <div className="form-page">
          <RatingBar
            name={enumerations.ratingBarType.quality}
            setRating={setQuality}
          />
          <RatingBar
            name={enumerations.ratingBarType.design}
            setRating={setDesign}
          />
          <RatingBar
            name={enumerations.ratingBarType.experience}
            setRating={setExperience}
          />
          <ProductStandouts setProductStandouts={setProductStandouts} />
          <AboutYou setAboutYou={setAboutYou} />
          <div className="country-selector-container">
            <CountrySelector setCountry={setCountry} />
          </div>
        </div>
        <NextBtn formInput={formInput} />
      </div>
    </React.Fragment>
  );
}
