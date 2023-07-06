import React from 'react';
import { blockComponents } from './../utils/blockComponents';

export const BlockBase = ({ block }) => {
  const BlockComponent = blockComponents[block.blockSelected];

  if (BlockComponent) {
    return <BlockComponent img={block.images} />;
  } else {
    return <div>Block not found</div>;
  }
};
