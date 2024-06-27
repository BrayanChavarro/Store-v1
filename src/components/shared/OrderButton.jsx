import React from "react";

const ButtonOrder = () => {
  return (
    <>
      <button className="rounded-xl bg-regal-blue px-4 py-2 transition duration-500 hover:text-white">
        Dine in
      </button>
      <button className="rounded-xl border border-regal-blue/20 px-4 py-2 text-regal-blue/70 transition duration-500">
        To go
      </button>
      <button className="rounded-xl border border-regal-blue/20 px-4 py-2 text-regal-blue/70 transition duration-500">
        Delivery
      </button>
    </>
  );
};

export default ButtonOrder;
