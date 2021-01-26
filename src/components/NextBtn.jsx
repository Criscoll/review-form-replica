import React from 'react';

export default function NextBtn(props) {
  function handleClick() {
    // code to store results and move on
    props.checkInputs();
  }

  return (
    <React.Fragment>
      <button className="next-btn" onClick={handleClick}>
        Next
      </button>
    </React.Fragment>
  );
}
