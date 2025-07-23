"use client";

import Navigation from "@/components/Navigation/Navigation";
import Footer from "@/components/Footer/Footer";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function ParfumPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="relative">
        <div className="relative h-[60vh] w-full">
          <Image
            src="/Products/fragrance.png"
            alt="Fragrance Product"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white text-4xl md:text-5xl font-bold text-center px-4"
            >
              Discover Our Premium Fragrance Collection
            </motion.h1>
          </div>
        </div>
      </section>

      {/* Detail Section */}
      <section className="max-w-6xl mx-auto py-20 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold mb-6 text-center">
            Parfum Eksklusif dengan Karakter dan Ketahanan Berbeda
          </h2>
          <p className="text-lg text-gray-600 mb-16 text-center">
            Koleksi wewangian kami dirancang dengan konsentrasi aroma yang
            beragam—dari yang ringan dan menyegarkan hingga intens dan tahan
            lama. Temukan jenis parfum yang sesuai dengan kepribadian dan
            aktivitasmu.
          </p>
        </motion.div>

        {/* Foto Produk + Penjelasan */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Foto */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full"
          >
            <Image
              src="/products/botol-parfum.png"
              alt="Luxury Parfum Bottle"
              width={600}
              height={600}
              className="object-contain mx-auto rounded-2xl shadow-xl"
            />
          </motion.div>

          {/* Penjelasan */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">
              Jenis Parfum Berdasarkan Konsentrasi
            </h3>
            <p className="text-gray-600 mb-6">
              Perbedaan parfum terletak pada konsentrasi minyak aromatiknya.
              Semakin tinggi konsentrasi, semakin kuat dan lama wanginya
              bertahan.
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>
                <strong>Eau de Toilette (EDT):</strong> Ringan dan
                menyegarkan. Ketahanan sekitar 3–5 jam. Cocok untuk penggunaan
                siang hari.
              </li>
              <li>
                <strong>Eau de Parfum (EDP):</strong> Lebih kuat dan tahan
                lama. Bertahan hingga 6–8 jam. Cocok untuk acara formal dan
                malam hari.
              </li>
              <li>
                <strong>Extrait de Parfum:</strong> Memiliki konsentrasi
                tertinggi, dengan ketahanan 10–24 jam. Aromanya intens dan
                mewah.
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Section Extrait de Parfum */}
<div className="grid md:grid-cols-2 gap-12 items-center mt-24">
  {/* Penjelasan di Kiri */}
  <motion.div
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
  >
    <h3 className="text-3xl font-bold mb-4 text-gray-800">
      1. Extrait de Parfum
    </h3>
    <p className="text-gray-700 text-lg leading-relaxed">
      Sering juga disebut <strong>pure perfume</strong> atau hanya{" "}
      <strong>parfum</strong>, ini adalah bentuk parfum dengan konsentrasi
      minyak wangi paling tinggi, biasanya antara 20% hingga 40%. Karena kadar
      minyak esensialnya sangat pekat, wanginya terasa lebih dalam, kaya, dan
      bisa bertahan sangat lama di kulit — bahkan bisa sampai seharian penuh,
      kadang hingga 24 jam tergantung kondisi kulit dan cuaca.
    </p>
    <p className="text-gray-700 text-lg leading-relaxed mt-4">
      Jenis ini tidak perlu disemprot banyak-banyak karena aromanya sangat
      intens. Biasanya dipakai untuk momen spesial atau malam hari, dan punya
      karakter <strong>mewah</strong>. Karena kadar konsentratnya tinggi,
      harganya pun biasanya paling mahal dibanding jenis lainnya.
    </p>
  </motion.div>

  {/* Gambar di Kanan */}
  <motion.div
    initial={{ opacity: 0, x: 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
  >
    <Image
      src="/Products/extrait-de-parfum.png"
      alt="Extrait de Parfum"
      width={350}
      height={300}
      className="rounded-xl shadow-xl mx-auto"
    />
  </motion.div>
</div>

{/* Section Eau de Parfum */}
<div className="grid md:grid-cols-2 gap-12 items-center mt-24">
  {/* Gambar di Kiri */}
  <motion.div
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className="flex justify-center"
  >
    <Image
      src="/Products/eau-de-parfum.png" // ganti sesuai nama file kamu
      alt="Eau de Parfum"
      width={350}
      height={400}
      className="rounded-xl shadow-lg object-cover"
    />
  </motion.div>

  {/* Penjelasan di Kanan */}
  <motion.div
    initial={{ opacity: 0, x: 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
  >
    <h3 className="text-3xl font-bold mb-4 text-gray-800">
      2. Eau de Parfum (EDP)
    </h3>
    <p className="text-gray-700 text-lg leading-relaxed">
      Eau de parfum adalah jenis yang paling banyak digunakan untuk parfum modern
      yang dijual di pasaran. Konsentrasinya sedikit di bawah extrait, yaitu sekitar
      15% sampai 20%. Wanginya tetap tahan lama — bisa sekitar 6 sampai 12 jam —
      namun tidak sekuat extrait.
    </p>
    <p className="text-gray-700 text-lg leading-relaxed mt-4">
      EDP punya keseimbangan yang pas: aromanya cukup kuat untuk bertahan lama,
      tapi tidak terlalu menyengat sehingga masih nyaman untuk digunakan
      sehari-hari. Jenis ini biasanya jadi pilihan favorit karena aromanya tetap
      terasa <strong>elegan</strong> dan <strong>mewah</strong>, tapi lebih fleksibel
      dipakai dalam berbagai suasana, siang maupun malam.
    </p>
  </motion.div>
</div>

{/* Section Eau de Toilette */}
<div className="grid md:grid-cols-2 gap-12 items-center mt-24">
  {/* Penjelasan di Kiri */}
  <motion.div
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
  >
    <h3 className="text-3xl font-bold mb-4 text-gray-800">
      3. Eau de Toilette (EDT)
    </h3>
    <p className="text-gray-700 text-lg leading-relaxed">
      Kalau dibandingkan dengan dua jenis sebelumnya, eau de toilette punya
      konsentrasi minyak parfum yang lebih ringan, sekitar 5% hingga 15%.
      Karena lebih ringan, wanginya juga lebih segar dan cepat menguap — biasanya
      bertahan antara 3 sampai 6 jam saja.
    </p>
    <p className="text-gray-700 text-lg leading-relaxed mt-4">
      EDT sering digunakan untuk wewangian yang cocok dipakai saat siang hari,
      cuaca panas, atau saat ingin aroma yang tidak terlalu menyolok. Aromanya
      lebih cerah, ringan, dan sering kali punya nuansa citrus atau floral yang
      segar. Biasanya juga lebih <strong>terjangkau</strong> dari segi harga.
    </p>
  </motion.div>

  {/* Gambar di Kanan */}
  <motion.div
    initial={{ opacity: 0, x: 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className="flex justify-center"
  >
    <Image
      src="/Products/eau-de-toilet.png" // ganti sesuai nama file kamu
      alt="Eau de Toilette"
      width={400}
      height={400}
      className="rounded-xl shadow-lg object-cover"
    />
  </motion.div>
</div>
   
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
