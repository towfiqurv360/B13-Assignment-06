export default function Footer() {
  return (
    <footer className="w-full">
      <div className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-center py-16 px-6">
        <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to Transform Your Workflow?</h3>
        <p className="text-white/80 text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
          Join thousands of professionals who are already using Digitools to work smarter. <br className="hidden md:block"/> Start your free trial today.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
          <button className="btn bg-white text-purple-600 border-none hover:bg-gray-100 rounded-full px-8 text-lg w-full sm:w-auto">
            Explore Products
          </button>
          <button className="btn btn-outline border-white text-white hover:bg-white hover:text-purple-600 rounded-full px-8 text-lg w-full sm:w-auto">
            View Pricing
          </button>
        </div>
        
        <p className="text-white/70 text-sm font-medium">14-day free trial • No credit card required • Cancel anytime</p>
      </div>

      <div className="bg-[#111424] py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12 pb-12 border-b border-gray-700/50">
            
            <div className="col-span-2 md:col-span-3 lg:col-span-2">
              <h2 className="text-4xl font-bold text-white mb-4">DigiTools</h2>
              <p className="text-gray-400 leading-relaxed pr-4 text-[15px]">
                Premium digital tools for creators, <br className="hidden lg:block"/> professionals, and businesses. Work smarter <br className="hidden lg:block"/> with our suite of powerful tools.
              </p>
            </div>

            <div className="flex flex-col gap-5">
              <h6 className="text-white text-[17px] font-medium mb-1">Product</h6>
              <a className="text-gray-400 hover:text-white transition-colors cursor-pointer text-[15px]">Features</a>
              <a className="text-gray-400 hover:text-white transition-colors cursor-pointer text-[15px]">Pricing</a>
              <a className="text-gray-400 hover:text-white transition-colors cursor-pointer text-[15px]">Templates</a>
              <a className="text-gray-400 hover:text-white transition-colors cursor-pointer text-[15px]">Integrations</a>
            </div>

            <div className="flex flex-col gap-5">
              <h6 className="text-white text-[17px] font-medium mb-1">Company</h6>
              <a className="text-gray-400 hover:text-white transition-colors cursor-pointer text-[15px]">About</a>
              <a className="text-gray-400 hover:text-white transition-colors cursor-pointer text-[15px]">Blog</a>
              <a className="text-gray-400 hover:text-white transition-colors cursor-pointer text-[15px]">Careers</a>
              <a className="text-gray-400 hover:text-white transition-colors cursor-pointer text-[15px]">Press</a>
            </div>

            <div className="flex flex-col gap-5">
              <h6 className="text-white text-[17px] font-medium mb-1">Resources</h6>
              <a className="text-gray-400 hover:text-white transition-colors cursor-pointer text-[15px]">Documentation</a>
              <a className="text-gray-400 hover:text-white transition-colors cursor-pointer text-[15px]">Help Center</a>
              <a className="text-gray-400 hover:text-white transition-colors cursor-pointer text-[15px]">Community</a>
              <a className="text-gray-400 hover:text-white transition-colors cursor-pointer text-[15px]">Contact</a>
            </div>

            <div className="flex flex-col gap-5">
              <h6 className="text-white text-[17px] font-medium mb-1">Social Links</h6>
              <div className="flex gap-4 mt-1">
                <a className="bg-white text-[#111424] w-10 h-10 rounded-full hover:bg-gray-200 transition-colors cursor-pointer flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>
                <a className="bg-white text-[#111424] w-10 h-10 rounded-full hover:bg-gray-200 transition-colors cursor-pointer flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                </a>
                <a className="bg-white text-[#111424] w-10 h-10 rounded-full hover:bg-gray-200 transition-colors cursor-pointer flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </a>
              </div>
            </div>

          </div>

          <div className="flex flex-col md:flex-row justify-between items-center pt-8 text-gray-400 text-[14px] gap-6">
            <p>© 2026 Digitools. All rights reserved.</p>
            <div className="flex gap-8">
              <a className="hover:text-white transition-colors cursor-pointer">Privacy Policy</a>
              <a className="hover:text-white transition-colors cursor-pointer">Terms of Service</a>
              <a className="hover:text-white transition-colors cursor-pointer">Cookies</a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}