import { useState, useEffect } from "react";
import Products from "./Products";
import Cart from "./Cart";

export default function MainContainer({ cart, handleAddToCart, handleRemove, handleCheckout }) {
  const [products, setProducts] = useState([]);
  const [activeTab, setActiveTab] = useState("product");

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="bg-white">
      {/* Title Section */}
      <div className="flex flex-col items-center justify-center text-center mt-12 mb-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-3">Premium Digital Tools</h2>
        <p className="text-gray-500 max-w-2xl px-4 leading-relaxed">
          Choose from our curated collection of premium digital products designed <br className="hidden md:block" />
          to boost your productivity and creativity.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-10">
        {/* Toggle Buttons */}
        <div className="flex justify-center mb-12">
          <div className="bg-white border border-gray-100 shadow-md p-2 rounded-full flex gap-2">
            <button
              onClick={() => setActiveTab("product")}
              className={`px-10 py-2 cursor-pointer rounded-full text-lg font-bold transition-all duration-300 ${
                activeTab === "product"
                  ? "bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white shadow-lg shadow-purple-200"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              Products
            </button>

            <button
              onClick={() => setActiveTab("cart")}
              className={`px-10 py-2 rounded-full text-lg font-bold cursor-pointer transition-all duration-300 ${
                activeTab === "cart"
                  ? "bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white shadow-lg shadow-purple-200"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              Cart ({cart.length})
            </button>
          </div>
        </div>

        {/* Content Section */}
        <div className="pb-20">
          {activeTab === "product" ? (
            <Products products={products} handleAddToCart={handleAddToCart} cart={cart} />
          ) : (
            <Cart cart={cart} handleRemove={handleRemove} handleCheckout={handleCheckout} />
          )}
        </div>
      </div>
    </div>
  );
}