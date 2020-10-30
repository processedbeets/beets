import './Door.scss';

import NeonText from '../NeonText/NeonText';
import React from 'react';

export type DoorType = {
  title: string;
  position: string;
  content?: string;
  children?: React.ReactNode;
};

const Door = ({ title, position, children }: DoorType) => {
  return (
    <span
      className="door"
      style={{
        transform: `translateZ(${position}px)`,
      }}
    >
      <NeonText title={title}></NeonText>
      {children}
    </span>
  );
};

export default Door;
