"use client";

import Navigation from "@/components/Navigation/Navigation";
import Footer from "@/components/Footer/Footer";
import { motion } from "framer-motion";

const steps = [
  {
    title: "Konsultasi Ide",
    desc: "Diskusi awal memahami visi dan keunikan produk Anda.",
  },
  {
    title: "Pembuatan Sempel",
    desc: "Membuat formulasi awal untuk sampel produk kosmetik.",
  },
  {
    title: "Diskusi Hasil",
    desc: "Review dan revisi berdasarkan feedback Anda.",
  },
  {
    title: "Desain & Kemasan",
    desc: "Pilih kemasan premium dan desain branding sesuai pasar.",
  },
  { title: "Perizinan", desc: "Urus BPOM dan legalitas hingga tuntas." },
  { title: "Produksi", desc: "Produksi massal di fasilitas bersertifikat." },
  { title: "Pengiriman", desc: "Distribusi produk ke lokasi Anda." },
  {
    title: "Siap Dijual",
    desc: "Produk siap tampil di pasar dengan identitas yang kuat.",
  },
];

export default function ServicePage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
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
            Layanan Kami
          </motion.h1>
          <motion.p
            className="text-black text-lg max-w-3xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Kami menyediakan layanan lengkap mulai dari pengembangan formula,
            produksi, hingga pengemasan untuk brand kosmetik dan parfum Anda.
            Kami hadir untuk mewujudkan ide menjadi produk yang siap dipasarkan.
          </motion.p>
        </motion.div>
      </section>

      {/* Alur Layanan Kami */}
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
      {/* Section Gambar Kiri, Deskripsi Kanan */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Gambar */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src="/images/meeting.jpg"
              alt="Lab Produksi"
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
              Project Development
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Proses perencanaan, pelaksanaan, dan penyelesaian suatu proyek
              untuk mencapai tujuan tertentu. Proses ini mencakup identifikasi
              kebutuhan, perancangan solusi, pengelolaan sumber daya, dan
              evaluasi hasil secara terstruktur dan terukur.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Dari mulai pembuatan Eksekutif Design konsep yang elegan, hingga
              penyusunan Timeline produksi yang efisien, semua kami tangani
              dengan teliti dan professional, Bersama kami Project Development
              yang anda inginkan jadi lebih mudah, cepat, dan tepat sasaran.
            </p>
          </motion.div>
        </div>
      </section>
      {/* Section Gambar Kiri, Deskripsi Kanan */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Gambar */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src="/images/labun.jpg
              "
              alt="Lab Produksi"
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
              Ruang Lab Kimia Fisika
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Laboratorium adalah fasilitas ruangan yang kami rancang untuk
              penelitian, praktikum, formulasi, dan pengujian produk-produk
              kosmetik. Laboratorium ini dilengkapi dengan peralatan dan
              perlengkapan khusus untuk mencampur bahan aktif, mengukur
              stabilitas produk, serta memastikan keamanan dan kualitas sesuai
              standar industri kosmetik.
            </p>
          </motion.div>
        </div>
      </section>
      {/* Section Gambar Kiri, Deskripsi Kanan */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Gambar */}
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

          {/* Deskripsi */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Ruang mixing
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Di ruang mixing kami, bahan-bahan berkualitas tinggi diproses
              dengan presisi dalam lingkungan steril dan terkontrol. Proses
              pencampuran dilakukan oleh tenaga ahli menggunakan mesin
              berstandar industri untuk menjamin stabilitas dan performa formula
              yang konsisten.
            </p>
          </motion.div>
        </div>
      </section>


      {/* Section Gambar Kiri, Deskripsi Kanan */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Gambar */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            
          >
            <img
              src="/images/filing2.jpg"
              alt="Lab Produksi"
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
              Ruang pengemasan
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Ruang pengemasan kami dirancang khusus dengan standar kebersihan
              dan efisiensi tinggi. Setiap produk dikemas oleh tim berpengalaman
              dalam lingkungan steril untuk menjaga kualitas, keamanan, dan
              estetika produk sebelum sampai ke tangan pelanggan Anda.
            </p>
          </motion.div>
        </div>
      </section>




      <Footer />
    </div>
  );
}



















