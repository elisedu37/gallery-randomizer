import React from 'react';

const TwoBoxesV1 = ({ img }) => {
  return (
    <section className="flex gap-4">
      {img.map((image, index) => (
        <div key={index} className="w-1/2 h-52 overflow-auto">
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

export { TwoBoxesV1 };
