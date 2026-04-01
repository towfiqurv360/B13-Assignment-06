export default function Stats() {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-10 my-12 flex justify-center">
      <div className="stats stats-vertical lg:stats-horizontal shadow-lg w-full border border-purple-500 bg-gradient-to-r from-[#4F39F6] to-[#9514FA] flex flex-col lg:flex-row items-center justify-center lg:gap-10 rounded-3xl">
        
        <div className="stat place-items-center py-8">
          <div className="stat-title text-white/80 font-medium">Active Users</div>
          <div className="stat-value text-white text-4xl lg:text-5xl my-2">50K+</div>
          <div className="stat-desc text-green-300 font-medium text-sm">↗︎ 400 (22%) this month</div>
        </div>
        
        <div className="hidden lg:block h-24 w-[2px] bg-white/30 rounded-full"></div>

        <div className="stat place-items-center py-8">
          <div className="stat-title text-white/80 font-medium">Total Sells</div>
          <div className="stat-value text-white text-4xl lg:text-5xl my-2">200+</div>
          <div className="stat-desc text-green-300 font-medium text-sm">Premium Tools</div>
        </div>

        <div className="hidden lg:block h-24 w-[2px] bg-white/30 rounded-full"></div>

        <div className="stat place-items-center py-8">
          <div className="stat-title text-white/80 font-medium">Rating</div>
          <div className="stat-value text-white text-4xl lg:text-5xl my-2">4.9/5</div>
          <div className="stat-desc text-green-300 font-medium text-sm">Based on 2k+ reviews</div>
        </div>
        
      </div>
    </div>
  );
}