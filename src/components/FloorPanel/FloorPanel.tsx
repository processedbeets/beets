import './FloorPanel.scss';

import React, { useRef, useState } from 'react';

import { IFloorPanel } from '../../types/IFloorPanel';
import { Justification } from '../../types/Justification.enum';

const red = 'rgba(223, 170, 170)';
const purple = 'rgba(223, 170, 223)';
const green = 'rgba(178, 223, 170)';
const blue = 'rgba(137, 154, 210)';
// const yellow = 'rgba(231, 225, 152, 0.61)';
const yellow = 'rgba(237, 198, 0)';
const orange = 'rgb(231, 166, 17)';

const colours = [red, purple, green, blue, yellow, orange];

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
  const [showContent, setShowContent] = useState(false);

  return (
    <span
      onClick={() => {
        content && setShowContent(!showContent);
      }}
      style={{
        background: backgroundColour,
        width: `${showContent ? 100 : 40}%`,
        height: `${showContent ? 100 : 60}%`,
      }}
      // className={['poster', showContent ? 'poster--expand' : ''].join(' ')}
      className="poster"
    >
      {/* {content && (
        <button
        className="floor-panel--toggle-content"
        onClick={() => {
          setShowContent(!showContent);
        }}
        ></button>
      )} */}
      {superHeading && showContent && (
        <div className="floor-panel__heading__wrapper">
          <span
            className={
              justification === Justification.LEFT
                ? 'floor-panel__heading--left'
                : 'floor-panel__heading--right'
            }
          >
            {superHeading}
          </span>
        </div>
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
            ? 'floor-panel__subheading--left'
            : 'floor-panel__subheading--right'
        }
      >
        {subHeading}
      </span>
      {showContent && (
        <div className="floor-panel__content__wrapper">
          <ul className={'floor-panel__content'}>
            {content && content.map((detail) => <li>{detail}</li>)}
          </ul>
        </div>
      )}
    </span>
  );
};

export default FloorPanel;
