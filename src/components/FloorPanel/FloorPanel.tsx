import './FloorPanel.scss';

import React, { useRef } from 'react';

import { IFloorPanel } from '../../types/IFloorPanel';
import { Justification } from '../../types/Justification.enum';

const red = 'rgba(223, 170, 170, 0.61)';
const purple = 'rgba(223, 170, 223, 0.61)';
const green = 'rgba(178, 223, 170, 0.61)';
const blue = 'rgba(137, 154, 210, 0.61)';
const yellow = 'rgba(231, 225, 152, 0.61)';

const colours = [red, purple, green, blue, yellow];

const FloorPanel = ({ justification, title, subHeading, superHeading }: IFloorPanel) => {
  const random = useRef(Math.floor(Math.random() * colours.length));
  const backgroundColour = colours[random.current];

  return (
    <span style={{ background: backgroundColour }} className="floor-panel">
      {superHeading && (
        <span
          className={
            justification === Justification.LEFT
              ? 'floor-panel__content--left'
              : 'floor-panel__content--right'
          }
        >
          {superHeading}
        </span>
      )}
      <p
        className={
          justification === Justification.RIGHT
            ? 'floor-panel__title--left'
            : 'floor-panel__title--right'
        }
      >
        {title}
      </p>
      <span
        className={
          justification === Justification.LEFT
            ? 'floor-panel__content--left'
            : 'floor-panel__content--right'
        }
      >
        {subHeading}
      </span>
    </span>
  );
};

export default FloorPanel;
