import './RoomContent.scss';

import { Justification } from '../../types/Justification.enum';
import React from 'react';

export type RoomContentType = {
  position: number | string;
  justification: Justification;
  children?: React.ReactNode;
};

const RoomContent = ({ position, justification, children }: RoomContentType) => {
  return (
    <span
      className="room-content"
      style={{
        transform: `translateZ(${position}px)`,
        justifyContent: `${justification}`,
      }}
    >
      {children}
    </span>
  );
};

export default RoomContent;
