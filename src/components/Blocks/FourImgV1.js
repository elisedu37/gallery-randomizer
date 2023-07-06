import React from 'react';

/**
 * Bloc pour 4 images
 * @param {Array} img tableau avec les images à prendre
 * @returns {JSX}
 */
const FourImgV1 = ({ img }) => {
  return (
    <section className="flex gap-4">
      {img.map((image, index) => (
        <div key={index} className="w-1/4">
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

export { FourImgV1 };
