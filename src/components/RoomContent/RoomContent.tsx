import './RoomContent.scss';

import React from 'react';

export enum HangPosition {
  LEFT = 'flex-start',
  CENTRE = 'center',
  RIGHT = 'flex-end',
}

export type RoomContentType = {
  position: string;
  hang: HangPosition;
  children?: React.ReactNode;
};

const RoomContent = ({ position, hang, children }: RoomContentType) => {
  return (
    <span
      className="room-content"
      style={{
        transform: `translateZ(${position}px)`,
        justifyContent: `${hang}`,
      }}
    >
      {children}
    </span>
  );
};

export default RoomContent;
