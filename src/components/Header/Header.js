import avatar from "../../assets/images/Mohan-muruge.jpg";
import logo from "../../assets/logo/BrainFlix-logo.svg";

import "./Header.scss";

const Header = () => {
  return (
    <>
      <header className="header">
        <img className="header__logo" src={logo} alt="logo" />
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
        <button className="header__upload-button">Upload</button>
      </header>
    </>
  );
};

export default Header;
