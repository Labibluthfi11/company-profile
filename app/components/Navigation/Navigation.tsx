"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutHover, setAboutHover] = useState(false);
  const [productHover, setProductHover] = useState(false);

  const menuItems = [
    { name: "About", path: "/about" },
    { name: "Service", path: "/Service" },
    { name: "Product", path: "/Product" },
    { name: "Contact", path: "/Contact" },
  ];

  const aboutDropdown = [
    { name: "Who We Are", path: "/about/who-we-are" },
    { name: "Certification", path: "/Certification" },
  ];

  const productDropdown = [
    { name: "Skincare", path: "/Product/Skincare" },
    { name: "Parfum", path: "/Product/Parfum" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#0a1a2f] text-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-20">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold tracking-wide">
          PT. Ansel Muda Berkarya
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          {menuItems.map((item) => {
            if (item.name === "About") {
              return (
                <div
                  key={item.name}
                  className="relative group"
                  onMouseEnter={() => setAboutHover(true)}
                  onMouseLeave={() => setAboutHover(false)}
                >
                  <span className="cursor-pointer hover:text-blue-400 font-medium">
                    {item.name}
                  </span>
                  <AnimatePresence>
                    {aboutHover && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute top-8 left-0 bg-[#0f2342] rounded-lg shadow-lg py-2 px-4"
                      >
                        {aboutDropdown.map((sub, index) => (
                          <Link
                            key={index}
                            href={sub.path}
                            className="block py-1 px-2 hover:text-blue-400"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            if (item.name === "Product") {
              return (
                <div
                  key={item.name}
                  className="relative group"
                  onMouseEnter={() => setProductHover(true)}
                  onMouseLeave={() => setProductHover(false)}
                >
                  <span className="cursor-pointer hover:text-blue-400 font-medium">
                    {item.name}
                  </span>
                  <AnimatePresence>
                    {productHover && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute top-8 left-0 bg-[#0f2342] rounded-lg shadow-lg py-2 px-4"
                      >
                        {productDropdown.map((sub, index) => (
                          <Link
                            key={index}
                            href={sub.path}
                            className="block py-1 px-2 hover:text-blue-400"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            return (
              <Link
                key={item.name}
                href={item.path}
                className="hover:text-blue-400 font-medium"
              >
                {item.name}
              </Link>
            );
          })}
        </div>

        {/* Hamburger Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-20 left-0 w-full bg-[#0a1a2f] shadow-lg md:hidden z-40"
          >
            <div className="flex flex-col space-y-4 py-6 px-6 text-white">
              {menuItems.map((item) => {
                if (item.name === "About") {
                  return (
                    <div key={item.name}>
                      <button
                        onClick={() => setAboutHover(!aboutHover)}
                        className="w-full text-left font-medium hover:text-blue-400"
                      >
                        {item.name}
                      </button>
                      {aboutHover && (
                        <div className="ml-4 mt-2 flex flex-col space-y-2">
                          {aboutDropdown.map((sub, index) => (
                            <Link
                              key={index}
                              href={sub.path}
                              className="text-sm hover:text-blue-400"
                              onClick={() => setMenuOpen(false)}
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                if (item.name === "Product") {
                  return (
                    <div key={item.name}>
                      <button
                        onClick={() => setProductHover(!productHover)}
                        className="w-full text-left font-medium hover:text-blue-400"
                      >
                        {item.name}
                      </button>
                      {productHover && (
                        <div className="ml-4 mt-2 flex flex-col space-y-2">
                          {productDropdown.map((sub, index) => (
                            <Link
                              key={index}
                              href={sub.path}
                              className="text-sm hover:text-blue-400"
                              onClick={() => setMenuOpen(false)}
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.name}
                    href={item.path}
                    className="font-medium hover:text-blue-400"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;
