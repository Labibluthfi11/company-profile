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
        className="min-h-[70vh] bg-[#D7C4A3] flex items-center justify-center text-center relative bg-cover bg-center pt-24"
      >
        
        <motion.div
          className="relative z-10 px-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-black text-4xl md:text-5xl font-bold mb-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Sertifikasi Kami
          </motion.h1>
          <motion.p
            className="text-black text-lg max-w-3xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            ANSEL saat ini telah memperoleh Sertifikasi CPKB dan HALAL sebagai
            bentuk komitmen terhadap standar kualitas dan kehalalan produk.
            Kedua sertifikasi ini menunjukkan keseriusan ANSEL dalam menjamin
            mutu produksi serta kepatuhan terhadap regulasi nasional. Dengan
            bekal tersebut, ANSEL siap menghadirkan produk kosmetik yang aman,
            berkualitas, dan sesuai dengan kebutuhan konsumen lokal maupun
            global.
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
              <h3 className="text-xl font-semibold mb-2">CPKB atau GMP</h3>
              <p className="text-gray-700">
                PT. Ansel Muda Berkarya berkomitmen untuk menghadirkan produk
                kosmetik yang tidak hanya kreatif dan inovatif, tetapi juga
                memenuhi standar mutu dan keamanan yang diakui secara nasional.
                Melalui sertifikasi CPKB (Cara Pembuatan Kosmetik yang Baik) dan
                Sertifikasi Halal dari LPPOM MUI, kami memastikan setiap proses
                produksi dijalankan dengan kontrol kualitas yang ketat,
                higienis, serta sesuai dengan prinsip etis dan kebutuhan
                konsumen Indonesia.
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
                Sertifikasi Halal LPPOM MUI
              </h3>
              <p className="text-gray-700">
                Kami juga telah memperoleh sertifikasi halal dari LPPOM MUI
                sebagai bentuk komitmen kami terhadap kepatuhan syariat Islam.
                Hal ini menjamin bahwa seluruh proses produksi kosmetik dan
                perawatan pribadi kami dilakukan sesuai prinsip-prinsip halal.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
