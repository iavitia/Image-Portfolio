import React, { useState } from 'react';

import Navbar from '../../molecules/Navbar';

import ImageThumbnail from '../../atoms/ImageThumbnail';

import Card from '../../atoms/Card';
import CardInverse from '../../atoms/CardInverse';
import CardTitle from '../../atoms/CardTitle';
import Container from '../../atoms/Container';
import ImageEnlarged from '../../atoms/ImageEnlarged';
import CardScroll from '../../atoms/CardScroll';

import { mannequinns, windows } from '../../../images';

function Portfolio() {
  const [imageSet, setImageSet] = useState(mannequinns);
  const [currentImage, setCurrentImage] = useState(imageSet[0].source);

  return (
    <Container>
      <CardInverse>
        <ImageEnlarged src={currentImage} />
      </CardInverse>
      <Card>
        <Navbar />
        <CardTitle>Portfolio</CardTitle>
        <CardScroll>
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
        </CardScroll>
      </Card>
    </Container>
  );
}

export default Portfolio;
