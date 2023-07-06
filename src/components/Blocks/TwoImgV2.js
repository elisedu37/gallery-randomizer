import React from 'react';

const TwoImgV2 = ({ img }) => {
  return (
    <section className="flex gap-4">
      <div className="w-1/3 h-56 overflow-hidden">
        <img
          src={img[0].url}
          className="w-full h-full object-cover"
          alt={img[0].alt}
        />
      </div>
      <div className="w-2/3 h-56 overflow-hidden">
        <img
          src={img[1].url}
          className="w-full h-full object-cover"
          alt={img[1].alt}
        />
      </div>
    </section>
  );
};

export { TwoImgV2 };
