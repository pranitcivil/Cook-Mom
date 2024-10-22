import React from "react";

const RecipeShimmer = () => {
  return (
    <div className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 9 }).map((el, index) => (
        <div
          key={index}
          className=" w-80 h-[353px] rounded-md bg-gray-300 relative sm:w-full sm:h-[500px] sm:mx-auto md:h-[361px] mx-auto "
        >
          <div className="w-44 h-6 bg-gray-400 rounded-full absolute bottom-[72px] "></div>
          <div className="w-40 h-6 bg-gray-400 rounded-full absolute bottom-10 "></div>
          <div className="w-52 h-6 bg-gray-400 rounded-full absolute bottom-2 "></div>
        </div>
      ))}
    </div>
  );
};

export default RecipeShimmer;
