import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import HomeLogo from "../assets/home-outline";
import AddEventLogo from "../assets/plus-circle-outline";
import SettingsLogo from "../assets/settings-2-outline";
const NavBar = () => {
  const navigate = useNavigate();
  const handleLogoClick = () => {
    navigate("/");
  };
  return (
    <motion.nav
      initial={{ y: -200 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.1, delay: 0.1 }}
      exit={{ y: -200 }}
    >
      <span onClick={handleLogoClick} className="logo">
        <span className="char">S</span>
        <span className="char">c</span>
        <span className="char">h</span>
        <span className="char">e</span>
        <span className="char">d</span>
        <span className="char">u</span>
        <span className="char">l</span>
        <span className="char">i</span>
        <span className="char">f</span>
        <span className="char">y</span>
      </span>
      <div className="mobile-pages">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "active-mob-page" : "mob-page"
          }
        >
          <HomeLogo />
        </NavLink>
        <NavLink
          to="/add-event"
          className={({ isActive }) =>
            isActive ? "active-mob-page" : "mob-page"
          }
        >
          <AddEventLogo />
        </NavLink>
        <NavLink
          to="/settings"
          className={({ isActive }) =>
            isActive ? "active-mob-page" : "mob-page"
          }
        >
          <SettingsLogo />
        </NavLink>
      </div>
      <div className="pages">
        <NavLink
          className={({ isActive }) => (isActive ? "activePage" : "page")}
          to="/"
        >
          Home
        </NavLink>

        <NavLink
          className={({ isActive }) => (isActive ? "activePage" : "page")}
          to="/add-event"
        >
          Add Event
        </NavLink>

        <NavLink
          className={({ isActive }) => (isActive ? "activePage" : "page")}
          to="/setting"
        >
          Settings
        </NavLink>
      </div>
    </motion.nav>
  );
};

export default NavBar;
