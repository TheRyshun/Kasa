import { NavLink } from 'react-router-dom';
import './index.scss';

const Header = () => {

  return (
    <>
      <div className="header_home">
        <img src="/images/RedLogo.svg" width={200} height={70} alt="" />
        <div className="header_home__header_links">
        <NavLink to="/" className="header_home__text">
          Accueil
            </NavLink>
            <NavLink to="/about" className="header_home__text">
              À propos
            </NavLink>

        </div>
      </div>
    </>
  );
};

export default Header;
