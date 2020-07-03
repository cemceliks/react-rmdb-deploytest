import React from "react";
import { Link } from "@reach/router";

import RMDBLogo from "../images/reactMovie_logo.png";
import CemLogo from "../images/Cem.png";
import TMDBLogo from "../images/tmdb_logo2.svg";

import {
  StyledHeader,
  StyledRMDBLogo,
  StyledCemLogo,
  StyledTMDBLogo,
} from "../styles/StyledHeader";

const Header = () => (
  <StyledHeader>
    <div className="header-content">
      <Link to="/">
        <StyledRMDBLogo src={RMDBLogo} alt="rmdb-logo" />
        <StyledCemLogo src={CemLogo} alt="cem-logo" />
      </Link>
      <StyledTMDBLogo src={TMDBLogo} alt="tmdb-logo" />
    </div>
  </StyledHeader>
);

export default Header;
