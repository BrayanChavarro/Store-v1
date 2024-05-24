import React from "react";
import NavItem from "./NavItem";
import {
  RiStore3Fill,
  RiHome3Line,
  RiOpenaiLine,
  RiPieChart2Line,
  RiMailLine,
  RiNotification3Line,
  RiSettings3Line,
  RiLoginBoxLine,
} from "react-icons/ri";

const Sidebar = (props) => {
  const { showMenu } = props;

  return (
    <div
      className={`fixed top-0 z-50 flex h-full flex-col justify-between rounded-br-xl rounded-tr-xl bg-[#191c21ff] transition-all lg:left-0 ${showMenu ? "left-0" : "-left-full"}`}
    >
      <div>
        <h1 className="my-5 flex items-center justify-center  font-bold uppercase text-gray-300">
          <RiStore3Fill className="bg-regal-blue/20 text-regal-blue rounded p-1 text-6xl" />
        </h1>
        <NavItem icon={RiHome3Line} href="#" />
        <NavItem icon={RiOpenaiLine} href="#" />
        <NavItem icon={RiPieChart2Line} href="#" />
        <NavItem icon={RiMailLine} href="#" />
        <NavItem icon={RiNotification3Line} href="#" />
        <NavItem icon={RiSettings3Line} href="#" />
      </div>
      <div>
        <ul className="py-6">
          <li className="rounded-bl-xl rounded-tl-lg p-4 transition duration-500 ease-in-out hover:bg-regal-gray">
            <a
              href="#"
              className="text-regal-blue hover:bg-regal-blue flex items-center justify-center rounded-lg p-2 text-3xl transition duration-500 ease-in-out hover:text-white"
            >
              <RiLoginBoxLine />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
