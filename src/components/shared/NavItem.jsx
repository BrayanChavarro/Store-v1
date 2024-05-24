import React from "react";

const NavItem = ({ icon: Icon, href }) => (
  <ul className="py-1">
    <li className="rounded-bl-xl rounded-tl-lg p-4 transition duration-500 ease-in-out hover:bg-regal-gray">
      <a
        href={href}
        className="text-regal-blue hover:bg-regal-blue flex items-center justify-center rounded-lg p-2 text-xl transition duration-500 ease-in-out hover:text-white"
      >
        <Icon />
      </a>
    </li>
  </ul>
);

export default NavItem;
