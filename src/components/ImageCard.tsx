import React from 'react';
import { ImageData } from '../types';
const ImageCard: React.FC<{ image: ImageData }> = ({ image }) => {
  return (
    <div>
      <img src={image.url} alt={image.name} className='aspect-video' />
    </div>
  );
};

export default ImageCard;
