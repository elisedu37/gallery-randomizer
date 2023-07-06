import React from 'react';

const FourBoxesV2 = ({ img }) => {
  return (
    <section className="flex gap-4">
      <div className="w-72 h-72 overflow-auto">
        <img src={img[0].url} className="w-full h-full object-cover" />
      </div>
      <div className="w-72 h-72 overflow-auto">
        <img src={img[1].url} className="w-full h-full object-cover" />
      </div>
      <div className="w-72 h-72 overflow-auto">
        <img src={img[2].url} className="w-full h-full object-cover" />
      </div>
      <div className="w-72 h-72 overflow-auto">
        <img src={img[3].url} className="w-full h-full object-cover" />
      </div>
    </section>
  );
};

export { FourBoxesV2 };
