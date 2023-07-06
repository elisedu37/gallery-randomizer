import React from 'react';
// Enumération de tous les blocs
import { blockComponents } from './../utils/blockComponents';

/**
 * Bloc de base qui se construit selon le bloc séléctionné
 * @param {object} block contient le bloc séllectionné et le tableau d'images
 * @returns {JSX}
 */
export const BlockBase = ({ block }) => {
  const BlockComponent = blockComponents[block.blockSelected];

  if (BlockComponent) {
    return <BlockComponent img={block.images} />;
  } else {
    return <div>Le bloc n'existe pas</div>;
  }
};
