import React from 'react';
import './FacialRecognition.css';

const FacialRecognition = ({ imageURL, box }) => {
  return (
    <div className="mt-4">
      <img id="inputimage" alt="" src={imageURL} width="500px" height="auto" />
      <div
        className="bounding-box"
        style={{
          top: box.topRow,
          right: box.rightCol,
          bottom: box.bottomRow,
          left: box.leftCol,
        }}
      ></div>
    </div>
  );
};

export default FacialRecognition;
