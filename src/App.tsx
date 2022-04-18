import React, { useEffect, useState } from 'react';
import { ImageData } from './types';
import axios from 'axios';
import ImageGrid from './components/ImageGrid';
import CarouselModal from './components/CarouselModal';
function App() {
  const fetchImages = async () => {
    const images: ImageData[] = await (
      await axios.get(
        'https://scaleflex.cloudimg.io/v7/0.fe_task_static/pictures.json?vh=7a646d&func=proxy'
      )
    ).data;
    if (images) {
      setImages(images);
    }
  };
  const [images, setImages] = useState<ImageData[]>();
  const [current, setCurrent] = useState(-1);
  useEffect(() => {
    console.log(current);
  }, [current]);
  useEffect(() => {
    fetchImages();
  }, []);
  return (
    <div className='App text-center relative'>
      <h1 className='text-4xl mb-3'>Image Crousel</h1>
      <ImageGrid images={images} setCurrent={setCurrent} />
      {current > -1 && (
        <CarouselModal
          index={current}
          url={images ? images[current].url : ''}
          setCurrent={setCurrent}
          length={images ? images.length - 1 : -1}
        />
      )}
    </div>
  );
}

export default App;
