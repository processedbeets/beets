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

export type FloorPanelDetail = IFloorPanel & { justification: Justification };

const FloorPanel = ({
  justification,
  title,
  subHeading,
  superHeading,
  content,
}: FloorPanelDetail) => {
  const random = useRef(Math.floor(Math.random() * colours.length));
  const backgroundColour = colours[random.current];
  let showContent = useRef(false);

  return (
    <span style={{ background: backgroundColour }} className="floor-panel">
      <button onClick={() => (showContent.current = !showContent.current)}>show</button>
      {showContent && <ul>{content && content.map((detail) => <li>{detail}</li>)}</ul>}
      {superHeading && (
        <span
          className={
            justification === Justification.LEFT
              ? 'floor-panel__heading--left'
              : 'floor-panel__heading--right'
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
