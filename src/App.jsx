import Header from "./Components/Header";
import OurRecipes from "./Components/OurRecipes";
import Recipes from "./Components/Recipes";
import Cooking from "./Components/Cooking";
const App = () => {
  return (
    <div>
      <Header></Header>
      <OurRecipes></OurRecipes>
      <section className="grid grid-cols-1  lg:grid-cols-3 container mx-auto px-4">
        <Recipes></Recipes>
        <Cooking></Cooking>
      </section>
    </div>
  );
};

export default App;
