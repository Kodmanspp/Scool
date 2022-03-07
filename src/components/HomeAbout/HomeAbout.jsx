import React from 'react';
import {Link} from "react-router-dom";
function HomeAbout() {
    return (
        <div className="relative bg-[url('https://picsum.photos/1920/670')] pt-[170px] w-full h-[670px] border-b-[1px] border-gray-500">
        <div className="px-40 mt:px-[10px] mt:text-center text-white">
          <p className="text-[48px] w-[45vw] mt:w-auto">
            Добро пожаловать в школу Боконбаево
          </p>
          <Link to="/about">
            <button className="w-[270px] border-[1px] border-gray-500 h-[60px] mt-[100px] text-[20px] bg-[#005FA3]">
              Подробнее о нас
            </button>
          </Link>
        </div>
      </div>
    );
}

export default HomeAbout;