import './Corridor.css';

import React from 'react';
import Wall from '../Wall/Wall';
import usePositionXY from '../../hooks/usePositionXY';
import usePositionZ from '../../hooks/usePositionZ';

const Corridor = () => {
  let position = usePositionZ();
  let perspectiveOrigin = usePositionXY();

  return (
    <div
      id="cube"
      className="cube"
      style={{
        perspectiveOrigin: `${perspectiveOrigin.x}% ${perspectiveOrigin.y}%`,
      }}
    >
      <div
        className="cube-faces"
        style={{
          transform: `translateZ(${position}px)`,
        }}
      >
        <span className="cube-face cube-face--front"></span>
        <Wall title="david@beets.design" position="-100" />
        <Wall title="Test Stuff" position="-50" />
        <Wall title="Portfolio" position="-10" />
        <span className="cube-face cube-face--top"></span>
        <span className="cube-face cube-face--bottom"></span>
        <span className="cube-face cube-face--left"></span>
        <span className="cube-face cube-face--right"></span>
      </div>
    </div>
  );
};

export default Corridor;
