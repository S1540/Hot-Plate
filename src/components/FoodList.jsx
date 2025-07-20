import React, { useState, useEffect } from "react";
import image from "../assets/soup.jpg";

function FoodList() {
  const removeHTMLTags = (html) => {
    return html.replace(/<[^>]*>/g, "");
  };
  const [food, setFoods] = useState([]);
  useEffect(() => {
    const fetchRandomFoods = async () => {
      const allFoods = [];
      for (let i = 0; i < 30; i++) {
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
      <main className="max-w-full h-auto bg-gradient-to-b from-amber-600 bg-fixed to-orange-200 px-4 py-2 flex justify-around gap-5 flex-wrap ">
        {food.map((item) => {
          return (
            <div className=" max-w-72 h-auto  pb-3 rounded-md overflow-hidden bg-orange-100 hover:shadow-md shadow-orange-400 transition-all duration-300 ease-in-out hover:-translate-y-1">
              <img src={item.strMealThumb} alt="" className="rounded-md" />
              <div className="w-full flex justify-between pt-2 px-1">
                {" "}
                <h1>{item.strMeal}</h1>
                <p></p>
              </div>
              <div className="w-full flex flex-col gap-2 px-1 py-1 ">
                <p className="text-gray-600 text-xs">
                  {removeHTMLTags(item.strCategory)}
                </p>
                <p className="text-green-500 text-xs font-bold">
                  {item.readyInMinutes}
                </p>
                <div className="w-full flex justify-between">
                  <p>{item.pricePerServing}/</p>
                  <button className="bg-orange-400 px-2 rounded-sm font-semibold hover:bg-orange-500 text-gray-800">
                    Add
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </main>
    </>
  );
}

export default FoodList;
