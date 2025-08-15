"use client"
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Navbar = () => {
  return (
    <div>
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
    </div>
  )
}

export default Navbar
