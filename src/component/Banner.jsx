import React from "react";

const Banner = () => {
  return (
    <div className="bg-slate-100 py-14 ">
      <div className="container mx-auto ">
        <div className="flex flex-col justify-center items-center space-y-4">
          <p className="text-gray-500 py-6 text-sm font-normal animate-pulse">
            WELCOME TO OUR STORE
          </p>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-800 text-center ">
            Buy Your Favorites Books <br />
            <span className="text-blue-600"> With Low Prices</span>
          </h1>
        </div>

        <div className="flex gap-4 md:gap-10 justify-center items-center py-10">
          <input
            className="bg-transparent w-44 md:w-80 outline-none border-1 border-black px-4 py-2 rounded-md"
            type="search"
            name="search"
            id="search"
            placeholder="Search........"
          />
          <button
            type="submit"
            className="bg-blue-500 px-12 py-2 text-white rounded-md cursor-pointer"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
