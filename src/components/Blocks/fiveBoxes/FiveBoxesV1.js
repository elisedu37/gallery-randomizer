import React from 'react';

const FiveBoxesV1 = ({ img }) => {
  console.log(img);
  return (
    <section>
      <div className="w-3	h-3 overflow-auto">
        <img src="https://images.pexels.com/photos/15109908/pexels-photo-15109908/free-photo-of-fleurs-insecte-papillon-fleurir.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" />
      </div>
      <div className="w-3	h-3 overflow-auto">
        <img src="https://images.pexels.com/photos/15109908/pexels-photo-15109908/free-photo-of-fleurs-insecte-papillon-fleurir.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" />
      </div>
    </section>
  );
};

export { FiveBoxesV1 };
