import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './header.scss';

const Header = () => {
  const location = useLocation();
  const isSpecialPage = ['/wishlist', '/add', '/detail'].includes(location.pathname);

  return (
    <div className={`header__all ${isSpecialPage ? 'header__all--special' : ''}`}>
      <div className='header__right'>
        <Link to="/"><strong>tasty</strong></Link>
      </div>
      <div className='header__left'>
        <Link to="/wishlist">Favorites</Link>
        <Link to="/add">Add</Link>
        <Link to="/">About</Link>
        <Link to="/">Contact</Link>
      </div>
    </div>
  );
};

export default Header;
