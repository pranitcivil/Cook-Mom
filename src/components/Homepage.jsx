import React, { useEffect, useRef, useState } from "react";
import { FiSearch } from "react-icons/fi";

import RecipeCard from "./RecipeCard";
import RecipeShimmer from "./RecipeShimmer";
import { getRandomColor } from "../lib/utils";

const Homepage = () => {
  const [recipes, setRecipes] = useState([]);
  //const [loading, setLoading] = useState(true);
  const fetchRecipes = async (searchQuery) => {
    //  setLoading(true);
    setRecipes([]);
    try {
      const res = await fetch(
        `https://api.edamam.com/api/recipes/v2/?app_id=${
          import.meta.env.VITE_APP_ID
        }&app_key=${import.meta.env.VITE_APP_KEY}&q=${searchQuery}&type=public`
      );
      const data = await res.json();
      console.log(data.hits);
      setRecipes(data.hits);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchRecipes("chicken");
  }, []);
  const handleSearchRecipe = (e) => {
    e.preventDefault();
    fetchRecipes(SearchRef.current.value);
  };
  const SearchRef = useRef();
  return (
    <div className="bg-slate-50 p-10 flex-1">
      <div className="max-w-screen-lg mx-auto">
        <form onSubmit={handleSearchRecipe}>
          <div className="shadow-md flex items-center gap-2 bg-white px-1 py-2 rounded-full  ">
            <FiSearch className="size-6 bg-transparent pl-1" />

            <input
              ref={SearchRef}
              type="text"
              className="text-sm  grow bg-transparent border-0  outline-none  "
              placeholder="what do you to cook today?"
            />
          </div>
        </form>

        <h1 className="font-bold text-3xl md:text-5xl mt-4">
          Recommended Recipes
        </h1>
        <p className="text-slate-500 font-semibold ml-1 my-2 text-sm tracking-tight">
          popular choices
        </p>
        {!recipes.length ? (
          <RecipeShimmer />
        ) : (
          <div className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {recipes.map(({ recipe }, index) => {
              const randomcolor = getRandomColor();
              return (
                <RecipeCard
                  key={index}
                  recipe={recipe}
                  bg={randomcolor.bg}
                  badge={randomcolor.badge}
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Homepage;
