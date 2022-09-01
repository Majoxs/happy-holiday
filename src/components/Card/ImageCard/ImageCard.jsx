import { useContext } from "react";
import { imgContext } from "../../../context/imgContext";

const ImageCard = () => {
  const img = useContext(imgContext);
  
  return (
    <img src={img.img.urlImg} alt="Фон открытки" width={840} height={520} />
  )
};

export default ImageCard;