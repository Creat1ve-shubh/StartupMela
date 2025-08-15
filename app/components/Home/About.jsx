"use client"
import { useState } from "react";
import { motion } from "framer-motion";

function LensImage({ src, alt, height }) {
  const [lensPos, setLensPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setLensPos({ x, y });
  };

  return (
    <motion.div
      className="relative overflow-hidden group rounded-2xl"
      style={{ height: height || "auto" }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <motion.img
        src={src}
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 rounded-2xl"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.4 }}
      />
      {isHovering && (
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(circle 100px at ${lensPos.x}% ${lensPos.y}%, rgba(255,255,255,0.25), transparent 80%)`,
            mixBlendMode: "overlay",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        />
      )}
    </motion.div>
  );
}

export default function AboutMe() {
  return (
    <div className="bg-black text-white min-h-screen px-6 py-12 max-w-6xl mx-auto">
      {/* Title */}
      <motion.h1
        className="text-5xl text-center mb-12 tracking-wide border-b border-gray-700 pb-4"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <span className="inline-block">Why</span>{" "}
        <span className="inline-block">Startup Mela ?</span>
      </motion.h1>

      {/* Top section */}
      <div className="grid md:grid-cols-2 gap-8 mb-12 border-b border-gray-700 pb-8">
        <LensImage
          src="https://images.unsplash.com/photo-1607746882042-944635dfe10e"
          alt="Profile smiling"
        />
        <motion.div
          className="flex items-center p-6"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <p className="leading-relaxed text-lg">
            Award-winning designer that won the awwward prize in October 2021
            for an IDE website that also focuses on UX to make the product more
            human-like and build it on a design system.
            <br />
            <br />
            My goal before 30 is to impact 1,000,000 persons positively where I
            can make a change in their life.
          </p>
        </motion.div>
      </div>

      {/* Bottom section */}
      <div className="grid md:grid-cols-2 gap-8 border-b border-gray-700 pb-8">
        <motion.div
          className="flex items-center p-6"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <p className="leading-relaxed text-lg">
            If you see me not online or designing then you should know that I’m
            building something or ideating about a new startup that I have in
            mind.
            <br />
            <br />
            I truly want to leave something good in this life to be remembered
            by.
            <br />
            <br />
            Currently, I’m making this post just so that I step away a bit from
            work and my problems to remember where I have come from.
          </p>
        </motion.div>
        <LensImage
          src="https://images.unsplash.com/photo-1607746882042-944635dfe10e"
          alt="Profile smiling and looking up"
        />
      </div>

      {/* Full-width image */}
      <div className="mt-8 border border-gray-700 rounded-2xl overflow-hidden">
        <LensImage
          src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6"
          alt="Profile thinking"
          height="400px"
        />
      </div>
    </div>
  );
}
