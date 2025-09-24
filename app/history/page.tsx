"use client";

import Navigation from "@/components/Navigation/Navigation";
import Footer from "@/components/Footer/Footer";
import { motion } from "framer-motion";

export default function historyPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero section atas dengan animasi */}
      <section
        className="absolute inset-0 bg-gradient-to-b from-[#123c70] z-0 min-h-[50vh] bg-[#0a1a2f] flex items-center justify-center text-center relative bg-cover bg-center pt-24"
      >
        
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
            OUR HISTORY
          </motion.h1>
          
        </motion.div>
      </section>

      {/* Timeline Tengah */}
<section className="bg-white py-24 px-6">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
      How We Began
    </h2>

    <div className="relative">
      {/* Garis Tengah */}
      <div className="absolute left-1/2 top-0 transform -translate-x-1/2 w-1 bg-gray-300 h-full z-0"></div>

      {[
        { year: "18-July-2024 ", desc: "Launching of PT. Ansel Muda Berkarya." },
        { year: "15-Oktober-2024", desc: "Obtained CPKB certification." },
        { year: "10-January-2025", desc: "Commenced Production." },
        { year: "06-july-2025", desc: "Obtained halal certification from MUI." },
        // Tambah tahun dan deskripsi lainnya di sini
      ].map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          viewport={{ once: true }}
          className={`mb-16 w-full md:w-1/2 px-6 z-10 relative ${
            index % 2 === 0 ? "ml-auto text-left" : "mr-auto text-right"
          }`}
        >
          {/* Lingkaran */}
          <span className="absolute top-3 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-[#5C3D94] border-4 border-white rounded-full z-20 shadow-md"></span>

          {/* Kartu Event */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-md">
            <h3 className="text-lg font-semibold text-[#5C3D94] mb-2">{item.year}</h3>
            <p className="text-gray-600 text-sm">{item.desc}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>


      <Footer />
    </div>
  );
}
