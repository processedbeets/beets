import './Corridor.scss';

import React, { useEffect, useState } from 'react';

import FloorPanelRoom from '../Rooms/FloorPanelRoom/FloorPanelRoom';
import { ISign } from '../../types/ISign';
import SignRoom from '../Rooms/SignRoom/SignRoom';
import angular from '../../images/angular.svg';
import axios from 'axios';
import azure from '../../images/azure.svg';
import core from '../../images/core.svg';
import css from '../../images/css.svg';
import exit from '../../images/exit.svg';
import html from '../../images/html.svg';
import js from '../../images/js.svg';
import ngrx from '../../images/ngrx.svg';
import node from '../../images/node.svg';
import react from '../../images/react.svg';
import redux from '../../images/redux.svg';
import rxjs from '../../images/rxjs.svg';
import sass from '../../images/sass.svg';
import sql from '../../images/sql.svg';
import typescript from '../../images/typescript.svg';
import usePositionZ from '../../hooks/usePositionZ';

const technologies: ISign[] = [
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
  {
    id: 8,
    title: 'Javascript',
    image: js,
    altText: 'A purple dragon circling back on itself in front of a black shield',
  },
  {
    id: 9,
    title: 'Html',
    image: html,
    altText: 'A purple dragon circling back on itself in front of a black shield',
  },
  {
    id: 10,
    title: 'Css',
    image: css,
    altText: 'A purple dragon circling back on itself in front of a black shield',
  },
  {
    id: 10,
    title: 'Node Js',
    image: node,
    altText: 'A purple dragon circling back on itself in front of a black shield',
  },
  {
    id: 11,
    title: '.net core',
    image: core,
    altText: 'A purple circle with the words ".net core" in it',
  },
  {
    id: 12,
    title: 'Azure',
    image: azure,
    altText: 'A blue triangle',
  },
  {
    id: 13,
    title: 'MS Sql',
    image: sql,
    altText: 'A grid folded over like a helix with the words "sql server"',
  },
];

const Corridor = () => {
  const [profiles, setProfiles] = useState([]);
  const [education, setEducation] = useState([]);
  const [employment, setEmployment] = useState([]);

  useEffect(() => {
    axios.get('/api/profiles').then(({ data }) => {
      setProfiles(data);
    });

    axios.get('/api/education').then(({ data }) => {
      setEducation(data);
    });

    axios.get('/api/jobs').then(({ data }) => {
      setEmployment(data);
    });
  }, []);

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
        <span className="corridor__walls__wall--top"></span>
        <span className="corridor__walls__wall--bottom"></span>
        <span className="corridor__walls__wall--left"></span>
        <span className="corridor__walls__wall--right"></span>
        <span className="corridor__walls__wall--back">
          <img className="fire-exit" src={exit}></img>
        </span>

        {/* Profiles */}
        <FloorPanelRoom
          title="Profiles"
          startPosition={200}
          endPosition={150}
          roomItems={profiles}
        />

        {/* Technologies */}
        <SignRoom
          title="Technologies"
          startPosition={150}
          endPosition={100}
          roomItems={technologies}
        />

        {/* Education */}
        <FloorPanelRoom
          title="Education"
          startPosition={100}
          endPosition={0}
          roomItems={education}
        />

        {/* Employment */}
        <FloorPanelRoom
          title="Employment"
          startPosition={0}
          endPosition={-200}
          roomItems={employment}
        />
      </div>
    </div>
  );
};

export default Corridor;
