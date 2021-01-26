import React from 'react';

export default function NextBtn() {
  function handleClick() {
    // code to store results and move on
  }

  return (
    <React.Fragment>
      <button className="next-btn" onClick={handleClick}>
        Next
      </button>
    </React.Fragment>
  );
}
