import { FaSearch } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
const Header = () => {
  return (
    <div className="container mx-auto mt-5 mb-10 px-5">
      <nav className="flex justify-between items-center mb-10">
        <div>
          <h1 className="font-bold text-xl md:text-3xl ">Garden-Table</h1>
        </div>
        <ul className=" hidden md:flex gap-5 text-gray-500">
          <li>Home</li>
          <li>Recipes</li>
          <li>About</li>
          <li>Search</li>
        </ul>
        <div className="flex gap-2 items-center">
          <div className="relative flex items-center ">
            <input
              type="text"
              name=""
              id=""
              placeholder="search"
              className="border-2 rounded-full pl-8 w-32 lg:w-full bg-gray-100 py-2 "
            />

            <FaSearch className=" absolute text-gray-500  bottom-3 left-3" />
          </div>
          <FaUserCircle className="text-4xl bg-primary rounded-full p-2" />
        </div>
      </nav>
      <div className=" bg-image  rounded-2xl flex flex-col items-center justify-center py-16   md:p-20 lg:py-40 gap-5 md:gap-10 ">
        <h1 className="font-bold text-2xl md:text-4xl lg:text-5xl text-white lg:w-4/5 text-center    ">
          Discover an exceptional cooking class tailored for you!
        </h1>
        <p className="text-white md:text-xl md:w-4/5 text-center text-xs font-light">
          Learn and Master Basic Programming, Data Structures, Algorithm, OOP,
          Database and solve 500+ coding problems to become an exceptionally
          well world-class Programmer.
        </p>
        <div className="flex items-center gap-5">
          <button className="btn bg-primary text-black border-none rounded-full hover:bg-black hover:text-primary text-xs md:text-base">
            Explore Now
          </button>
          <button className="btn text-white btn-outline rounded-full hover:text-primary hover:bg-black text-xs md:text-base">
            Our Feedback
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
