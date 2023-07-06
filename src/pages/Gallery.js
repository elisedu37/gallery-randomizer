import React, { useState, useEffect } from 'react';
// Liste des datas et des blocs
import { imageData } from '../data/imageData';
import listBlocks from '../utils/listBlocks';
// Composants
import { BlockBase } from '../components/BlockBase';

/**
 * Gallerie d'images
 * @returns {JSX}
 */
const Gallery = () => {
  // Liste des blocs
  const [blocks, setBlocks] = useState();

  // Création du modèle à l'initialisation
  useEffect(() => {
    createModel();
  }, []);

  const createModel = () => {
    // On récupère la liste d'images
    var data = [...imageData];
    // On stocke le modèle créer au fur et à mesure
    var modelBlock = [];

    while (data.length > 0) {
      // Choix du nombre d'images affichés dans le bloc
      var randomBlockIndex = 1;
      if (data.length > 5) {
        var randomBlockIndex = Math.floor(Math.random() * 5) + 1;
      } else if (data.length === 1) {
        var randomBlockIndex = 1;
      } else {
        var randomBlockIndex = Math.floor(Math.random() * data.length + 1);
      }

      const block = listBlocks[randomBlockIndex];
      const blockLength = block?.length;

      // Choix du bloc
      let randomNb = Math.floor(Math.random() * blockLength) || 0;
      let blockSelected = listBlocks[randomBlockIndex][randomNb];

      // Images qui seront dans le bloc
      const images = data?.splice(0, randomBlockIndex);

      // Ajout du bloc sélectionné dans le modèle
      modelBlock.push({ blockSelected, images });
    }
    // On set la liste des blocs avec le modèle créer
    setBlocks(modelBlock);
  };

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
