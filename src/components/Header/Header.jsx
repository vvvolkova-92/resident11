import './Header.scss';
import { Link } from 'react-router-dom';
import { menuItems, manager } from '../../services/constans';

import React, { useState } from 'react'

function Menu() {
  const menu = menuItems.map( item => {
    return (
      <li>
      <Link to={item.link} >{item.name}</Link>
    </li>
    )
  });

  return (
    <nav className="navbar indented-block">
        <ul>
          {menu}
        </ul>
        <div className="navbar__menu-icon">
          <div className="icon icon_style_inst"></div>
          <div className="icon icon_style_facebook"></div>
        </div>
        <p className="navbar__menu-title">Ваш персональный помощник в покупке участка: </p>
        <span className="navbar__menu-subtitle">{manager}</span>
      </nav>
  )
}



function Header() {
  const [menuOpen, setMenuOpen] = useState(true);
  const onMenuClick = () => setMenuOpen(!menuOpen);
  return (
    <>
    <header>
    <div className="header indented-block">
      <ul className="header__desktop-icons">
        <li className="icon icon_style_inst"></li>
        <li className="icon icon_style_facebook"></li>
      </ul>
      <div className="header__logo"></div>
      <ul className="header__icons">
        <li className="icon icon_style_phone"></li>
        <li className="icon icon_style_menu" onClick={onMenuClick}></li>
      </ul>
    </div>
    </header>
    {menuOpen ? <Menu /> : ''}
  </>
  )
}

export default Header