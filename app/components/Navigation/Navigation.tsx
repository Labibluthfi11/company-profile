"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState<boolean | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutHover, setAboutHover] = useState(false);
  const [productHover, setProductHover] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "About", path: "/about", isDropdown: true },
    { name: "Service", path: "/Service" },
    { name: "Product", path: "/product", isDropdown: true },
    { name: "Contact", path: "/Contact" },
  ];

  const aboutDropdown = [
    { name: "Who we are", path: "/about/who-we-are" },
    { name: "PT Ansel History", path: "/history" },
    { name: "Certification", path: "/Certification" },
  ];

  const productDropdown = [
    { name: "Skincare", path: "/Product/Skincare" },
    { name: "Parfum", path: "/Product/Parfum" },
  ];

  if (isScrolled === null) return null;

  return (
    <motion.nav
      className={`fixed top-0 w-full z-40 transition-all duration-300 ${
        isScrolled ? "bg-white backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4 py-4 max-w-screen-xl">
        <div className="flex items-center justify-between">
          {/* Logo dan Nama */}
          <Link
            href="/"
            className="flex items-center space-x-3 hover:opacity-80 transition-opacity duration-200"
          >
            <Image
              src="/images/cihuy.png"
              alt="Logo AMBA"
              width={60}
              height={60}
              className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 object-contain transition-all duration-300"
            />
            <span
              className={`text-lg sm:text-xl md:text-3xl font-bold ${
                isScrolled ? "text-gray-900" : "text-black"
              }`}
            >
              PT. Ansel Muda Berkarya
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 relative">
            {menuItems.map((item) => {
              if (item.name === "About") {
                return (
                  <div
                    key={item.name}
                    className="relative"
                    onMouseEnter={() => setAboutHover(true)}
                    onMouseLeave={() => setAboutHover(false)}
                  >
                    <motion.span
                      className={`cursor-pointer hover:text-blue-600 ${
                        isScrolled ? "text-gray-700" : "text-black"
                      }`}
                      whileHover={{ y: -2 }}
                    >
                      {item.name}
                    </motion.span>

                    <AnimatePresence>
                      {aboutHover && (
                        <motion.div
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -5 }}
                          className="absolute mt-2 py-3 px-4 rounded-xl shadow-xl w-52 bg-white"
                        >
                          {aboutDropdown.map((sub, index) => (
                            <Link
                              key={index}
                              href={sub.path}
                              className="block py-2 text-sm font-medium text-gray-800 hover:text-blue-600 transition-colors"
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
                    className="relative"
                    onMouseEnter={() => setProductHover(true)}
                    onMouseLeave={() => setProductHover(false)}
                  >
                    <motion.span
                      className={`cursor-pointer hover:text-blue-600 ${
                        isScrolled ? "text-gray-700" : "text-black"
                      }`}
                      whileHover={{ y: -2 }}
                    >
                      {item.name}
                    </motion.span>

                    <AnimatePresence>
                      {productHover && (
                        <motion.div
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -5 }}
                          className="absolute mt-2 py-3 px-4 rounded-xl shadow-xl w-52 bg-white"
                        >
                          {productDropdown.map((sub, index) => (
                            <Link
                              key={index}
                              href={sub.path}
                              className="block py-2 text-sm font-medium text-gray-800 hover:text-blue-600 transition-colors"
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
                <motion.a
                  key={item.name}
                  href={item.path}
                  className={`hover:text-blue-600 transition-colors ${
                    isScrolled ? "text-gray-700" : "text-black"
                  }`}
                  whileHover={{ y: -2 }}
                >
                  {item.name}
                </motion.a>
              );
            })}
          </div>

          {/* Toggle Button Mobile */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className={`w-6 h-6 ${isScrolled ? "text-black" : "text-black"}`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 5.25h16.5M3.75 12h16.5M3.75 18.75h16.5"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu (optional) bisa ditambah di sini */}
      </div>
    </motion.nav>
  );
}
