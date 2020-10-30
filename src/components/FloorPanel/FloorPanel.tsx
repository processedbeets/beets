import './FloorPanel.scss';

import { HangPosition } from '../RoomContent/RoomContent';
import React from 'react';

export type FloorPositionType = {
  hang: HangPosition;
  text: string;
};

const FloorPanel = ({ hang, text }: FloorPositionType) => {
  const textAlign = hang === HangPosition.LEFT ? 'left' : 'right';

  return (
    <span style={{ textAlign: textAlign }} className="floor-panel">
      {text}
    </span>
  );
};

export default FloorPanel;
