import React from "react";
import logo from "../../images/netflix-logo.png";

import { Link } from "react-router-dom";
import { GoSearch } from "react-icons/go";
import "../../App.scss";

const Header = () => {
  return (
    <nav className="header">
      <img src={logo} alt="logo" />
      <div>
        <Link to="/tvshows">Tv Shows</Link>
        <Link to="/movies">Movies</Link>
        <Link to="/dramas">Dramas</Link>
        <Link to="/mylist">My List</Link>
      </div>
      <GoSearch />
    </nav>
  );
};

export default Header;
