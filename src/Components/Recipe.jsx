import { FaRegClock } from "react-icons/fa6";
import { PiFireBold } from "react-icons/pi";
const Recipe = ({ recipe,handleWantToCook }) => {
    const {recipe_name,description,total_ingredients,ingredient_list,cooking_time_minutes,calories,image_url } = recipe;
    return (
        <div className=" rounded-xl border-2 p-5 space-y-3 ">
            <img className="rounded-xl w-full h-[300px] object-cover" src={image_url} alt="" />
            <h1 className="font-semibold text-xl">{recipe_name}</h1>
            <p className="text-gray-500">{description}</p>
            <div className="divider"></div>
            <h2 className="font-medium text-lg">Ingredients: {total_ingredients}</h2>
            <ul className="list-disc ml-10 text-gray-500">
                {ingredient_list.map((item,idx)=><li key={idx}>{item}</li>)}
            </ul>
            <div className="divider"></div>
            <div className="flex items-center gap-5 text-gray-600">
                <div className="flex items-center gap-2">
                    <FaRegClock className="text-2xl" />
                    <p className="">{cooking_time_minutes } minutes</p>
                </div>
                <div className="flex items-center gap-2">
                    <PiFireBold className="text-2xl" />
                    <p>{ calories} calories</p>
                </div>
            </div>
            <button onClick={()=>handleWantToCook(recipe)} className="btn bg-primary text-black border-none rounded-full hover:bg-black hover:text-primary ">
            Want to Cook
          </button>
        </div>
    );
};

export default Recipe;