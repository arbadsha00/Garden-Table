import { useEffect, useState } from "react";
import Recipe from "./Recipe";

const Recipes = ( {handleWantToCook}) => {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    fetch("recipes.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:col-span-2 gap-5">
          {
              recipes.map((recipe,idx)=><Recipe key={idx} recipe={recipe} handleWantToCook={handleWantToCook} ></Recipe>)
      }
    </div>
  );
};

export default Recipes;
