export default function HeroSection() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-4">
        <div className="flex space-x-6 text-sm">
          <a href="#" className="hover:underline">Properties</a>
          <a href="#" className="hover:underline">Neighborhoods</a>
          <a href="#" className="hover:underline">About</a>
          <a href="#" className="hover:underline">Buy / Sell</a>
        </div>
        <div className="text-xl font-bold">//</div>
        <div className="flex space-x-4">
          <a href="#" className="hover:underline">Contact us</a>
          <button className="bg-white text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-200">
            Booking now
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative flex-1 flex items-center justify-center">
        {/* Background Image */}
        <img
          src="https://images.unsplash.com/photo-1505761671935-60b3a7427bad"
          alt="City skyline"
          className="absolute mx-auto inset-0 w-full h-full object-fill rounded-2xl"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-black/10 rounded-2xl"></div>

        {/* Content */}
        <div className="relative z-10 px-8 max-w-7xl w-full flex justify-between items-end pb-12">
          <div>
            <h1 className="text-5xl font-light">
              Live the <span className="italic font-normal">City</span>
            </h1>
            <p className="mt-2 text-gray-200">
              Premium properties across Manhattan, Brooklyn & beyond.
            </p>
          </div>

          {/* Property Card */}
          <div className="bg-black/50 backdrop-blur-md rounded-2xl overflow-hidden max-w-xs">
            <img
              src="https://images.unsplash.com/photo-1505691938895-1758d7feb511"
              alt="The Grand Madison"
              className="w-full h-40 mx-10 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">The Grand Madison</h3>
              <p className="text-sm text-gray-300 mt-1">
                Designed for modern living, smart home tech, chef's kitchen, serene bedrooms.
              </p>
              <div className="flex justify-between items-center mt-4">
                <span className="text-xs text-gray-400">Last entries</span>
                <button className="w-6 h-6 flex items-center justify-center border border-gray-500 rounded-full hover:bg-gray-700">
                  →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
