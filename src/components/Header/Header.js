import avatar from "../../assets/images/Mohan-muruge.jpg";
import logo from "../../assets/logo/BrainFlix-logo.svg";
import search from "../../assets/icons/search.svg";
import upload from "../../assets/icons/upload.svg";

import "./Header.scss";

const Header = () => {
  return (
    <>
      <header className="header">
        <img className="header__logo" src={logo} alt="logo" />
        <div className="header__row">
          <div className="header__search-wrapper">
            <img
              className="header__search-logo"
              src={search}
              alt="search-logo"
            />
            <input className="header__search-bar" type="text" />
          </div>
          <img
            className="header__search-icon"
            src={avatar}
            alt="Mohan-Muruge"
          />
        </div>
        <button className="header__upload-wrapper">
          <img
            className="header__upload-button"
            src={upload}
            alt="upload-button"
          />
          <p className="header__upload-text"></p>
        </button>
      </header>
    </>
  );
};

export default Header;
