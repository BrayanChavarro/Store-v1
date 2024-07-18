import React from "react";
import { RiSearchLine, RiCloseLine } from "react-icons/ri";
import OrderFood from "./shared/OderFood";
import FoodCard from "./shared/FoodCard";
import ButtonOrder from "./shared/OrderButton";

const MainCard = ({ toggleOrder, showOrder }) => {
  const DateOrder = () => {
    const now = new Date();
    const dayIndex = now.getDay(); // Obtener el número del día de la semana (0=Domingo, 1=Lunes, ..., 6=Sábado)

    // Opciones para formato de fecha
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    const locale = navigator.language; // Obtener el idioma del navegador del usuario

    // Obtener el nombre del día de la semana según el idioma del usuario
    const dayName = now.toLocaleDateString(locale, { weekday: "long" });

    return (
      <p className="text-gray-500">{now.toLocaleDateString(locale, options)}</p>
    );
  };

  return (
    <main className="grid grid-cols-1 pb-20 lg:grid-cols-8 lg:pl-20 xl:pr-8 2xl:pl-28">
      <div className="p-4 md:p-8 lg:col-span-6">
        {/*Header*/}
        <header>
          {/* Title and search */}
          <div className="flex-col items-center gap-4 md:flex md:flex-row md:justify-between">
            <div>
              <h1 className="text-2xl text-gray-300">Jeagar Resto</h1>
              {DateOrder()}
            </div>
            <form>
              <div className="relative w-full">
                <RiSearchLine className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300" />
                <input
                  type="text"
                  placeholder="Search for food, coffe, etc..."
                  className="flex w-full items-center rounded-lg bg-[#191c21ff] py-2 pl-10 pr-4 text-justify text-gray-300 outline-none"
                />
              </div>
            </form>
          </div>
          {/* Tabs */}
          <nav className="item-center mb-6 flex justify-between border-b border-gray-300/15 text-gray-300 md:justify-start md:gap-4 lg:justify-start lg:gap-8">
            <a
              href="#"
              className="py-2 pr-4 hover:border-regal-blue hover:text-regal-blue"
            >
              Hot dishes
            </a>
            <a
              href="#"
              className="py-2 pr-4 hover:border-regal-blue hover:text-regal-blue"
            >
              Cold dishes
            </a>
            <a
              href="#"
              className="py-2 pr-4 hover:border-regal-blue hover:text-regal-blue"
            >
              Soup
            </a>
            <a
              href="#"
              className="py-2 pr-4 hover:border-regal-blue hover:text-regal-blue"
            >
              Grill
            </a>
            <a
              href="#"
              className="py-2 pr-4 hover:border-regal-blue hover:text-regal-blue"
            >
              Appetizer
            </a>
            <a
              href="#"
              className="py-2 pr-4 hover:border-regal-blue hover:text-regal-blue"
            >
              Dessert
            </a>
          </nav>
        </header>
        {/* Title content */}
        <div className="mb-20 flex items-center justify-between">
          <h2 className="text-xl text-gray-300">Choose Dishes</h2>
          <select className="outline-none, block rounded-lg bg-[#191c21ff] py-2 pl-1 text-justify text-gray-300 ">
            <option selected>Dine in</option>
            <option selected>Restaurant</option>
            <option selected>House</option>
          </select>
        </div>
        {/* Content */}
        <div className="grid grid-cols-1 gap-20 p-8 md:grid-cols-2 lg:grid-cols-3">
          <FoodCard />
          <FoodCard />
          <FoodCard />
        </div>
      </div>
      <div
        className={`fixed top-0 h-full w-full bg-[#191c21ff] transition-all lg:right-0 lg:col-span-2 lg:w-96 ${showOrder ? "right-0" : "-right-full"}`}
      >
        {/* Order */}
        <div className="relative h-full p-8 pt-16 text-gray-300 lg:pt-8">
          <RiCloseLine
            onClick={toggleOrder}
            className="absolute left-4 top-4 box-content rounded-full bg-[#2b2d31] p-3 text-xl text-gray-300 lg:hidden"
          />
          <h1 className="my-4 text-2xl">Order #234231</h1>
          {/* Pills */}
          <div className="mb-8 flex flex-wrap items-center gap-4">
            <ButtonOrder />
          </div>
          {/* car */}
          <div>
            <div className="mb-4 grid grid-cols-6 p-4">
              <h5 className="col-span-4">Item</h5>
              <h5>Qty</h5>
              <h5>Price</h5>
            </div>
            {/* Products */}
            <div className="h-[400px] overflow-y-scroll md:h-[630px] lg:h-[540px] max-sm:h-[640px]">
              {/* Product */}
              <OrderFood />
              <OrderFood />
              <OrderFood />
              <OrderFood />
              <OrderFood />
            </div>
          </div>
          {/* Submit payment */}
          <div className="absolute bottom-0 left-0 w-full bg-regal-gray p-4">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-gray-400">Discount</span>
              <span>$0.00</span>
            </div>
            <div className="mb-6 flex items-center justify-between">
              <span className="text-gray-400">Subtotal</span>
              <span>$201.03</span>
            </div>
            <div className="flex items-center">
              <button className="w-full rounded-lg bg-regal-blue px-4 py-2">
                Submit Payment
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainCard;
