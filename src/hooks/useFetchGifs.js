import { useEffect, useState } from "react";
import { getGifs } from '../helpers/getGifs';

// Un hook es solo una función que regresa algo
export const useFetchGifs = (category) => {
  // Normal hooks
  const [images, setimages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getImages = async () => {
    const newImages = await getGifs(category);
    console.log(newImages);
    setimages(newImages);
    setIsLoading(false);
  };

  useEffect(() => {
    getImages();
  }, []);

  return {
    images,
    isLoading,
  };
};
