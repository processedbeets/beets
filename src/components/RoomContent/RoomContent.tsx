import './RoomContent.scss';

import React from 'react';

export enum HangPosition {
  LEFT = 'flex-start',
  CENTRE = 'center',
  RIGHT = 'flex-end',
}

export type RoomContentType = {
  title?: string;
  position: string;
  hang: HangPosition;
  children?: React.ReactNode;
};

const RoomContent = ({ title, position, hang, children }: RoomContentType) => {
  return (
    <span
      className="room-content"
      style={{
        transform: `translateZ(${position}px)`,
        justifyContent: `${hang}`,
      }}
    >
      {children}
      {/* <span className="room-content__sign">
        <h2>{title}</h2>
        {children}
      </span> */}
    </span>
  );
};

export default RoomContent;
