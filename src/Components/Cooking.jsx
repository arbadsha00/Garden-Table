const Cooking = ({ wantToCooks }) => {
  return (
    <div>
      <section className="mx-auto rounded-xl border-2">
        <h1 className="font-semibold text-2xl text-center mt-5">
          Want to Cook : {wantToCooks.length}
        </h1>
        <div className="divider"></div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Time</th>
                <th>Calories</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
             {
                wantToCooks.map((recipe,idx)=><tr key={idx}  className="hover text-gray-500 text-xs">
                    <th>{ idx+1}</th>
                <td>{recipe.recipe_name}</td>
                <td>{recipe.cooking_time_minutes} minutes</td>
                <td>{recipe.calories} calories</td>
                <td><button className=" p-2 bg-primary text-black border-none rounded-full hover:bg-black hover:text-primary text-xs">
            Preparing
          </button></td>
              </tr>)
             }
              
              
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default Cooking;
