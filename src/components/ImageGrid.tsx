import React from 'react';
import { ImageGridProps } from '../types';
import ImageCard from './ImageCard';
const ImageGrid: React.FC<ImageGridProps> = ({
  images,
  setCurrent,
  current,
}) => {
  return (
    <div
      id='image-grid'
      className='container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-2 mx-auto gap-2'
    >
      {images?.map((image, index) => (
        <ImageCard
          image={image}
          key={image.uuid}
          setCurrent={setCurrent}
          index={index}
          current={current}
        />
      ))}
    </div>
  );
};

export default ImageGrid;
