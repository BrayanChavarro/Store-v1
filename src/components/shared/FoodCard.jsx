import React from "react";

const FoodCard = () => {
  return (
    <>
      {/* Card */}
      <div className="flex flex-col items-center gap-2 rounded-xl bg-[#191c21ff] p-8 text-center text-gray-300">
        <img
          src="Food_1.png"
          alt=""
          className="-mt-24 h-40 w-40 rounded-full object-cover shadow-2xl"
        />
        <p className="px-4 pb-4 text-2xl">Speacy seasoned seafood noodles</p>
        <span className="text-gray-300/80">$9.99</span>
        <span className="text-gray-300/50">20 Bowls available</span>
      </div>
    </>
  );
};

export default FoodCard;
