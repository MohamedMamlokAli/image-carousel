import React, { useEffect, useState } from 'react';
import { ImageData } from './types';
import axios from 'axios';
import ImageGrid from './components/ImageGrid';
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
  useEffect(() => {
    fetchImages();
  }, []);
  return (
    <div className='App text-red-400'>
      <ImageGrid images={images} />
    </div>
  );
}

export default App;
