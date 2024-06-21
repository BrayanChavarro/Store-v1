import React from "react";
import { RiSearchLine, RiArrowDownSLine } from "react-icons/ri";

const MainCard = () => {
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
    <main className="grid grid-cols-1 pb-20 lg:grid-cols-8 lg:pl-28 p-4">
      <div className="lg:col-span-6 md:p-8">
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
          {/* Card */}
          <div className="flex flex-col items-center gap-2 rounded-xl bg-[#191c21ff] p-8 text-center text-gray-300">
            <img
              src="Food_1.png"
              alt=""
              className="-mt-24 h-40 w-40 rounded-full object-cover shadow-2xl"
            />
            <p className="px-4 pb-4 text-2xl">
              Speacy seasoned seafood noodles
            </p>
            <span className="text-gray-300/80">$9.99</span>
            <span className="text-gray-300/50">20 Bowls available</span>
          </div>
          {/* Card */}
          <div className="flex flex-col items-center gap-2 rounded-xl bg-[#191c21ff] p-8 text-center text-gray-300">
            <img
              src="Food_1.png"
              alt=""
              className="-mt-24 h-40 w-40 rounded-full object-cover shadow-2xl"
            />
            <p className="px-4 pb-4 text-2xl">
              Speacy seasoned seafood noodles
            </p>
            <span className="text-gray-300/80">$9.99</span>
            <span className="text-gray-300/50">20 Bowls available</span>
          </div>
          {/* Card */}
          <div className="flex flex-col items-center gap-2 rounded-xl bg-[#191c21ff] p-8 text-center text-gray-300">
            <img
              src="Food_1.png"
              alt=""
              className="-mt-24 h-40 w-40 rounded-full object-cover shadow-2xl"
            />
            <p className="px-4 pb-4 text-2xl">
              Speacy seasoned seafood noodles
            </p>
            <span className="text-gray-300/80">$9.99</span>
            <span className="text-gray-300/50">20 Bowls available</span>
          </div>
          {/* Card */}
          <div className="flex flex-col items-center gap-2 rounded-xl bg-[#191c21ff] p-8 text-center text-gray-300">
            <img
              src="Food_1.png"
              alt=""
              className="-mt-24 h-40 w-40 rounded-full object-cover shadow-2xl"
            />
            <p className="px-4 pb-4 text-2xl">
              Speacy seasoned seafood noodles
            </p>
            <span className="text-gray-300/80">$9.99</span>
            <span className="text-gray-300/50">20 Bowls available</span>
          </div>
          {/* Card */}
          <div className="flex flex-col items-center gap-2 rounded-xl bg-[#191c21ff] p-8 text-center text-gray-300">
            <img
              src="Food_1.png"
              alt=""
              className="-mt-24 h-40 w-40 rounded-full object-cover shadow-2xl"
            />
            <p className="px-4 pb-4 text-2xl">
              Speacy seasoned seafood noodles
            </p>
            <span className="text-gray-300/80">$9.99</span>
            <span className="text-gray-300/50">20 Bowls available</span>
          </div>
          {/* Card */}
          <div className="flex flex-col items-center gap-2 rounded-xl bg-[#191c21ff] p-8 text-center text-gray-300">
            <img
              src="Food_1.png"
              alt=""
              className="-mt-24 h-40 w-40 rounded-full object-cover shadow-2xl"
            />
            <p className="px-4 pb-4 text-2xl">
              Speacy seasoned seafood noodles
            </p>
            <span className="text-gray-300/80">$9.99</span>
            <span className="text-gray-300/50">20 Bowls available</span>
          </div>
        </div>
      </div>
      <div className="fixed right-0 col-span-2 lg:static">carrito</div>
    </main>
  );
};

export default MainCard;
