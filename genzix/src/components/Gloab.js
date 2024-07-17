import React from 'react';
import './Globe.css';

const Globe = () => {
  return (
    <div className="globe">
      <div className="globe-wrap">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle-hor"></div>
        <div className="circle-hor-middle"></div>
      </div>
    </div>
  );
};

export default Globe;
