export default function Steps() {
  return (
    <div className="bg-[#F9FAFC]">
      <div className="text-center pt-10">
        <h2 className="font-bold text-3xl">Get Started in 3 Steps</h2>
        <p className="text-gray-500 mt-2">Start using premium digital tools in minutes, not hours.</p>
      </div>
      
      <div className="flex gap-10 justify-center items-center py-14 flex-col md:flex-row px-6 max-w-7xl mx-auto">
        {/* Step 01 */}
        <div className="flex flex-1 w-full flex-col justify-center items-center bg-white rounded-2xl shadow-xl shadow-gray-200 p-8 text-center">
          <div className="badge badge-primary p-3 rounded-full w-8 h-8 flex items-center justify-center bg-gradient-to-r from-[#4F39F6] to-[#9514FA] border-none text-white self-end font-bold mb-2">01</div>
          <img src="https://i.ibb.co.com/Ldh4cP0j/user.png" alt="User Icon" className="bg-purple-50 p-6 rounded-full" />
          <h3 className="text-xl font-bold py-5 text-gray-800">Create Account</h3>
          <p className="text-gray-500 text-sm">Sign up for free in seconds. <br /> No credit card required.</p>
        </div>

        {/* Step 02 */}
        <div className="flex flex-1 w-full flex-col justify-center items-center bg-white rounded-2xl shadow-xl shadow-gray-200 p-8 text-center">
          <div className="badge badge-primary p-3 rounded-full w-8 h-8 flex items-center justify-center bg-gradient-to-r from-[#4F39F6] to-[#9514FA] border-none text-white self-end font-bold mb-2">02</div>
          <img src="https://i.ibb.co.com/1G6KWcHw/package.png" alt="Package Icon" className="bg-purple-50 p-6 rounded-full" />
          <h3 className="text-xl font-bold py-5 text-gray-800">Choose Products</h3>
          <p className="text-gray-500 text-sm">Browse our catalog and select <br /> the tools that fit your needs.</p>
        </div>

        {/* Step 03 */}
        <div className="flex flex-1 w-full flex-col justify-center items-center bg-white rounded-2xl shadow-xl shadow-gray-200 p-8 text-center">
          <div className="badge badge-primary p-3 rounded-full w-8 h-8 flex items-center justify-center bg-gradient-to-r from-[#4F39F6] to-[#9514FA] border-none text-white self-end font-bold mb-2">03</div>
          <img src="https://i.ibb.co.com/j9H47qrp/rocket.png" alt="Rocket Icon" className="bg-purple-50 p-6 rounded-full" />
          <h3 className="text-xl font-bold py-5 text-gray-800">Start Creating</h3>
          <p className="text-gray-500 text-sm">Download and start using your <br /> premium tools immediately.</p>
        </div>
      </div>
    </div>
  );
}