"use client"
import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      {/* Navbar */}
      <motion.nav
        className="flex justify-between items-center px-8 py-4"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex space-x-6 text-sm">
          <a href="#" className="hover:underline">Properties</a>
          <a href="#" className="hover:underline">Neighborhoods</a>
   
        </div>
        <div className="text-xl font-bold">Startup Mela</div>
        <div className="">
          <Image
            src="/aic.png"
            alt="User Avatar"
            className="h-8 rounded-full mx-auto"
            width={32}
            height={32}
          />
        </div>
      </motion.nav>

      {/* Hero Section */}
      <div className="relative mx-[4vh] flex-1 flex items-center justify-center">
        {/* Background Image */}
        <motion.img
          src="https://images.unsplash.com/photo-1505761671935-60b3a7427bad"
          alt="City skyline"
          className="absolute mx-auto inset-0 w-full h-full object-fill rounded-2xl"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-black/10 rounded-2xl"></div>

        {/* Content */}
        <div className="relative z-10 px-8 max-w-7xl w-full flex justify-between items-end pb-12 flex-wrap">
          {/* Left Text */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-5xl font-light">
              Presenting <span className="italic font-normal"> Startup Mela</span>
            </h1>
            <p className="mt-2 text-gray-200">
              Premium properties across Manhattan, Brooklyn & beyond.
            </p>
          </motion.div>

          {/* Property Card */}
          <motion.div
            className="bg-black/50 backdrop-blur-md rounded-2xl overflow-hidden max-w-xs"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
          >
            <img
              src="https://images.unsplash.com/photo-1505691938895-1758d7feb511"
              alt="The Grand Madison"
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">The Grand Madison</h3>
              <p className="text-sm text-gray-300 mt-1">
                Designed for modern living, smart home tech, chef's kitchen, serene bedrooms.
              </p>
              <div className="flex justify-between items-center mt-4">
                <span className="text-xs text-gray-400">Last entries</span>
                <motion.button
                  className="w-6 h-6 flex items-center justify-center border border-gray-500 rounded-full hover:bg-gray-700"
                  whileTap={{ scale: 0.9 }}
                  whileHover={{ backgroundColor: "#374151" }}
                >
                  →
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
