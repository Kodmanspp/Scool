import React from "react";

function MyCard({ title, text, order = "0" }) {
  return (
    <div className="grid grid-cols-2 gap-[20px] mt:block mt:text-center">
      <div className={`${order !==0 ? "order-1": "order-0"} `}>
        <img className="rounded-lg w-full object-cover" src="https://picsum.photos/1920/1080" alt="" />
      </div>
      <div>
      
        <h2 className="text-[42px]">{title}</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, in a. Quisquam, autem inventore? Nostrum, atque. Tempore, voluptatum facilis optio accusantium in eligendi, amet officiis blanditiis ullam quos corrupti dolorum?</p>
      </div>
    </div>
  );
}

export default MyCard;
