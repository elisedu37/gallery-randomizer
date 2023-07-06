import React from 'react';

const OneBigBox = ({ img }) => {
  return (
    <section className="flex">
      <div className="w-72 h-72 overflow-auto">
        <img src={img[0].url} className="w-full h-full object-cover" />
      </div>
    </section>
  );
};

export { OneBigBox };
