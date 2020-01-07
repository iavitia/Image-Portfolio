import React, { useState } from 'react';

import Navbar from '../../molecules/Navbar';

import ImageThumbnail from '../../atoms/ImageThumbnail';

import { Card } from '../../molecules';
import CardInverse from '../../atoms/CardInverse';
import Container from '../../atoms/Container';
import ImageEnlarged from '../../atoms/ImageEnlarged';

import { mannequinns, windows } from '../../../images';

function Portfolio() {
  const [imageSet, setImageSet] = useState(mannequinns);
  const [currentImage, setCurrentImage] = useState(imageSet[0].source);

  return (
    <Container>
      <CardInverse>
        <ImageEnlarged src={currentImage} />
      </CardInverse>
      <div>
        <Navbar />
        <Card title="Portfolio">
          {imageSet.map(image => {
            return (
              <ImageThumbnail
                onClick={() => {
                  setCurrentImage(image.source);
                }}
                key={image.id}
                src={image.source}
                alt='thumbnail'
              />
            );
          })}
        </Card>

      </div>
    </Container>
  );
}

export default Portfolio;
