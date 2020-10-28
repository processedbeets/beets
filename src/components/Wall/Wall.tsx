import './Wall.css';

import React from 'react';

export type WallType = {
  title: string;
  position: string;
  content?: string;
};

const Wall = ({ title, position }: WallType) => {
  return (
    <span
      className="cube-face wall"
      style={{
        transform: `translateZ(${position}px)`,
      }}
    >
      <h1 style={{ animationDelay: `${(Math.random() * 1000).toString()}ms` }}>{title}</h1>
    </span>
  );
};

export default Wall;
