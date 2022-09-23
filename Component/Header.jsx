import Image from 'next/image';
import React from 'react';
import logo from '../public/amigo-vector-logo.png';
import profile from '../public/profile.jpg';
import { Search, ShoppingCartRounded, BarChart } from '@mui/icons-material';

const Header = () => {
  return (
    <header className="header">
      <Image
        src={logo}
        alt="logo"
        width="60px"
        height="60px"
        className="header__logo"
      />
      <div className="header__inputbox">
        <Search className="search--icon" />
        <input type="text" placeholder="search" />
      </div>
      <div className="header__cart">
        <ShoppingCartRounded className="header__shopping" />
        <span className="header__count">2</span>
      </div>

      <div className="header__profileContainer">
        <div className="header__imageBox">
          <Image
            src={profile}
            alt="logo"
            width="60px"
            height="60px"
            className="profile--pic"
          />
        </div>
        <h2 className="header__username">Yzkvng </h2>
      </div>

      <div className="header__toggleicon">
        <BarChart className="header__toggle" />
      </div>
    </header>
  );
};

export default Header;
