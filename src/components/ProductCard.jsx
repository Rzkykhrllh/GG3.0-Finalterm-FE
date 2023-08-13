import React from "react";

const ProductCard = ({ data }) => {
  return (
    <div className="card card-compact w-[200px] bg-base-100 shadow-sm boder-1">
      <figure className="rounded-lg aspect-video">
        <img src={data.thumbnailUrl} alt={data.name} />
      </figure>
      <div className="p-2 ">
        <h2 className=" text-xs font-bold">{data.name}</h2>
        <p className="text-xs">Rp. {data.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
