import { LuHeartPulse, LuSoup } from "react-icons/lu";
import { CiHeart } from "react-icons/ci";
import { useState } from "react";
import { FaHeart } from "react-icons/fa";

const RecipeCard = ({ recipe, bg, badge }) => {
  const [isfavourite, setIsFavourite] = useState(
    localStorage.getItem("favourites")?.includes(recipe.label)
  );

  const addRecipeToFavourites = () => {
    let favourites = JSON.parse(localStorage.getItem("favourites")) || [];
    const isRecipeAlreadyInFavourites = favourites.some(
      (fav) => fav.label === recipe.label
    );

    if (isRecipeAlreadyInFavourites) {
      favourites = favourites.filter((fav) => fav.label !== recipe.label);
      setIsFavourite(false);
    } else {
      favourites.push(recipe);
      setIsFavourite(true);
    }
    localStorage.setItem("favourites", JSON.stringify(favourites));
  };

  return (
    <div
      className={`flex  flex-col rounded-md ${bg} p-3 overflow-hidden relative`}
    >
      <a
        href={`https://www.youtube.com/results?search_query=${recipe.label} recipe`}
        target="_blank"
        className="relative  "
      >
        <img
          src={recipe.image}
          alt="recipe image"
          className="rounded-md w-full  object-cover cursor-pointer"
        />
        <div className="absolute bottom-2 left-2 bg-white rounded-full p-1 cursor-pointer flex items-center gap-1 text-sm">
          <LuSoup className="size-4" /> {recipe.yield} servings
        </div>
        <div
          onClick={(e) => {
            e.preventDefault();
            addRecipeToFavourites();
          }}
          className="absolute top-1 right-2 bg-white rounded-full p-1 cursor-pointer "
        >
          {isfavourite ? (
            <FaHeart className="size-5 text-red-500" />
          ) : (
            <CiHeart className="size-5 " />
          )}
        </div>
      </a>
      <div className="flex mt-1">
        <p className="font-bold tracking-wide">{recipe.label}</p>
      </div>
      <p className="my-2">
        {recipe.cuisineType[0].charAt(0).toUpperCase() +
          recipe.cuisineType[0].slice(1)}
        Kitchen
      </p>
      <div className="flex gap-2 mt-auto">
        <div className={`flex gap-1  items-center p-1 rounded-md ${badge}`}>
          <LuHeartPulse className="size-5 " />
          <span className="text-sm tracking-tight font-semibold">
            {recipe.healthLabels[0]}
          </span>
        </div>
        <div className={`flex gap-1  items-center p-1 rounded-md ${badge}`}>
          <LuHeartPulse className="size-5" />
          <span className="text-sm tracking-tight font-semibold">
            {recipe.healthLabels[1]}
          </span>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
