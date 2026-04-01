export default function Cart({ cart, handleRemove, handleCheckout }) {
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className="max-w-4xl mx-auto mt-8">
      
      <div className="flex justify-between items-center mb-8 bg-purple-50 p-6 rounded-2xl">
        <h2 className="text-2xl font-bold text-gray-800">Cart Items: {cart.length}</h2>
        <h3 className="text-2xl font-bold text-purple-600">Total Price: ${totalPrice}</h3>
      </div>

      <div className="flex flex-col gap-4 mb-8">
        {cart.length === 0 ? (
          <div className="text-center py-20 border-2 border-dashed border-gray-200 rounded-3xl">
            <h3 className="text-2xl font-bold text-gray-400 mb-2">Your Cart is Empty!</h3>
            <p className="text-gray-500">Go to Products section and add some cool tools.</p>
          </div>
        ) : (
          cart.map((item) => (
            <div key={item.id} className="flex flex-col md:flex-row items-center justify-between p-4 bg-base-100 shadow-sm border border-gray-100 rounded-2xl hover:shadow-md transition">
              
              <div className="flex items-center gap-6 w-full md:w-auto mb-4 md:mb-0">
                <img src={item.icon} alt={item.name} className="w-16 h-16 bg-purple-50 p-3 rounded-xl" />
                <div>
                  <h4 className="font-bold text-xl">{item.name}</h4>
                  <p className="text-gray-500 text-sm mt-1">{item.tagType}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-8 w-full md:w-auto justify-between md:justify-end">
                <span className="font-bold text-2xl text-gray-800">${item.price}</span>
                <button 
                  onClick={() => handleRemove(item.id)}
                  className="btn btn-error text-white rounded-full px-6"
                >
                  Remove
                </button>
              </div>

            </div>
          ))
        )}
      </div>

      <div className="flex justify-center md:justify-end">
        <button 
          onClick={handleCheckout}
          disabled={cart.length === 0} 
          className="btn btn-primary bg-purple-600 border-none text-white px-12 py-3 rounded-full text-lg shadow-lg hover:shadow-purple-300 transition-all"
        >
          Proceed to Checkout
        </button>
      </div>

    </div>
  );
}