import React, { useState } from "react";

import { FaRegHeart } from "react-icons/fa";
import { IoHeart } from "react-icons/io5";

const Item = ({ item, getFavorateItem, getTotalAmount }) => {
  const [isLike, setIsLike] = useState(false);

  const toggleIcon = () => {
    setIsLike(true);
  };

  return (
    <tr>
      <td className="flex gap-5  font-semibold">
        <img className="w-24 h-22 rounded-sm" src={item.image} alt="" />
        <p className="mt-2"> {item.title}</p>
      </td>
      <td className="font-semibold">{item.currentBidPrice}</td>
      <td className="font-semibold">{item.timeLeft}</td>
      <td className="px-8">
        {" "}
        <button
          onClick={() => {
            toggleIcon();
            getFavorateItem(item);
            getTotalAmount(item.currentBidPrice);
          }}
          className={isLike ? "cursor-not-allowed" : "cursor-pointer"}
          disabled={isLike}
        >
          {isLike ? (
            <IoHeart className="text-red-700" size={23} />
          ) : (
            <FaRegHeart size={23} />
          )}
        </button>
      </td>
    </tr>
  );
};

export default Item;
