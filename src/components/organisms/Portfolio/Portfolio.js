import React, { useState } from 'react';

import { Card, Navbar, EnlargedImage } from '../../molecules';
import Container from '../../atoms/Container';
import ImageThumbnail from '../../atoms/ImageThumbnail';
import { mannequinns } from '../../../images';

function Portfolio() {
  const [imageSet, setImageSet] = useState(mannequinns);
  const [currentImage, setCurrentImage] = useState(imageSet[0].source);

  return (
    <Container>
      <EnlargedImage src={currentImage} />
      <div>
        <Navbar
          imageSet={imageSet}
          setImageSet={setImageSet}
          setCurrentImage={setCurrentImage}
        />

        <Card>
          {imageSet.map(({ source, id }) => {
            return (
              <ImageThumbnail
                onClick={() => {
                  setCurrentImage(source);
                }}
                key={id}
                src={source}
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
