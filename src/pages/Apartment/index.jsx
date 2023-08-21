import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Footer from "../../components/Footer";
import "./index.scss";
import DropDown from "../../components/Dropdown";
import data from "../../../data/logements.json"
import Slideshow from '../../components/Slideshow/Slideshow';


const Apartment = () => {
  const { id } = useParams(); 

  const selectedApartment = data.filter(
    (apartment) => apartment.id === id,
  )

  const {
    title,
    pictures,
    description,
    host,
    rating,
    location,
    equipments,
    tags,
  } = selectedApartment[0]

  const starElements = Array.from({ length: 5 }, (_, index) => (
    <FontAwesomeIcon
      key={index}
      icon={faStar}
      color={index < rating ? "red" : "gray"}
    />
  ));

  console.log(selectedApartment);

  return (
    <>
          <div className="Apartment">
          <Slideshow pictures={pictures} title={title} />


        <div className="Apartment__container">
          <div className="Apartment__item">
            <div className="Apartment__Box">
              <div className="Apartment__title">
                {title}
              </div>
              <div className="Apartment__localisation">
                {location}
              </div>
              <div className="Tags-Container">
                <div className="Tags">
                {tags.map((tag, index) => (
                  <div className="Tags__Box" key={index}>
                  <p className="Tags__Name">{tag}</p>
                </div>
            ))}
                </div>
              </div>
            </div>
          </div>

          <div className="Apartment__item">

            <div className="Apartment__BoxR">
              <div className="Apartment__Personnal">
                <div className="Apartment__Profil">
                  {host.name}
                  <img src={host.picture} alt="" />
                </div>
              </div>
              <div className="Apartment__Stars-Container">
                <div className="Apartment__Stars">
                  {starElements}
                </div>
              </div>
            </div>
            
          </div>
        </div>

        <div className="dropdown">
       
            <DropDown
              title="Description"
              content={description}
            />
            
            <DropDown
              title="Equipements"
              content={equipments.map((equipment) => (
                <p>{equipment}</p>
              ))}
              />
        </div>

      </div>
      <Footer />
    </>
  );
};

export default Apartment;