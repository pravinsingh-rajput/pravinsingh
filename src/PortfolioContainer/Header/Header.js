import React, { useState } from "react";
import "./Header.css";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  const [mobilemenu, setMobileMenu] = useState(false);

  const clickmenu = () => {
    setMobileMenu(!mobilemenu);
  };
  const topscroll = () => {
    window.scroll(0, 0);
  };

  return (
    <div className="header ">
      <div className="header_container">
        <div className="name" onClick={() => topscroll()}>
          Pravin
        </div>
        <nav className={`${mobilemenu === true ? "showmenu" : "hidemenu"}`}>
          <ul>
            <li>
              <a href="#about_me" onClick={() => clickmenu()}>
                About Me
              </a>
            </li>
            <li>
              <a href="#project" onClick={() => clickmenu()}>
                Projects
              </a>
            </li>

            <li>
              <a href="#skills" onClick={() => clickmenu()}>
                Skills
              </a>
            </li>

            <li>
              <a href="#certificate" onClick={() => clickmenu()}>
                Achievement
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="hamburger_menu" onClick={() => clickmenu()}>
        <MenuIcon onClick={() => clickmenu()} />
      </div>
    </div>
  );
};

export default Header;
