import React from 'react';

/**
 * Bloc pour 3 images
 * @param {Array} img tableau avec les images à prendre
 * @returns {JSX}
 */
const ThreeImgV2 = ({ img }) => {
  return (
    <section className="flex gap-4">
      <div className="w-2/4 h-56 overflow-hidden">
        <img
          src={img[0].url}
          className="w-full h-full object-cover"
          alt={img[0].alt}
        />
      </div>
      <div className="w-1/4 h-56 overflow-hidden">
        <img
          src={img[1].url}
          className="w-full h-full object-cover"
          alt={img[1].alt}
        />
      </div>
      <div className="w-1/4 h-56 overflow-hidden">
        <img
          src={img[2].url}
          className="w-full h-full object-cover"
          alt={img[2].alt}
        />
      </div>
    </section>
  );
};

export { ThreeImgV2 };
