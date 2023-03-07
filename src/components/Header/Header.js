import { Link } from "react-router-dom";

import avatar from "../../assets/images/Mohan-muruge.jpg";
import logo from "../../assets/logo/BrainFlix-logo.svg";

import "./Header.scss";

const Header = () => {
  return (
    <>
      <header className="header">
        <Link to="/">
          <img className="header__logo" src={logo} alt="logo" />
        </Link>
        <div className="header__row">
          <input
            className="header__search-bar"
            type="search"
            placeholder="Search"
          />

          <img
            className="header__search-icon"
            src={avatar}
            alt="Mohan-Muruge"
          />
        </div>
        <Link className="header__upload-button" to="/upload">
          <h3 className="header__button-text">Upload</h3>
        </Link>
        <img
          className="header__search-icon header__search-icon--2"
          src={avatar}
          alt="Mohan-Muruge-2"
        />
      </header>
    </>
  );
};

export default Header;
