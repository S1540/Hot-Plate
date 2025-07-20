import React, { useState, useEffect } from "react";
import image from "../assets/soup.jpg";

function FoodList() {
  const removeHTMLTags = (html) => {
    return html.replace(/<[^>]*>/g, "");
  };
  const [food, setFoods] = useState([]);
  useEffect(() => {
    fetch(
      "https://api.spoonacular.com/recipes/random?number=20&apiKey=d55e94f994f74d50a14a4b3e890dfb07"
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        setFoods(data.recipes);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <>
      <main className="max-w-full h-auto bg-green-100 px-4 py-2 flex justify-around flex-wrap ">
        {food.map((item) => {
          return (
            <div className=" max-w-72 h-auto  pb-3 rounded-md overflow-hidden bg-white hover:shadow-md shadow-orange-400 transition-all duration-300 ease-in-out hover:-translate-y-1">
              <img src={item.image} alt="" className="rounded-md" />
              <div className="w-full flex justify-between pt-2 px-1">
                {" "}
                <h1>{item.title}</h1>
                <p></p>
              </div>
              <div className="w-full flex flex-col gap-2 px-1 py-1 ">
                <p className="text-gray-600 text-xs">
                  {removeHTMLTags(item.summary)}
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
