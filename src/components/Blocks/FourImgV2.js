import React from 'react';

const FourImgV2 = ({ img }) => {
  return (
    <section className="flex gap-4">
      <div className="w-1/5">
        <img
          src={img[0].url}
          className="w-full h-full object-cover"
          alt={img[0].alt}
        />
      </div>
      <div className="w-1/5">
        <img
          src={img[1].url}
          className="w-full h-full object-cover"
          alt={img[1].alt}
        />
      </div>
      <div className="w-2/5">
        <img
          src={img[2].url}
          className="w-full h-full object-cover"
          alt={img[2].alt}
        />
      </div>
      <div className="w-1/5">
        <img
          src={img[3].url}
          className="w-full h-full object-cover"
          alt={img[3].alt}
        />
      </div>
    </section>
  );
};

export { FourImgV2 };
