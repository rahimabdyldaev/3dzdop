import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setPath } from '../store';

const Menu = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  const handleNavigation = (path) => {
    dispatch(setPath(location.pathname));
  };

  return (
    <nav>
      <ul>
        <li>
          <Link to="/1" onClick={() => handleNavigation('/a')}>Component A</Link>
        </li>
        <li>
          <Link to="/2" onClick={() => handleNavigation('/b')}>Component B</Link>
        </li>
        <li>
          <Link to="/3" onClick={() => handleNavigation('/c')}>Component C</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;