import React from "react";
import { Link } from "react-router-dom";

function NavBar(props) {
  return (
    <div className="bg-white-900 w-screen h-20 px-40">
      <div className="container mx-auto h-full flex justify-between items-center">
        <Link to="/" className="logo text-3xl">
          Bokonbaevo
        </Link>
        <div className="flex items-center w-1/3 justify-between">
          <Link className="text-2xl color-green-200" to="/">
            Главное
          </Link>
          <Link className="text-2xl color-green-200" to="/about">
            О нас
          </Link>
          <Link className="text-2xl color-green-200" to="/sert">
            Сертификаты
          </Link>
          <Link className="text-2xl color-green-200" to="/more">
            Еще
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
