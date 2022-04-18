import React from 'react';
import { ImageGridProps } from '../types';
import ImageCard from './ImageCard';
const ImageGrid: React.FC<ImageGridProps> = ({ images, setCurrent }) => {
  return (
    <div id='image-grid' className='container grid grid-cols-4 mx-auto gap-2'>
      {images?.map((image, index) => (
        <ImageCard
          image={image}
          key={image.uuid}
          setCurrent={setCurrent}
          index={index}
        />
      ))}
    </div>
  );
};

export default ImageGrid;
