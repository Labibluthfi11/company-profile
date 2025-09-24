"use client";

import Navigation from "@/components/Navigation/Navigation";
import Footer from "@/components/Footer/Footer";
import { motion } from "framer-motion";

export default function WhoWeArePage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero section atas dengan animasi */}
      <section className="absolute inset-0 bg-gradient-to-b from-[#123c70] to-[#0a1a2f] z-0 min-h-[60vh] flex items-center justify-center text-center relative bg-cover bg-center pt-24">
        
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
            WHO WE ARE
          </motion.h1>
          <motion.p
            className="text-white text-lg max-w-3xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            PT. Ansel Muda Berkarya is an industry of limitless creativity, particularly in the field of fragrances. We provide services in the production and development of creative, authentic, and unique products, utilizing natural ingredients sourced from Indonesia.
          </motion.p>
        </motion.div>
      </section>

      {/* Section tambahan: Perjalanan Kami */}
      <section className="py-20 px-6 bg-white text-gray-800">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* Gambar kiri */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src="/images/lab-nu.jpg"
              alt="Lab Ansel"
              className="w-full h-auto rounded-xl shadow-lg object-cover"
            />
          </motion.div>

          {/* Konten kanan */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-snug">
              Our journey began with a simple idea
            </h2>
            <p className="mb-4 text-gray-700">
              To become a trusted partner for brands aspiring to launch high-quality cosmetic products without the need to build factories or manage complex production processes.  PT. Ansel Muda Berkarya was founded with a clear mission to provide comprehensive cosmetic manufacturing solutions that are not only efficient, but also uphold the highest standards of safety, creativity, and excellence.
            </p>
            <p className="text-gray-700">
              We believe that every brand has a unique story, and our role is to bring that story to life through tailor-made products such as shampoos, body washes, toners, perfumes, and many more. By combining modern manufacturing technology with deep insights into the beauty market, we ensure that every formula we create aligns with your brand’s values and your customers’ expectations.
            </p>

            {/* Statistik */}
            <div className="mt-8 grid grid-cols-2 gap-6">
              <div>
                <h3 className="text-4xl font-bold text-black-600">1</h3>
                <p className="text-sm text-gray-600 mt-1">Years in Business</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-black-600">20+</h3>
                <p className="text-sm text-gray-600 mt-1">Clients Served</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section: Visi dan Misi */}
      <section className="py-20 px-6 bg-white text-gray-800">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* Gambar Logo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src="/images/cihuy.png"
              alt="Logo Ansel"
              className="w-full max-w-xs mx-auto h-auto object-contain"
            />
          </motion.div>

          {/* Visi dan Misi */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black-700 leading-snug">
              Vision & Mission
            </h2>

            {/* Visi */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">VISION</h3>
              <p className="text-gray-600">
                Creating global marketing without boundaries or limitations.
              </p>
            </div>

            {/* Misi */}
            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">MISSION</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>Utilizing natural raw materials from Indonesia.</li>
                <li>
                  Educating and advocating customers in exploring creativity within the world of fragrances.
                </li>
                <li>
                  Creating global marketing without boundaries or limitations.
                </li>
                <li>
                  Maintaining environmental sustainability from development
                  efforts towards a sustainable future.
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section: Sister Collaboration */}
      <section className="py-20 px-6 bg-white text-gray-800">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* Gambar kolaborasi */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src="/images/collab.jpg"
              alt="Sister Collaboration"
              className="w-full h-auto rounded-xl shadow-md object-cover"
            />
          </motion.div>

          {/* Deskripsi Kolaborasi */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black leading-snug">
              Sister Collaboration
            </h2>

            <p className="mb-4 text-gray-700 leading-relaxed">
              <strong>PT. Ansel Muda Berkarya</strong> As a part of{" "}
              <strong>Sister Collaboration</strong> with{" "}
              <strong>PT. Followme Indonesia</strong> and{" "}
              <strong>PT. Indonesia Premium Goods Group</strong>, as a global leader
              in the cosmetics and fragrances industry. We are three entities
              synergizing to bring innovative solutions to the cosmetics and
              fragrances industry. This collaboration was born from a shared
              spirit to develop a sustainable industry, creative, and standardized.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Through this strategic partnership, we are committed to providing the best products and services, 
              combining technological excellence, local creativity, and profound sustainability values. Together, 
              we move forward to meet the needs of both local and international markets, while upholding integrity, quality, and cultural diversity.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
