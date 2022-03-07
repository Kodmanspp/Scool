import React from "react";
import HomeAbout from "../HomeAbout/HomeAbout.jsx";
import MyCard from "../MyCard/MyCard.jsx";
function Home() {
  return (
    <div className="home">
      <HomeAbout />
      <div className="px-40 mt:px-10 mt-[80px]">
        <h2 className="text-center text-[35px]">Lorem ipsum dolor sit amet.</h2>
        <div className="grid px-20 mt-[100px] mt:px-0 gap-[200px]">
          <div className="justify-self-start">
            <MyCard title="lorem" text="lorem ipsum koala kodala mgys orem ipsum koala kodala mgys orem ipsum koala kodala mgys orem ipsum koala kodala mgys orem ipsum koala kodala mgysorem ipsum koala kodala mgysorem ipsum koala kodala mgysorem ipsum koala kodala mgysorem ipsum koala kodala mgys" />
          </div>
          <div className="justify-self-end">
            <MyCard order={"1"} title="lorem" text="lorem ipsum koala kodala mgys orem ipsum koala kodala mgys orem ipsum koala kodala mgys orem ipsum koala kodala mgys orem ipsum koala kodala mgysorem ipsum koala kodala mgysorem ipsum koala kodala mgysorem ipsum koala kodala mgysorem ipsum koala kodala mgys" />
          </div>
          <div className="justify-self-start">
            <MyCard title="lorem" text="lorem ipsum koala kodala mgys orem ipsum koala kodala mgys orem ipsum koala kodala mgys orem ipsum koala kodala mgys orem ipsum koala kodala mgysorem ipsum koala kodala mgysorem ipsum koala kodala mgysorem ipsum koala kodala mgysorem ipsum koala kodala mgys" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
