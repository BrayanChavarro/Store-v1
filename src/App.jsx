import "./index.css";
import { useState } from "react";
import React from "react";
import Sidebar from "./components/shared/Sidebar";
import {
  RiMenu3Fill,
  RiUser3Line,
  RiAddLine,
  RiShoppingCart2Line,
  RiPieChart2Line,
} from "react-icons/ri";

export function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [showOrder, setShowOrder] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <div>
        <Sidebar showMenu={showMenu} />
        {/* movil menu */}
        <nav className="fixed bottom-0 left-0 flex w-full items-center justify-between rounded-tl-xl rounded-tr-xl bg-[#191c21ff] px-8 py-4 text-2xl text-gray-400 lg:hidden">
          <button className="p-2">
            <RiUser3Line />
          </button>
          <button className="p-2">
            <RiAddLine />
          </button>
          <button className="p-2">
            <RiPieChart2Line />
          </button>
          <button onClick={toggleMenu} className="p-2 text-white">
            <RiMenu3Fill />
          </button>
        </nav>
      </div>
    </>
  );
}
