import './Corridor.scss';

import React, { useEffect, useState } from 'react';
import RoomContent, { HangPosition } from '../RoomContent/RoomContent';

import Door from '../Door/Door';
import FloorPanel from '../FloorPanel/FloorPanel';
import { FloorPanelType } from '../../types/FloorPanelType';
import Sign from '../Sign/Sign';
import { TechnologyType } from '../../types/Technology';
import angular from '../../images/angular.svg';
import axios from 'axios';
import ngrx from '../../images/ngrx.svg';
import react from '../../images/react.svg';
import redux from '../../images/redux.svg';
import rxjs from '../../images/rxjs.svg';
import sass from '../../images/sass.svg';
import typescript from '../../images/typescript.svg';
import usePositionZ from '../../hooks/usePositionZ';

const technologies: TechnologyType[] = [
  {
    id: 1,
    title: 'react',
    image: react,
    altText: 'three blue eliptical circles with dot in centre',
  },
  {
    id: 2,
    title: 'redux',
    image: redux,
    altText: 'Purple celtic knot shape',
  },
  {
    id: 3,
    title: 'angular',
    image: angular,
    altText: 'red shield with letter A in the centre',
  },
  {
    id: 4,
    title: 'typescript',
    image: typescript,
    altText: 'a square with the letters T S in the corner',
  },
  {
    id: 5,
    title: 'sass',
    image: sass,
    altText: 'The word "sass" in a serif font',
  },
  {
    id: 6,
    title: 'rxjs',
    image: rxjs,
    altText: 'A purple dragon circling back on itself forming a complete circle',
  },
  {
    id: 7,
    title: 'ngrx',
    image: ngrx,
    altText: 'A purple dragon circling back on itself in front of a black shield',
  },
];

const Corridor = () => {
  const [profiles, setProfiles] = useState([]);
  const [education, setEducation] = useState([]);

  useEffect(() => {
    axios.get('/api/profiles').then(({ data }) => {
      setProfiles(data);
    });
  }, []);

  useEffect(() => {
    axios.get('/api/education').then(({ data }) => {
      setEducation(data);
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

        {/* Profiles */}
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

        {/* Technologies */}
        <Door title="Technologies" position={currentPosition} />
        {technologies.map((technolgy: TechnologyType) => {
          currentPosition = currentPosition - panelGap;
          orientation = orientation === HangPosition.RIGHT ? HangPosition.LEFT : HangPosition.RIGHT;
          return (
            <RoomContent position={currentPosition} hang={orientation}>
              <Sign title={technolgy.title}>
                <img src={technolgy.image} alt={technolgy.altText} />
              </Sign>
            </RoomContent>
          );
        })}

        {/* Education */}
        <Door title="Education" position={currentPosition} />
        {education.map((attribute: FloorPanelType) => {
          currentPosition = currentPosition - panelGap;
          orientation = orientation === HangPosition.RIGHT ? HangPosition.LEFT : HangPosition.RIGHT;
          return (
            <RoomContent
              key={attribute.id.toString()}
              position={currentPosition}
              hang={orientation}
            >
              <FloorPanel
                hang={orientation}
                title={attribute.title}
                subHeading={attribute.subHeading}
              />
            </RoomContent>
          );
        })}

        {/* Employment */}
        <Door title="Employment" position={currentPosition} />
        {education.map((job: FloorPanelType) => {
          currentPosition = currentPosition - panelGap;
          orientation = orientation === HangPosition.RIGHT ? HangPosition.LEFT : HangPosition.RIGHT;
          return (
            <RoomContent key={job.id.toString()} position={currentPosition} hang={orientation}>
              <FloorPanel hang={orientation} title={job.title} subHeading={job.subHeading} />
            </RoomContent>
          );
        })}
      </div>
    </div>
  );
};

export default Corridor;
