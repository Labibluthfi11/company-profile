"use client";

import Navigation from "@/components/Navigation/Navigation";
import Footer from "@/components/Footer/Footer";
import { motion } from "framer-motion";
import Link from "next/link";

export default function WhoWeArePage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero section atas dengan animasi */}
      <section
        className="min-h-[70vh] flex items-center justify-center text-center relative bg-cover bg-center pt-24"
        style={{ backgroundImage: "url('/images/ansel.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <motion.div
          className="relative z-10 px-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-white text-4xl md:text-5xl font-bold mb-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            OUR PRODUCT
          </motion.h1>
          
        </motion.div>
      </section>

    {/* Product Categories Section */}
<section className="bg-white py-20 px-6">
  <div className="max-w-6xl mx-auto space-y-20">

    {/* SKINCARE */}
    <motion.div
      className="flex flex-col md:flex-row items-center gap-8"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
              <Link href="/Product/Skincare">
          <motion.img
            src="/Products/skincare.png"
            alt="Skincare"
            className="w-64 h-64 object-cover rounded-xl shadow-lg cursor-pointer"
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ duration: 0.3 }}
          />
        </Link>
      <div className="md:w-2/3">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">Skincare</h2>
        <ul className="text-gray-600 text-sm space-y-1">
          <li><strong>Cleansing:</strong> Face wash, Cleansing Oil, Micellar Water</li>
          <li><strong>Facial Care:</strong> Lotion, Essence, Toner, Serum, Moisturizer, Cream</li>
          <li><strong>Sun Care:</strong> Sunscreen, Sun Gel</li>
          <li><strong>Body Care:</strong> Body Lotion, Hand cream, Body wash</li>
        </ul>
      </div>
    </motion.div>

    {/* HAIR */}
    <motion.div
      className="flex flex-col md:flex-row items-center gap-8"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <motion.img
        src="/Products/hair.png"
        alt="Hair"
        className="w-64 h-64 object-cover rounded-xl shadow-lg"
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.3 }}
      />
      <div className="md:w-2/3">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">Hair</h2>
        <ul className="text-gray-600 text-sm space-y-1">
          <li><strong>Hair:</strong> Shampoo</li>
        </ul>
      </div>
    </motion.div>

    {/* FRAGRANCE */}
    <motion.div
      className="flex flex-col md:flex-row items-center gap-8"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <motion.img
        src="/Products/fragrance.png"
        alt="Fragrance"
        className="w-64 h-64 object-cover rounded-xl shadow-lg"
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.3 }}
      />
      <div className="md:w-2/3">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">Fragrance</h2>
        <ul className="text-gray-600 text-sm space-y-1">
          <li><strong>Perfume:</strong> Body Mist, Hair Mist, Eau de Parfume, Extrait de Parfume, Eau de Toilette</li>
        </ul>
      </div>
    </motion.div>

  </div>
</section>



      <Footer />
    </div>
  );
}
