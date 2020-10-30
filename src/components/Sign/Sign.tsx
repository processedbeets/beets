import './Sign.scss';

import NeonText from '../NeonText/NeonText';
import React from 'react';

type SignTypes = {
  title: string;
  children?: React.ReactNode;
};

const Sign = ({ title, children }: SignTypes) => {
  return (
    <span className="sign">
      <NeonText title={title} />
      {children}
    </span>
  );
};

export default Sign;
