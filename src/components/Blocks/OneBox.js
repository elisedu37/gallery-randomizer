import React from 'react';

const OneBox = ({ img }) => {
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

export { OneBox };
