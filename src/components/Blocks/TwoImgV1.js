import React from 'react';

/**
 * Bloc pour 2 images
 * @param {Array} img tableau avec les images à prendre
 * @returns {JSX}
 */
const TwoImgV1 = ({ img }) => {
  return (
    <section className="flex gap-4">
      {img.map((image, index) => (
        <div key={index} className="w-1/2 h-56 overflow-hidden">
          <img
            src={image.url}
            className="w-full h-full object-cover"
            alt={image.alt}
          />
        </div>
      ))}
    </section>
  );
};

export { TwoImgV1 };
