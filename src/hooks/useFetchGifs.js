import { useEffect, useState } from "react";
import { getGifs } from "../components/helpers/getGifts";

const useFetchGifs = (category) => {
  const [image, setimage] = useState([]);
  const [isLoanding, setisLoanding] = useState(true)

  const images = async () => {
    const newImage = await getGifs(category);
    setimage(newImage);
    setisLoanding(false);
  };

  useEffect(() => {
    images();
  }, []);

  return {
    image: image,
    isLoanding
  };
};
export default useFetchGifs;
