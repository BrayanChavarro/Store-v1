import "./index.css";
import { useState } from "react";
import React from "react";
import Sidebar from "./components/shared/Sidebar";
import MainCard from "./components/MainCard";
import {
  RiMenu3Fill,
  RiUser3Line,
  RiAddLine,
  RiPieChart2Line,
  RiCloseLine,
} from "react-icons/ri";

export function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [showOrder, setShowOrder] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <>
      <div w-full min-h-screen>
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
            {showMenu ? <RiCloseLine /> : <RiMenu3Fill />}
          </button>
        </nav>
        <MainCard />
      </div>
    </>
  );
}

export default App;
