import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import "./index.scss";

const  Slideshow = ({ pictures, title }) => {
  const [pictureIndex, setPictureIndex] = useState(0);

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
      <div class="carousel-container">
        <div class="carousel-slide">
          <img class="carousel-img" src={pictures[pictureIndex]} alt={title} />
        </div>
        <div class="carousel-navigation">
          <div className="carousel-fleche">
            <div class="carousel-arrow" onClick={() => prevPicture()}>
              <FontAwesomeIcon icon={faArrowLeft} />
            </div>
            <div class="carousel-arrow" onClick={() => nextPicture()}>
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </div>
          <div class="carousel-counter">
            {pictureIndex + 1}/{pictures.length}
          </div>
        </div>
      </div>
    </>
  );
}

export default Slideshow;
