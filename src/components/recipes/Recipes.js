import React from 'react';
import { Link } from 'react-router-dom';
import './Recipes.css';
import { useTheme } from '../../hooks/useTheme';

export default function Recipes({ recipes }) {
  const { mode } = useTheme();

  if (recipes.length === 0) {
    return <div className="error">No recipes to load...</div>;
  }
  return (
    <div className="recipes">
      {recipes.map(({ id, title, cookingTime, method }) => (
        <div key={id} className={`card ${mode}`}>
          <h3>{title}</h3>
          <p>{cookingTime}</p>
          <div>{method.substring(0, 75)}...</div>
          <Link to={`/recipes/${id}`}>Details</Link>
        </div>
      ))}
    </div>
  );
}
