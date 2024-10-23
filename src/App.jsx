import Header from "./Components/Header";
import OurRecipes from "./Components/OurRecipes";
import Recipes from "./Components/Recipes";
import Cooking from "./Components/Cooking";
import { useState } from "react";
const App = () => {
  const [wantToCooks, setWantToCooks] = useState([]);

  function handleWantToCook(recipe) {
    if (wantToCooks.includes(recipe) == 0) {
      setWantToCooks([...wantToCooks, recipe]);
    }
  }
  console.log(wantToCooks);
  return (
    <div>
      <Header></Header>
      <OurRecipes ></OurRecipes>
      <section className="grid grid-cols-1  lg:grid-cols-3 container mx-auto px-4 gap-5">
        <Recipes handleWantToCook={handleWantToCook}></Recipes>
        <Cooking wantToCooks={wantToCooks}></Cooking>
      </section>
    </div>
  );
};

export default App;
