import React from "react";

function Loading() {
  return (
    <>
      <div class="  bg-white -pt-44 flex-col gap-4 w-full h-screen flex items-center justify-center">
        <div class="w-20 h-20 border-4 border-transparent text-blue-400 text-4xl animate-spin flex items-center justify-center border-t-blue-400 rounded-full">
          <div class="w-16 h-16 border-4 border-transparent text-red-400 text-2xl animate-spin flex items-center justify-center border-t-red-400 rounded-full"></div>
        </div>
        <h1 className="text-4xl font-semibold italic animate-pulse">
          Pls Wait May Api Take Some Time...
        </h1>
        <h1 className="text-2xl">HotPlate...</h1>
      </div>
    </>
  );
}

export default Loading;
