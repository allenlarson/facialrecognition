import React from 'react';

const FacialRecognition = ({ imageURL }) => {
  return (
    <div className="mt-4">
      <img alt="" src={imageURL} width="500px" height="auto" />
    </div>
  );
};

export default FacialRecognition;
