import clsx from "clsx";
import {  NavLink } from "react-router-dom";
import css from './Header.module.css'
const buildLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };


const Header = () => {
  return (
    <header>
      <h2>Router</h2>
      <nav className={css.nav}>
        <NavLink className={buildLinkClass} to="/"> Home </NavLink>

        <NavLink className={buildLinkClass} to="/about">About </NavLink> 

        <NavLink className={buildLinkClass} to="/form">form </NavLink>

        <NavLink className={buildLinkClass} to="/SearchBar">SearchBar </NavLink>

        <NavLink className={buildLinkClass} to="/UserMenu">UserMenu</NavLink>
        <NavLink className={buildLinkClass} to="/users">Users</NavLink>

      </nav>
    </header>
  );
};

export default Header;
