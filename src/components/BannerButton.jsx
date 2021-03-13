import React from 'react';

export default function BannerButton(props) {
  return (
    <React.Fragment>
      <div className="banner-button-text-align">
        <div
          className={props.active ? 'banner-button-active' : 'banner-button'}
        ></div>
        <div>{props.value}</div>
      </div>
    </React.Fragment>
  );
}
