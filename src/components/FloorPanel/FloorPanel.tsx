import './FloorPanel.scss';

import { HangPosition } from '../RoomContent/RoomContent';
import React from 'react';

export type FloorPositionType = {
  hang: HangPosition;
  text: string;
  title: string;
};

const red = 'rgba(223, 170, 170, 0.61)';
const purple = 'rgba(223, 170, 223, 0.61)';
const green = 'rgba(178, 223, 170, 0.61)';
const blue = 'rgba(137, 154, 210, 0.61)';
const yellow = 'rgba(231, 225, 152, 0.61)';

const colours = [red, purple, green, blue, yellow];
const random = Math.floor(Math.random() * colours.length);

const FloorPanel = ({ hang, title, text }: FloorPositionType) => {
  const textAlign = hang === HangPosition.LEFT ? 'left' : 'right';
  const backgroundColour = colours[random];

  return (
    <span style={{ background: backgroundColour }} className="floor-panel">
      <p
        className={
          hang === HangPosition.RIGHT ? 'floor-panel__title--left' : 'floor-panel__title--right'
        }
      >
        {title}
      </p>
      <span
        className={
          hang === HangPosition.LEFT ? 'floor-panel__content--left' : 'floor-panel__content--right'
        }
      >
        {text}
      </span>
    </span>
  );
};

export default FloorPanel;
