import React from "react";
import { NavLink } from "react-router-dom";

const Navlink = ({ title }) => {
  return (
    <li className=' hover:bg-red-100 grid place-content-center p-4   '>
      <NavLink
        className={
          "text-xl  text-purple-700 hover:text-purple-700 font-medium capitalize  "
        }
        to={title}>
        {title}
      </NavLink>
    </li>
  );
};

export default Navlink;
