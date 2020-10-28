import './App.css';

import Header from './components/Header';
import React from 'react';
import usePositionZ from './hooks/usePositionZ';

const App = () => {
  let position = usePositionZ();

  return (
    <div className="App">
      {/* <section className="content"></section>
      <Header title="beets">{<Detail content="dot" /> }</Header> */}
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div id="cube" className="cube">
        <div
          className="cube-faces"
          style={{
            transform: `translateZ(${position}px)`,
          }}
        >
          <span className="cube-face cube-face--front"></span>
          <span className="cube-face cube-face--back">
            <h1 className="email">david@beets.design</h1>
          </span>
          <span className="cube-face cube-face--back back-1">
            <h1>test stuff</h1>
          </span>
          <span className="cube-face cube-face--back back-2">
            <Header title="portfolio" />
            {/* <h1>other stuff</h1> */}
          </span>
          <span className="cube-face cube-face--top"></span>
          <span className="cube-face cube-face--bottom"></span>
          <span className="cube-face cube-face--left"></span>
          <span className="cube-face cube-face--right"></span>
        </div>
      </div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default App;
