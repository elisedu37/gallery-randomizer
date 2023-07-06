import React from 'react';

/**
 * Bloc pour 1 image
 * @param {Array} img tableau avec les images à prendre
 * @returns {JSX}
 */
const OneImg = ({ img }) => {
  return (
    <section className="flex gap-4">
      <div className="flex w-full h-56 overflow-hidden">
        <img
          src={img[0].url}
          className="w-full object-cover"
          alt={img[0].alt}
        />
      </div>
    </section>
  );
};

export { OneImg };
