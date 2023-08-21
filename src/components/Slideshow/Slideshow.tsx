import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import "./index.scss";

interface SlideshowProps {
  pictures: string[];
  title: string;
}

const Slideshow: React.FC<SlideshowProps> = ({ pictures, title }) => {
  const [pictureIndex, setPictureIndex] = useState<number>(0);

  const nextPicture = () => {
    pictureIndex === pictures.length - 1
      ? setPictureIndex(0)
      : setPictureIndex(pictureIndex + 1);
  };

  const prevPicture = () => {
    pictureIndex === 0
      ? setPictureIndex(pictures.length - 1)
      : setPictureIndex(pictureIndex - 1);
  };

  return (
    <>
      <div className="slideshow">
        <div className="slideshow__slide">
          <img src={pictures[pictureIndex]} alt={title} />
        </div>
        <div className="slideshow__navigation">
          <div className="slideshow__fleche">
            <div className="slideshow__arrow" onClick={() => prevPicture()}>
              <FontAwesomeIcon icon={faArrowLeft} />
            </div>
            <div className="slideshow__arrow" onClick={() => nextPicture()}>
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </div>
          <div className="slideshow__counter">
            {pictureIndex + 1}/{pictures.length}
          </div>
        </div>
      </div>
    </>
  );
}

export default Slideshow;
