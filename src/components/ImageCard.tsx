import React from 'react';
import { ImageData } from '../types';
const ImageCard: React.FC<{
  image: ImageData;
  setCurrent: React.Dispatch<React.SetStateAction<number>>;
  index: number;
}> = ({ image, index, setCurrent }) => {
  return (
    <div className='group relative'>
      <img src={image.url} alt={image.name} className='aspect-video' />
      <div
        onClick={() => {
          setCurrent(index);
        }}
        className='absolute inset-0  hidden group-hover:flex items-center justify-center cursor-pointer select-none'
      >
        <div className='bg-black opacity-50 w-full h-full absolute'></div>
        <span className='text-3xl z-50'>🔍</span>
      </div>
    </div>
  );
};

export default ImageCard;
