import './Door.scss';

import NeonSign from '../NeonSign/NeonSign';
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
      <NeonSign title={title}></NeonSign>
      {children}
    </span>
  );
};

export default Door;
