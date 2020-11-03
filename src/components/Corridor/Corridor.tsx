import './Corridor.scss';

import React, { useEffect, useState } from 'react';
import RoomContent, { HangPosition } from '../RoomContent/RoomContent';

import Door from '../Door/Door';
import FloorPanel from '../FloorPanel/FloorPanel';
import { FloorPanelType } from '../../types/FloorPanelType';
import Sign from '../Sign/Sign';
import angular from '../../images/angular.svg';
import axios from 'axios';
import ngrx from '../../images/ngrx.svg';
import react from '../../images/react.svg';
import redux from '../../images/redux.svg';
import rxjs from '../../images/rxjs.svg';
import sass from '../../images/sass.svg';
import typescript from '../../images/typescript.svg';
import usePositionZ from '../../hooks/usePositionZ';

const Corridor = () => {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    axios.get('/api/profiles').then(({ data }) => {
      setProfiles(data);
    });
  }, []);

  let position = usePositionZ();
  //   let perspectiveOrigin = usePositionXY();
  let perspectiveOrigin = { x: 50, y: 50 };
  const length = 400;
  const numberOfPanels = 20;
  const panelGap = length / numberOfPanels;
  const startPosition = 200;
  let currentPosition = startPosition;
  let orientation = HangPosition.LEFT;

  return (
    <div
      className="corridor"
      style={{
        perspectiveOrigin: `${perspectiveOrigin.x}% ${perspectiveOrigin.y}%`,
      }}
    >
      <div
        className="corridor__walls"
        style={{
          transform: `translateZ(${position}px)`,
        }}
      >
        <span className="corridor__walls__wall--front"></span>
        <span className="corridor__walls__wall--top"></span>
        <span className="corridor__walls__wall--bottom"></span>
        <span className="corridor__walls__wall--left"></span>
        <span className="corridor__walls__wall--right"></span>
        <span className="corridor__walls__wall--back"></span>
        <Door title="Profile" position={currentPosition} />
        {profiles.map((floorPanel: FloorPanelType) => {
          currentPosition = currentPosition - panelGap;
          orientation = orientation === HangPosition.RIGHT ? HangPosition.LEFT : HangPosition.RIGHT;
          return (
            <RoomContent
              key={floorPanel.id.toString()}
              position={currentPosition}
              hang={orientation}
            >
              <FloorPanel
                hang={orientation}
                title={floorPanel.title}
                subHeading={floorPanel.subHeading}
              />
            </RoomContent>
          );
        })}
        <Door title="Technologies" position="50" />
        <RoomContent position="45" hang={HangPosition.LEFT}>
          <Sign title="React">
            <img src={react} alt="three blue eliptical circles with dot in centre" />
          </Sign>
        </RoomContent>
        <RoomContent position="40" hang={HangPosition.RIGHT}>
          <Sign title="Redux">
            <img src={redux} alt="Purple celtic knot shape" />
          </Sign>
        </RoomContent>
        <RoomContent position="35" hang={HangPosition.LEFT}>
          <Sign title="Angular">
            <img src={angular} alt="red shield with letter A in the centre" />
          </Sign>
        </RoomContent>
        <RoomContent position="30" hang={HangPosition.RIGHT}>
          <Sign title="Typescript">
            <img src={typescript} alt="a square with the letters T S in the corner" />
          </Sign>
        </RoomContent>
        <RoomContent position="25" hang={HangPosition.LEFT}>
          <Sign title="Sass">
            <img src={sass} alt="The word 'sass' in a serif font" />
          </Sign>
        </RoomContent>
        <RoomContent position="20" hang={HangPosition.RIGHT}>
          <Sign title="RxJs">
            <img
              src={rxjs}
              alt="A purple dragon circling back on itself forming a complete circle"
            />
          </Sign>
        </RoomContent>
        <RoomContent position="15" hang={HangPosition.LEFT}>
          <Sign title="NgRx">
            <img
              src={ngrx}
              alt="A purple dragon circling back on itself in front of a black shield"
            />
          </Sign>
        </RoomContent>
        <Door title="Education" position="0" />
        <Door title="Employment" position="-50" />
        <Door title="david@beets.design" position="-100" />
      </div>
    </div>
  );
};

export default Corridor;
