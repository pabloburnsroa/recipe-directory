import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../searchbar/SearchBar';
import { useTheme } from '../../hooks/useTheme';

import './Navbar.css';

export default function Navbar() {
  const { color } = useTheme();
  return (
    <div className="navbar" style={{ background: color }}>
      <nav>
        <Link to="/" className="brand">
          <h1>Recipes</h1>
        </Link>
        <SearchBar />
        <Link to="/create">Create A Recipe</Link>
      </nav>
    </div>
  );
}
