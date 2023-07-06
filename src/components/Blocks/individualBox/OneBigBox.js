import React from 'react';

const OneBigBox = ({ img }) => {
  return (
    <section className="flex gap-4">
      <div className="w-full h-52 overflow-auto">
        <img src={img[0].url} className="w-full h-full object-cover" />
      </div>
    </section>
  );
};

export { OneBigBox };
