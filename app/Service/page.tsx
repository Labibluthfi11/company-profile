"use client";

import Navigation from "@/components/Navigation/Navigation";
import Footer from "@/components/Footer/Footer";
import { motion } from "framer-motion";

const steps = [
  {
    title: "Konsultasi Awal",
    desc: "Diskusi awal untuk memahami visi Anda dan keunikan produk Anda.",
  },
  {
    title: "Pengembangan Sampel",
    desc: "Membuat formulasi awal untuk sampel produk kosmetik.",
  },
  {
    title: "Diskusi Hasil",
    desc: "Tinjau dan revisi berdasarkan umpan balik Anda.",
  },
  {
    title: "Desain & Kemasan",
    desc: "Pilih kemasan premium dan desain merek sesuai dengan pasar.",
  },
  { title: "Lisensi", desc: "Kelola BPOM dan legalitas hingga selesai." },
  { title: "Produksi", desc: "Produksi massal di fasilitas bersertifikat." },
  { title: "Pengiriman", desc: "Distribusikan produk ke lokasi Anda." },
  {
    title: "Siap Pasar",
    desc: "Produk siap diluncurkan ke pasar dengan identitas yang kuat.",
  },
];

export default function ServicePage() {
  return (
    <div className="min-h-screen">
      <Navigation />


 
      {/* Hero Section */}
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
            layanan kami 
          </motion.h1>
          <motion.p
            className="text-white text-lg max-w-3xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Kami menyediakan layanan menyeluruh mulai dari pengembangan formula dan 
            produksi hingga pengemasan untuk brand kosmetik dan wewangian Anda. 
            Kami hadir untuk mewujudkan ide menjadi produk siap dipasarkan.
          </motion.p>
        </motion.div>
      </section>

      {/* Alur Layanan */}
      <section className="relative bg-gradient-to-b from-white to-[#F7F8FC] py-28 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-20">
            Alur Layanan Kami
          </h2>

          <div className="relative">
            {/* Garis vertikal */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-200 z-0"></div>

            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative mb-20 w-full md:w-1/2 px-6 ${
                  index % 2 === 0 ? "ml-auto text-left" : "mr-auto text-right"
                }`}
              >
                {/* Lingkaran progress */}
                <span className="absolute top-3 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white border-4 border-[#5C3D94] rounded-full shadow-lg z-10"></span>

                {/* Kartu info */}
                <div className="bg-white/60 backdrop-blur-md border border-gray-200 rounded-3xl p-6 shadow-xl">
                  <h3 className="text-xl font-semibold text-[#1F1F1F]">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Project Development */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src="/images/meteng.jpg"
              alt="Lab Produksi"
              className="rounded-2xl shadow-xl object-cover w-full h-full max-h-[500px]"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Project Development
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Proses perencanaan, pelaksanaan, dan penyelesaian suatu proyek untuk mencapai tujuan tertentu.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section Lab */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <video
              src="/vidio/labara.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="rounded-2xl shadow-xl object-cover w-full h-full max-h-[500px]"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Laboratorium Kimia & Fisika
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Laboratorium adalah fasilitas khusus yang kami rancang untuk penelitian, praktik, formulasi, dan pengujian produk kosmetik.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section Mixing */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src="/images/mixing.jpg"
              alt="Lab Produksi"
              className="rounded-2xl shadow-xl object-cover w-full h-full max-h-[500px]"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Ruangan Mixing
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Di ruang pencampuran (mixing room) kami, bahan-bahan berkualitas tinggi diproses dengan presisi dalam lingkungan yang steril dan terkontrol.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section Video Pengemasan */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Video */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <video
              src="/vidio/Pengemasan.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="rounded-2xl shadow-xl object-cover w-full h-full max-h-[500px]"
            />
          </motion.div>

          {/* Deskripsi */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Ruang Pengemasan
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Ruang pengemasan kami dirancang khusus dengan standar kebersihan 
              dan efisiensi yang tinggi. Setiap produk dikemas oleh tim berpengalaman 
              dalam lingkungan yang steril untuk menjaga kualitas, keamanan, 
              serta estetika produk sebelum sampai ke tangan pelanggan Anda.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
