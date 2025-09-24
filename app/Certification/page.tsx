"use client";

import Navigation from "@/components/Navigation/Navigation";
import Footer from "@/components/Footer/Footer";
import { motion } from "framer-motion";

export default function CertificationPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero section atas dengan animasi */}
      <section
        className="absolute inset-0 bg-gradient-to-b from-[#123c70] z-0 min-h-[70vh] bg-[#0a1a2f] flex items-center justify-center text-center relative bg-cover bg-center pt-24"
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
            Our Certification
          </motion.h1>
          <motion.p
            className="text-white text-lg max-w-3xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            ANSEL has currently obtained CPKB and HALAL certifications as a commitment to product quality standards and compliance with halal requirements. 
            These certifications reflect ANSEL’s dedication to ensuring production quality and adherence to national regulations. With this foundation, ANSEL is ready to deliver safe, high-quality cosmetic products that meet the needs of both local and global consumers.
          </motion.p>
        </motion.div>
      </section>

      {/* Section Sertifikasi Detail */}
      <section className="py-20 px-6 bg-white text-gray-800">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Sertifikasi CPKB */}
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                src="/Certifications/Cpkb.png"
                alt="Sertifikasi CPKB"
                className="w-60 md:w-72 h-auto mx-auto object-contain"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-2">CPKB or GMP</h3>
              <p className="text-gray-700">
                PT. Ansel Muda Berkarya is committed to delivering cosmetic
                products that are not only creative and innovative but also
                meet nationally recognized quality and safety standards.
                Through CPKB (Good Manufacturing Practices) certification and
                Halal certification from LPPOM MUI, We ensure that every production process is carried out with strict quality control, 
                maintained hygiene, and in alignment with ethical principles as well as the needs of Indonesian consumers.
              </p>
            </motion.div>
          </div>

          <hr className="my-8 border-gray-300" />

          {/* Sertifikasi Halal */}
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                src="/Certifications/Halal.png"
                alt="Sertifikasi Halal MUI"
                className="w-60 md:w-72 h-auto mx-auto object-contain"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-2">
                LPPOM MUI Halal Certification
              </h3>
              <p className="text-gray-700">
                We have also obtained halal certification from LPPOM MUI as a demonstration of our commitment to complying with Islamic principles. 
                This ensures that our entire cosmetic and personal care production process is carried out in accordance with halal standards.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
