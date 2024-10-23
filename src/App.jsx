import Header from "./Components/Header";
import OurRecipes from "./Components/OurRecipes";
import Recipes from "./Components/Recipes";
import Cooking from "./Components/Cooking";
import Modal from "./Components/Modal";
import { useState } from "react";

const App = () => {
  const [wantToCooks, setWantToCooks] = useState([]);
  const [totalTime, setTotalTime] = useState(0);
  const [totalCalories, setTotalCalories] = useState(0);

  function handleWantToCook(recipe) {
    if (wantToCooks.includes(recipe) == 0) {
      setWantToCooks([...wantToCooks, recipe]);
    } else {
      document.getElementById('modal').showModal();
    }
  }
  const [cooking, setCooking] = useState([]);

  function updateTimeCalories(time, calories) {
    setTotalTime(totalTime + time);
    setTotalCalories(totalCalories + calories);
  }
  function handleCooking(recipe) {
    setCooking([...cooking, recipe]);

    setWantToCooks(wantToCooks.filter((item) => item !== recipe));

    updateTimeCalories(recipe.cooking_time_minutes, recipe.calories);
  }

  return (
    <div>
      <Header></Header>
      <OurRecipes></OurRecipes>
      <section className="grid grid-cols-1  lg:grid-cols-3 container mx-auto px-4 gap-5">
        <Recipes handleWantToCook={handleWantToCook}></Recipes>
        <Cooking
          wantToCooks={wantToCooks}
          handleCooking={handleCooking}
          cooking={cooking}
          totalTime={totalTime}
          totalCalories={totalCalories}
        ></Cooking>
      </section>
      <Modal></Modal>
    </div>
  );
};

export default App;
