import React from "react"
import { RiDeleteBin6Line } from "react-icons/ri";
import  dataFood  from "../cardInfo/DataFood.jsx";

function OderFood() {
    return (
      <>
        {dataFood.map((item, index) => (
          <div key={index} className="mb-4 rounded-xl bg-[#2b2d31] p-4">
            {/* Product Description */}
            <div className="mb-4 grid grid-cols-6">
              <div className="col-span-4 flex items-center gap-3 overflow-hidden">
                <img
                  src={item.img}
                  className="h-10 w-10 object-cover"
                />
                <div className="w-full">
                  <h5 className="overflow-hidden text-sm">
                    <span className="inline-block whitespace-nowrap max-sm:animate-marquee lg:animate-marquee">
                      {item.title}
                    </span>
                  </h5>
                  <p className="text-xs text-gray-500">{item.unitPrice}</p>
                </div>
              </div>
              {/* Quantity */}
              <div>
                <input
                  className="flex w-6 rounded-lg bg-[#191c21ff] p-1 text-center outline-none"
                  type="text"
                  placeholder="2"
                />
              </div>
              {/* Price */}
              <div>
                <span>$18.98</span>
              </div>
            </div>

            {/* Note */}
            <div className="grid grid-cols-6 items-center">
              <form className="col-span-5">
                <input
                  type="text"
                  className="rounded-lg bg-[#191c21ff] px-4 py-1 outline-none"
                  placeholder="Order note..."
                />
              </form>
              <div>
                <button className="rounded-lg border border-regal-blue p-3">
                  <RiDeleteBin6Line className="text-regal-blue" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </>
    );
}

export default OderFood;