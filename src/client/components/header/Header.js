import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.css'; // Import CSS file for styling

const Header = () => {
  return (
    <div className="header">
      <div className="logo">Mealsharing</div>
      <nav className="navbar">
        <NavLink to="/" activeClassName="active" exact>Home</NavLink>
        <NavLink to="/meals" activeClassName="active">Meals</NavLink>
        <NavLink to="/about" activeClassName="active">About</NavLink>
      </nav>
    </div>
  );
};

export default Header;
