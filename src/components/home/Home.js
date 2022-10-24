import React from 'react';
import { useCollection } from '../../hooks/useCollection';

import Recipes from '../recipes/Recipes';

import './Home.css';

export default function Home() {
  const { documents: recipes, error } = useCollection('recipes');
  return (
    <div className="home container">
      {recipes && <Recipes recipes={recipes} />}
    </div>
  );
}
