import './Corridor.scss';

import RoomContent, { HangPosition } from '../RoomContent/RoomContent';

import Door from '../Door/Door';
import FloorPanel from '../FloorPanel/FloorPanel';
import React from 'react';
import Sign from '../Sign/Sign';
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
        <RoomContent position="95" hang={HangPosition.RIGHT}>
          <FloorPanel hang={HangPosition.RIGHT} title="15+ years" text="industry experience" />
        </RoomContent>
        <RoomContent position="90" hang={HangPosition.LEFT}>
          <FloorPanel hang={HangPosition.LEFT} title="2+ years" text="React" />
        </RoomContent>
        <RoomContent position="85" hang={HangPosition.RIGHT}>
          <FloorPanel hang={HangPosition.RIGHT} title="6+ years" text="Angular" />
        </RoomContent>
        <RoomContent position="80" hang={HangPosition.LEFT}>
          <FloorPanel hang={HangPosition.LEFT} title="6+ years" text="Typescript" />
        </RoomContent>
        <RoomContent position="75" hang={HangPosition.RIGHT}>
          <FloorPanel
            hang={HangPosition.RIGHT}
            title="Microsoft Certified"
            text="Software Engineer"
          />
        </RoomContent>
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
        <span className="corridor__walls__wall--top"></span>
        <span className="corridor__walls__wall--bottom"></span>
        <span className="corridor__walls__wall--left"></span>
        <span className="corridor__walls__wall--right"></span>
      </div>
    </div>
  );
};

export default Corridor;
