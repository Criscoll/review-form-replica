import React from 'react';
import BannerButton from '../components/BannerButton';
import '../styles/main.css';

export default function Banner() {
  return (
    <React.Fragment>
      <div className="banner">
        <h1>MIADONNA</h1>
        <h3>The Eco Diamond Specialists</h3>
        <p>1815 Rose Gold Chronograph Watch - Brown Croco Strap</p>
        <h2>Ratings</h2>
        <div className="banner-button-container">
          <BannerButton value={'Review'} active={true} />
          <BannerButton value={'Ratings'} active={true} />
          <BannerButton value={'Media'} active={false} />
          <BannerButton value={'Confirm'} active={false} />
        </div>
      </div>
    </React.Fragment>
  );
}
