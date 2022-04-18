import React from 'react';
import { ImageGridProps } from '../types';
import ImageCard from './ImageCard';
const ImageGrid: React.FC<ImageGridProps> = ({ images }) => {
  return (
    <div id='image-grid' className='container grid grid-cols-4 mx-auto gap-2'>
      {images?.map((image) => (
        <ImageCard image={image} key={image.uuid} />
      ))}
    </div>
  );
};

export default ImageGrid;
