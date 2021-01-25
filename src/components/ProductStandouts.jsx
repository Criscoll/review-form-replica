import React from 'react';
import SquareButton from './SquareButton';
import * as enumerations from '../constants/enumerations';

export default function ProductStandouts() {
  return (
    <React.Fragment>
      <SquareButton value={enumerations.productStandouts.accurateTimekeeping} />
    </React.Fragment>
  );
}
