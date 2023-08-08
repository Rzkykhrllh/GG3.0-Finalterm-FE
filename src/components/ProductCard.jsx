import React from "react";
import { dummyVideo } from "../DummyVideo";

const ProductCard = () => {
  return (
    <div className="card card-compact w-[200px] bg-base-100 shadow-sm boder-1">
      <figure className="rounded-lg aspect-video">
        <img src={dummyVideo[0].img} alt="Shoes" />
      </figure>
      <div className="p-2 ">
        <h2 className=" text-xs font-bold">Shoes!</h2>
        <p className="text-xs">Rp. 120000</p>
      </div>
    </div>
  );
};

export default ProductCard;
