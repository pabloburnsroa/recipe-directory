import { useParams } from 'react-router-dom';
import { useTheme } from '../../hooks/useTheme';
import { useDocument } from '../../hooks/useDocument';

// styles
import './Recipe.css';

export default function Recipe() {
  const { id } = useParams();
  const { mode } = useTheme();

  const { document: recipe, error } = useDocument('recipes', id);

  return (
    <div className={`recipe ${mode} container`}>
      {error && <p className="error">{error}</p>}
      {/* {isPending && <p className="loading">Loading...</p>} */}
      {recipe && (
        <>
          <h2 className="page-title">{recipe.title}</h2>
          <p>Takes {recipe.cookingTime} to cook.</p>
          <ul>
            {recipe.ingredients.map((ing) => (
              <li key={ing}>{ing}</li>
            ))}
          </ul>
          <p className="method">{recipe.method}</p>
        </>
      )}
    </div>
  );
}
