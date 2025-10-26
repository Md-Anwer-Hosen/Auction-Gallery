import React, { useEffect, useState } from "react";
import Item from "../Item/Item";

const Items = ({ getFavorateItem, getTotalAmount }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function getItems() {
      try {
        const response = await fetch("data.json");
        const items = await response.json();
        setItems(items);
      } catch (err) {
        console.log("Fetch error:", err);
      }
    }

    getItems();
  }, []);

  return (
    <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100 mt-15">
      <table className="table rounded-lg">
        <thead>
          <tr>
            <th>Items</th>
            <th>Current Bid</th>
            <th>Time Left</th>
            <th>Bid Now</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <Item
              key={item.id}
              item={item}
              getFavorateItem={getFavorateItem}
              getTotalAmount={getTotalAmount}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Items;
