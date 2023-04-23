import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <div>
    <h1>Metrics APp</h1>
    <ul>
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="details">Details</NavLink></li>
    </ul>
  </div>
);

export default Header;
