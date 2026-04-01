export default function Banner() {
  return (
    <div className="hero min-h-[70vh] bg-purple-50 my-6 rounded-3xl max-w-7xl mx-auto px-12">
      <div className="hero-content flex-col lg:flex-row-reverse text-center lg:text-left gap-10">
        <img
          src="https://i.ibb.co.com/twD7fCYQ/banner.png"
          className="max-w-sm md:max-w-md lg:max-w-lg rounded-2xl shadow-2xl"
          alt="Digital Tools"
        />
        <div className="lg:pr-10">
          <div className="badge badge-success rounded-full bg-[#E1E7FF] border-none shadow-lg p-4 mb-4 gap-2">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect opacity="0.2" width="16" height="16" rx="8" fill="url(#paint0_linear_2_340)" />
              <rect opacity="0.4" x="2" y="2" width="12" height="12" rx="6" fill="url(#paint1_linear_2_340)" />
              <rect x="5" y="5" width="6" height="6" rx="3" fill="url(#paint2_linear_2_340)" />
              <defs>
                <linearGradient id="paint0_linear_2_340" x1="-5.10067" y1="8.91954" x2="16.009" y2="8.60591" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#4F39F6" />
                  <stop offset="1" stopColor="#9514FA" />
                </linearGradient>
                <linearGradient id="paint1_linear_2_340" x1="-1.8255" y1="8.68966" x2="14.0068" y2="8.45443" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#4F39F6" />
                  <stop offset="1" stopColor="#9514FA" />
                </linearGradient>
                <linearGradient id="paint2_linear_2_340" x1="3.08725" y1="8.34483" x2="11.0034" y2="8.22722" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#4F39F6" />
                  <stop offset="1" stopColor="#9514FA" />
                </linearGradient>
              </defs>
            </svg>
            <span className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent font-bold">
              New: AI-Powered Tools Available
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-800">
            Supercharge Your<br />Digital Workflow
          </h1>
          <p className="py-6 text-gray-500 max-w-lg">
            Discover our handpicked collection of software, templates, and assets designed to boost your productivity and take your projects to the next level.
          </p>
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <button className="btn bg-gradient-to-r from-[#4F39F6] to-[#9514FA] border-none text-white px-8 rounded-full text-lg shadow-lg hover:opacity-90 transition-all">
              Explore Products
            </button>
            <button className="btn btn-outline border-purple-600 text-purple-600 hover:bg-purple-50 hover:text-purple-700 rounded-full flex gap-2 px-6 shadow-sm">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.3195 8.67734L7.06328 1.79218C6.82722 1.64827 6.55721 1.56957 6.2808 1.56412C6.00439 1.55866 5.73148 1.62664 5.48992 1.76112C5.24837 1.8956 5.04682 2.09176 4.90585 2.32958C4.76488 2.56741 4.68953 2.83838 4.6875 3.11484V16.8851C4.68953 17.1616 4.76488 17.4326 4.90585 17.6704C5.04682 17.9082 5.24837 18.1044 5.48992 18.2389C5.73148 18.3733 6.00439 18.4413 6.2808 18.4359C6.55721 18.4304 6.82722 18.3517 7.06328 18.2078L18.3195 11.3226C18.5465 11.1845 18.7341 10.9902 18.8643 10.7586C18.9945 10.527 19.0628 10.2657 19.0628 9.99999C19.0628 9.73428 18.9945 9.47303 18.8643 9.24139C18.7341 9.00975 18.5465 8.8155 18.3195 8.67734ZM6.5625 16.3164V3.68359L16.8875 9.99999L6.5625 16.3164Z" fill="url(#paint0_linear_2_353)" />
                <defs>
                  <linearGradient id="paint0_linear_2_353" x1="0.104758" y1="10.9697" x2="19.0721" y2="10.7296" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#4F39F6" />
                    <stop offset="1" stopColor="#9514FA" />
                  </linearGradient>
                </defs>
              </svg>
              Watch Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}