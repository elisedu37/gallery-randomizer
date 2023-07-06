import React, { useState, useEffect } from 'react';
import { imageData } from '../data/imageData';
import dataSchema from '../data/dataSchema';
import { BlockBase } from '../components/BlockBase';

const Gallery = () => {
  const [blocks, setBlocks] = useState();

  useEffect(() => {
    getSchemaModel();
  }, []);

  const getSchemaModel = () => {
    var data = [...imageData];
    const modelBlock = [];

    while (data.length > 0) {
      console.log('jjjj');

      var randomBlockIndex = 1;
      if (data.length > 5) {
        var randomBlockIndex = Math.floor(Math.random() * 5) + 1;
      } else if (data.length === 1) {
        var randomBlockIndex = 1;
      } else {
        var randomBlockIndex = Math.floor(Math.random() * data.length + 1);
      }

      const block = dataSchema[randomBlockIndex];
      const blockLength = block?.length;
      let random2 = Math.floor(Math.random() * blockLength) || 0;
      let blockSelected = dataSchema[randomBlockIndex][random2];
      const images = data?.splice(0, randomBlockIndex);

      modelBlock.push({ blockSelected, images });
    }
    setBlocks(modelBlock);
  };
  console.log(blocks);
  return (
    <div className="flex flex-col gap-4 max-w-screen-md m-auto bg-gray-200">
      {blocks ? (
        blocks?.map((block, index) => {
          return <BlockBase key={index} block={block} />;
        })
      ) : (
        <>Recharger la page</>
      )}
    </div>
  );
};

export default Gallery;
