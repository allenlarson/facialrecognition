import React from 'react';

const ImageLinkForm = () => {
  return (
    <div className="p-5 flex flex-col border border-slate-300 rounded-lg w-[800px] justify-center content-center">
      <p className="text-2xl text-center">
        This Magic Brain will detect faces in your pictures. Give it a try.
      </p>
      <div className="text-center">
        <input className="border border-slate-300" type="text" />
        <button>Detect</button>
      </div>
    </div>
  );
};

export default ImageLinkForm;
