import React from 'react';
import { CardInverse, ImageEnlarged } from '../atoms';

export default ({ src }) => {
  return (
    <CardInverse>
      <ImageEnlarged src={src} />
    </CardInverse>
  );
};
