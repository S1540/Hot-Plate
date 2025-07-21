import React, { useState, useEffect } from "react";
import image from "../assets/soup.jpg";
import Loading from "./Loading";
import banner from "../assets/banner-1.png";
import Filter from "./Filter";
import { IoBagAddOutline } from "react-icons/io5";

function FoodList() {
  const removeHTMLTags = (html) => {
    return html.replace(/<[^>]*>/g, "");
  };

  const [food, setFoods] = useState([]);

  useEffect(() => {
    const fetchRandomFoods = async () => {
      const allFoods = [];
      for (let i = 0; i < 9; i++) {
        const res = await fetch(
          "https://www.themealdb.com/api/json/v1/1/random.php"
        );
        const data = await res.json();
        allFoods.push(data.meals[0]);
      }
      setFoods(allFoods);
    };
    fetchRandomFoods();
  }, []);

  return (
    <>
      {food.length === 0 ? (
        <Loading />
      ) : (
        <main className="max-w-full h-auto bg-gradient-to-b from-orange-600 to-orange-500 bg-fixed backdrop-blur-2xl">
          <img src={banner} alt="" className="w-full h-auto object-center" />

          <div className="flex">
            {/* Left Filter Sidebar */}
            <div className="w-sm sticky top-30 h-[580px] bg-white shadow-md z-10 hidden sm:block">
              <Filter />
            </div>

            {/* Right Items Section */}
            <div className="flex flex-wrap gap-6 px-2 sm:px-6 py-6 justify-around w-full">
              {food.map((item, index) => {
                return (
                  <div
                    key={index}
                    className=" w-96 sm:w-72 rounded-xl overflow-hidden bg-white shadow-md hover:shadow-lg hover:scale-[1.02] transition-transform duration-300 flex justify-around sm:flex-col"
                  >
                    <img
                      src={item.strMealThumb}
                      alt=""
                      className="w-full overflow-hidden h-44 object-cover"
                    />
                    <div className="p-4 flex flex-col gap-2">
                      <h1 className="text-lg font-semibold text-gray-800 line-clamp-1">
                        {item.strMeal}
                      </h1>
                      <p className="text-sm text-gray-500">
                        Category: {removeHTMLTags(item.strCategory)}
                      </p>
                      <p className="text-xs font-semibold text-blue-400">
                        {Math.floor(Math.random() * 30 + 10)}min
                      </p>
                      <div className="flex justify-between items-center pt-2">
                        <span className="text-sm text-green-600 font-bold">
                          ₹{(Math.random() * 300 + 100).toFixed(0)}
                        </span>
                        <button className="bg-orange-500 text-white text-sm px-2 py-2 rounded-md hover:bg-orange-600 transition-all animate-bounce">
                          <IoBagAddOutline size={20} />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </main>
      )}
    </>
  );
}

export default FoodList;
