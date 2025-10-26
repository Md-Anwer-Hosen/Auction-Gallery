import { useState } from "react";
import "./App.css";
import Hero from "./Components/HeroSection/Hero";
import Items from "./Components/Items/Items";
import Navbar from "./Components/Navbar/Navbar";
import { FaRegHeart } from "react-icons/fa";
import Footer from "./Components/Footer/Footer";
import { ImCross } from "react-icons/im";
import { Toaster, toast } from "react-hot-toast";

function App() {
  const [favorateItem, setFavorateItem] = useState([]);
  const [amount, setAmount] = useState(0);

  const getFavorateItem = (item) => {
    setFavorateItem((prev) => [...prev, item]);
    toast.success(`${item.title} added to favorites!`);
  };

  const getTotalAmount = (newAmount) => {
    setAmount((prev) => prev + newAmount);
  };

  const removeItem = (id) => {
    const newFavId = favorateItem.filter((item) => item.id !== id);
    setFavorateItem(newFavId);
    toast.error(`Remove to favorites!`);
  };

  return (
    <>
      <Navbar />
      <Hero />
      <div className=" mt-20">
        <div className="mx-30">
          <h2 className="text-2xl">Active Auctions</h2>
          <p className="text-lg">Discover and bid on extraordinary items</p>
        </div>

        <div className="flex gap-10 justify-center">
          <div className="left_container  w-7/12">
            <Items
              getFavorateItem={getFavorateItem}
              getTotalAmount={getTotalAmount}
            />
          </div>
          <div className="right_container w-3/12">
            <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100 mt-15">
              <table className="table w-full">
                <thead>
                  <tr>
                    <th className="flex items-center justify-center gap-3">
                      <FaRegHeart size={20} />
                      <p className="text-xl pb-1">Favorite Items</p>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {favorateItem.length === 0 && (
                    <tr>
                      <td className="text-center">
                        <h2 className="text-lg font-semibold">
                          No favorites yet
                        </h2>
                        <p className="mt-3 text-md">
                          Click the heart icon on any item <br /> to add it to
                          your favorites
                        </p>
                      </td>
                    </tr>
                  )}

                  {favorateItem.map((item) => (
                    <tr key={item.id} className="flex">
                      <td>
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-16 h-16 rounded-sm"
                        />
                      </td>
                      <td>{item.description}</td>
                      <button
                        className="m-4 border p-1 h-7 rounded-sm"
                        onClick={() => removeItem(item.id)}
                      >
                        <ImCross className="text-red-700" />
                      </button>
                    </tr>
                  ))}

                  <tr>
                    <td className="flex justify-between text-xl font-semibold px-4">
                      <h3>Total bids Amount</h3>
                      <h2>${amount}</h2>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <Toaster position="top-right" />
    </>
  );
}

export default App;
