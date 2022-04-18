import React from 'react';
import { CurrentCarouselImage } from '../types';

const CarouselModal: React.FC<CurrentCarouselImage> = ({
  index,
  length,
  url,
  setCurrent,
}) => {
  return (
    <div className='sticky h-screen inset-0 flex  items-center justify-center '>
      <div
        className='absolute bg-black w-full h-full'
        onClick={() => setCurrent(-1)}
      ></div>
      <div className='z-50 w-full text-white flex justify-evenly'>
        <button
          onClick={() => setCurrent(index - 1 < 0 ? length : index - 1)}
          className='bg-white text-black px-5 py-2'
        >
          Previous
        </button>
        <div>
          <img src={url} alt='' className='w-full h-full' />
          <p>
            Image {index + 1} / {length + 1}{' '}
          </p>
        </div>
        <button
          onClick={() => setCurrent(index + 1 > length ? 0 : index + 1)}
          className='bg-white text-black px-5 py-2'
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default CarouselModal;
