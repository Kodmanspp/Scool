import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../static/Logo.svg";
import { Menu } from "@mui/icons-material";
function NavBar(props) {
  return (
    <div className="border-b-[1px] border-gray-500 bg-white-900 w-screen h-[70px] px-40 mt:px-10">
      <div className="container mx-auto h-full gap-x-[100px] flex justify-between items-center">
        <Link to="/" className=" gap-[10px] flex text-3xl">
          <img src={logo} alt="logo" />
          <p>Bokonbaevo</p>
        </Link>
        <div className="hidden mb:block"><Menu className="cursor-pointer"/></div>
        <div className="flex items-center min-w-[400px] w-[550px] gap-[4vw] justify-end mb:hidden">
          <NavLink className="text-1xl" to="/">
            Главное
          </NavLink>
          <NavLink className="text-1xl" to="/about">
            О нас
          </NavLink>
          <NavLink className="text-1xl" to="/sert">
            Сертификаты
          </NavLink>
          <NavLink className="text-1xl" to="/gallery">
            Галлерея
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
