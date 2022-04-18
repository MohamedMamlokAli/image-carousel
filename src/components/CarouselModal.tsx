import React from 'react';
import { CurrentCarouselImage } from '../types';

const CarouselModal: React.FC<CurrentCarouselImage> = ({
  index,
  length,
  url,
  setCurrent,
  title,
}) => {
  return (
    <div className='fixed h-screen inset-0 flex flex-col md:flex-row items-center justify-around '>
      {/* Carousel Background when clicked, it closes the carousel */}
      <div
        className='absolute bg-black opacity-90 w-full h-full'
        onClick={() => setCurrent(-1)}
      ></div>
      {/* Main carousel content */}
      <div className='z-50 w-full md:w-max  h-max text-white flex items-center justify-between  '>
        {/* Previous image button */}
        <button
          onClick={() => setCurrent(index - 1 < 0 ? length : index - 1)}
          className='bg-white text-black w-20 py-2 hidden md:block absolute left-2'
        >
          Previous
        </button>
        {/* Image details  */}
        <div className=' relative md:max-w-lg lg:max-w-2xl 2xl:max-w-3xl text-center mx-auto space-y-4 flex-1 '>
          <div className='relative  mx-auto'>
            <img
              src={url}
              alt=''
              className=' w-full  aspect-video md:aspect-square object-cover'
            />
            <div className='absolute bottom-0  text-center w-full backdrop-blur-lg py-1 bg-opacity-75 bg-black '>
              <p>{title}</p>
            </div>
          </div>
          <div id='Image-counter' className=''>
            <p>
              Image {index + 1} / {length + 1}
            </p>
          </div>
          {/* Mobile image navigator */}
          <div className=' md:hidden  h-10 flex w-full justify-around'>
            <button
              onClick={() => setCurrent(index - 1 < 0 ? length : index - 1)}
              className='bg-white text-black w-20 py-2  md:hidden'
            >
              Previous
            </button>
            <button
              onClick={() => setCurrent(index + 1 > length ? 0 : index + 1)}
              className='bg-white text-black w-20 py-2  md:hidden'
            >
              Next
            </button>
          </div>
        </div>

        {/* Next Image button */}
        <button
          onClick={() => setCurrent(index + 1 > length ? 0 : index + 1)}
          className='bg-white text-black w-20 py-2 hidden md:block absolute right-2'
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default CarouselModal;
