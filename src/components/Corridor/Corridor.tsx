import './Corridor.scss';

import RoomContent, { HangPosition } from '../RoomContent/RoomContent';

import Door from '../Door/Door';
import React from 'react';
import angular from '../../images/angular.svg';
import ngrx from '../../images/ngrx.svg';
import react from '../../images/react.svg';
import redux from '../../images/redux.svg';
import rxjs from '../../images/rxjs.svg';
import sass from '../../images/sass.svg';
import typescript from '../../images/typescript.svg';
import usePositionZ from '../../hooks/usePositionZ';

const Corridor = () => {
  let position = usePositionZ();
  //   let perspectiveOrigin = usePositionXY();
  let perspectiveOrigin = { x: 50, y: 50 };

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
        <Door title="Profile" position="100" />
        <Door title="Technologies" position="50" />
        <RoomContent title="React" position="45" hang={HangPosition.LEFT}>
          <img src={react} alt="three blue eliptical circles with dot in centre" />
        </RoomContent>
        <RoomContent title="Redux" position="40" hang={HangPosition.RIGHT}>
          <img src={redux} alt="Purple celtic knot shape" />
        </RoomContent>
        <RoomContent title="Angular" position="35" hang={HangPosition.LEFT}>
          <img src={angular} alt="red shield with letter A in the centre" />
        </RoomContent>
        <RoomContent title="Typescript" position="30" hang={HangPosition.RIGHT}>
          <img src={typescript} alt="a square with the letters T S in the corner" />
        </RoomContent>
        <RoomContent title="Sass" position="25" hang={HangPosition.LEFT}>
          <img src={sass} alt="The word 'sass' in a serif font" />
        </RoomContent>
        <RoomContent title="RxJs" position="20" hang={HangPosition.RIGHT}>
          <img src={rxjs} alt="A purple dragon circling back on itself forming a complete circle" />
        </RoomContent>
        <RoomContent title="NgRx" position="15" hang={HangPosition.LEFT}>
          <img
            src={ngrx}
            alt="A purple dragon circling back on itself in front of a black shield"
          />
        </RoomContent>
        <Door title="Education" position="0" />
        <Door title="Employment" position="-50" />
        <Door title="david@beets.design" position="-100" />
        <span className="corridor__walls__wall--top"></span>
        <span className="corridor__walls__wall--bottom"></span>
        <span className="corridor__walls__wall--left"></span>
        <span className="corridor__walls__wall--right"></span>
      </div>
    </div>
  );
};

export default Corridor;
