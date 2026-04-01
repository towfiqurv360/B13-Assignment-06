export default function Pricing() {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-10 py-20">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">Simple, Transparent Pricing</h2>
        <p className="text-gray-500 max-w-xl mx-auto text-lg">Choose the perfect plan that fits your creative needs.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 items-center">
        
        {/* Basic Plan */}
        <div className="card bg-[#F9FAFC] border border-gray-100 shadow-xl p-8 rounded-3xl flex flex-col h-full">
          <h3 className="text-xl font-bold text-gray-600">Basic</h3>
          <p className="text-5xl font-extrabold my-6 text-gray-900">$0 <span className="text-base font-medium text-gray-400">/month</span></p>
          <ul className="text-gray-600 space-y-4 mb-8 flex-grow font-medium">
            <li className="flex gap-2">✓ Access to free tools</li>
            <li className="flex gap-2">✓ Standard support</li>
            <li className="flex gap-2 opacity-50">✗ Premium assets</li>
          </ul>
          <button className="btn bg-white text-purple-600 border border-purple-200 hover:bg-purple-50 hover:border-purple-300 rounded-full w-full mt-auto">Get Started</button>
        </div>

        {/* Pro Plan */}
        <div className="card bg-gradient-to-r from-[#4F39F6] to-[#9514FA] shadow-2xl shadow-purple-200 text-white p-8 transform md:-translate-y-4 rounded-3xl flex flex-col h-full relative border-4 border-purple-100">
          <div className="badge border-none bg-[#FFD700] text-yellow-900 absolute top-4 right-4 font-extrabold px-3 py-3">POPULAR</div>
          <h3 className="text-xl font-bold text-purple-100">Pro Creator</h3>
          <p className="text-5xl font-extrabold my-6">$29 <span className="text-base font-medium text-purple-200">/month</span></p>
          <ul className="text-purple-50 space-y-4 mb-8 flex-grow font-medium">
            <li className="flex gap-2">✓ Access to all premium tools</li>
            <li className="flex gap-2">✓ Priority 24/7 support</li>
            <li className="flex gap-2">✓ Commercial license</li>
            <li className="flex gap-2">✓ Early access to new drops</li>
          </ul>
          <button className="btn bg-white text-[#9514FA] border-none rounded-full w-full mt-auto hover:bg-gray-100 shadow-lg text-lg">Subscribe Now</button>
        </div>

        {/* Lifetime Plan */}
        <div className="card bg-[#F9FAFC] border border-gray-100 shadow-xl p-8 rounded-3xl flex flex-col h-full">
          <h3 className="text-xl font-bold text-gray-600">Lifetime</h3>
          <p className="text-5xl font-extrabold my-6 text-gray-900">$199 <span className="text-base font-medium text-gray-400">/one-time</span></p>
          <ul className="text-gray-600 space-y-4 mb-8 flex-grow font-medium">
            <li className="flex gap-2">✓ Lifetime access to everything</li>
            <li className="flex gap-2">✓ Dedicated account manager</li>
            <li className="flex gap-2">✓ Unlimited team members</li>
          </ul>
          <button className="btn bg-white text-purple-600 border border-purple-200 hover:bg-purple-50 hover:border-purple-300 rounded-full w-full mt-auto">Buy Lifetime</button>
        </div>

      </div>
    </div>
  );
}