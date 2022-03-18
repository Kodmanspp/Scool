import React from "react";
import HomeAbout from "../HomeAbout/HomeAbout.jsx";
import MyCard from "../MyCard/MyCard.jsx";
import logo from '../../static/Logo.svg'
function Home() {
  return (
    <div className="home">
      <HomeAbout />
      <div className="px-40 mt:px-10 mt-[80px]">
          <img className="mx-auto w-[100px]" src={logo} alt="Logo"/>
          <p className="mt-[70px] w-[50vw] raunded text-center text-3xl mx-auto">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non in rerum similique sunt eveniet voluptates rem, omnis, nostrum deserunt temporibus itaque magni quia quibusdam dolores cupiditate corporis ipsa obcaecati illum!</p>
      </div>


      <div className="px-40 mt:px-10 mt-[80px]">
        <h2 className="text-center text-[35px]">Lorem ipsum dolor sit amet.</h2>
        <div className="grid px-20 mt-[100px] mt:px-0 gap-[200px] bt:gap-[100px] mt:gap-[50px]">
          <div className="justify-self-start">
            <MyCard
              title="lorem"
              text="lorem ipsum koala kodala mgys orem ipsum koala kodala mgys orem ipsum koala kodala mgys orem ipsum koala kodala mgys orem ipsum koala kodala mgysorem ipsum koala kodala mgysorem ipsum koala kodala mgysorem ipsum koala kodala mgysorem ipsum koala kodala mgys"
            />
          </div>
          <div className="justify-self-end">
            <MyCard
              order={"1"}
              title="lorem"
              text="lorem ipsum koala kodala mgys orem ipsum koala kodala mgys orem ipsum koala kodala mgys orem ipsum koala kodala mgys orem ipsum koala kodala mgysorem ipsum koala kodala mgysorem ipsum koala kodala mgysorem ipsum koala kodala mgysorem ipsum koala kodala mgys"
            />
          </div>
          <div className="justify-self-start">
            <MyCard
              title="lorem"
              text="lorem ipsum koala kodala mgys orem ipsum koala kodala mgys orem ipsum koala kodala mgys orem ipsum koala kodala mgys orem ipsum koala kodala mgysorem ipsum koala kodala mgysorem ipsum koala kodala mgysorem ipsum koala kodala mgysorem ipsum koala kodala mgys"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
