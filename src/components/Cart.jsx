export default function Cart({ cart, handleRemove, handleCheckout }) {
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className="max-w-4xl mx-auto mt-8 px-4">
      <div className="bg-white border border-gray-200 rounded-3xl p-6 md:p-10 shadow-sm">
        
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-left">Your Cart</h2>

        <div className="flex flex-col gap-4 mb-6">
          {cart.length === 0 ? (
            <div className="text-center py-16 border-2 border-dashed border-gray-200 rounded-2xl">
              <h3 className="text-xl font-bold text-gray-400 mb-2">Your Cart is Empty!</h3>
              <p className="text-gray-500">Go to Products section and add some tools.</p>
            </div>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl">
                
                <div className="flex items-center gap-4">
                  <div className="bg-white p-2 rounded-full shadow-sm border border-gray-100">
                    <img src={item.icon} alt={item.name} className="w-10 h-10 object-contain" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{item.name}</h4>
                    <p className="text-gray-500 text-sm mt-1">${item.price}</p>
                  </div>
                </div>
                
                <button 
                  onClick={() => handleRemove(item.id)}
                  className="text-red-500 hover:text-red-700 font-medium text-sm md:text-base px-2 cursor-pointer"
                >
                  Remove
                </button>

              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="mt-8">
            <div className="flex justify-between items-center py-4 border-t border-gray-100 mb-4">
              <span className="text-gray-500 font-medium">Total:</span>
              <span className="text-2xl font-extrabold text-gray-900">${totalPrice}</span>
            </div>

            <button 
              onClick={handleCheckout}
              className="w-full bg-[#8b5cf6] hover:bg-[#7c3aed] text-white font-bold py-4 rounded-full transition-colors cursor-pointer"
            >
              Proceed To Checkout
            </button>
          </div>
        )}

      </div>
    </div>
  );
}