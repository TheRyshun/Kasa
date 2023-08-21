import React from 'react';
import './index.scss';
import apartments from '../../../data/logements.json';
import { Link } from 'react-router-dom';


interface CardProps {
  id: string;
  title: string;
  cover: string;
}

const Card = ({ id, title, cover }: CardProps) => {
  return (
    <Link to={`/apartment/${id}`} className="HCard__Card"> {/* Use Link to navigate */}
      <span>{title}</span>
      <img src={cover} alt={title} />
    </Link>
  );
}

const CarouselHome: React.FC = () => {
  return (
    <>
      <div className="imgBoxHeaderH">
        <h1 className="imgBoxHeaderH__title">
          Chez vous, <br className="mobile-line-break" /> partout et ailleurs
        </h1>
      </div>

      <div className="HCard">
        <div className="HCard__Box">
          {apartments.map((apartment) => (
            <Card
              key={apartment.id}
              title={apartment.title}
              cover={apartment.cover} id={apartment.id}            />
          ))}
        </div>
      </div>
    </>
  );
};

export default CarouselHome;
