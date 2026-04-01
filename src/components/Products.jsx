export default function Products({ products, handleAddToCart, cart }) {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-10 pb-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => {
          const isAdded = cart.find((item) => item.id === product.id);

          return (
            <div
              key={product.id}
              className="card bg-white border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-300 rounded-[32px] p-8 flex flex-col group"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="w-20 h-20 flex items-center justify-center bg-purple-50 rounded-2xl transition-colors group-hover:bg-purple-100 overflow-hidden">
                  <img
                    src={product.icon}
                    alt={product.name}
                    className="w-12 h-12 object-contain"
                    onError={(e) => {
                      e.target.src = "https://cdn-icons-png.flaticon.com/512/2593/2593549.png";
                    }}
                  />
                </div>

                <span
                  className={`badge border-none font-bold py-3 px-4 rounded-full text-xs uppercase tracking-wider ${
                    product.tagType === "popular"
                      ? "bg-blue-50 text-blue-600"
                      : product.tagType === "new"
                      ? "bg-green-50 text-green-600"
                      : "bg-orange-50 text-orange-600"
                  }`}
                >
                  {product.tagType || "Best Seller"}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-2 transition-colors group-hover:text-purple-700">
                {product.name}
              </h3>
              <p className="text-gray-500 text-sm mb-6 leading-relaxed h-16 overflow-hidden">
                {product.description}
              </p>

              <div className="mb-8 flex items-baseline gap-1">
                <span className="text-5xl font-extrabold text-gray-950">${product.price}</span>
                <span className="text-gray-400 font-medium">/{product.period}</span>
              </div>

              <ul className="space-y-4 mb-4 flex-grow">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3 text-gray-700 text-sm">
                    <div className="bg-green-100 p-1 rounded-full flex-shrink-0">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M10 3L4.5 8.5L2 6"
                          stroke="#16A34A"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="card-actions mt-auto">
                <button
                  onClick={() => handleAddToCart(product)}
                  disabled={isAdded}
                  className={`w-full py-4 rounded-full text-lg font-bold transition-all duration-300 cursor-pointer active:scale-95 ${
                    isAdded
                      ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                      : "bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white shadow-lg shadow-purple-200 hover:shadow-purple-300 hover:opacity-95"
                  }`}
                >
                  {isAdded ? "Added to Cart" : "Buy Now"}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}