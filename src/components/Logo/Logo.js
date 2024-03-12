import React from 'react';
import Tilt from 'react-parallax-tilt';

function Logo() {
  return (
    <Tilt reset={true}>
      <div className="p-2 m-4 mt-0 h-16 w-16 border-b-gray-500 bg-gradient-to-r from-fuchsia-600 to-purple-600">
        <img alt="Logo" src="./brain-logo.png" />
      </div>
    </Tilt>
  );
}

export default Logo;
