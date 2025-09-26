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
            src="/images/beauty.jpeg"
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
            Temukan Koleksi Parfum Premium Kami
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
            Parfum Eksklusif, Berkarakter Unik & Tahan Lama
          </h2>
          <p className="text-lg text-gray-600 mb-16 text-center">
            Koleksi parfum kami dirancang dengan berbagai konsentrasi aroma, mulai dari yang ringan dan menyegarkan hingga yang intens dan tahan lama.
            Temukan jenis parfum yang sesuai dengan kepribadian dan gaya hidup Anda.
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
              src="/Products/botol-parfum.png"
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
              Kategori Parfum Berdasarkan Konsentrasi
            </h3>
            <p className="text-gray-600 mb-6">
              Perbedaan parfum terletak pada konsentrasi minyak aromatik.
              Semakin tinggi konsentrasi, semakin kuat dan lama wangi
              bertahan.
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>
                <strong>Eau de Toilette (EDT):</strong> Ringan dan
                menyegarkan. Bertahan sekitar 3–5 jam. Cocok untuk digunakan siang hari.
              </li>
              <li>
                <strong>Eau de Parfum (EDP):</strong> Lebih kuat dan tahan lama.
                Bertahan hingga 6–8 jam. Cocok untuk acara formal dan penggunaan malam hari.
              </li>
              <li>
                <strong>Extrait de Parfum:</strong> Memiliki konsentrasi tertinggi,
                bertahan 10–24 jam. Aromanya intens dan mewah.
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
      Sering disebut sebagai <strong>pure perfume</strong> atau <strong>parfum</strong>, 
      ini adalah bentuk wewangian dengan konsentrasi minyak parfum tertinggi, biasanya antara 20% dan 40%. 
      Karena minyak esensialnya yang sangat terkonsentrasi, aromanya terasa lebih dalam, lebih kaya, dan dapat bertahan sangat lama di kulit — bahkan hingga sehari penuh, 
      terkadang selama 24 jam tergantung pada kondisi kulit dan cuaca.
    </p>
    <p className="text-gray-700 text-lg leading-relaxed mt-4">
      Tipe ini tidak memerlukan banyak semprotan karena aromanya sangat intens. 
      Biasanya dipakai untuk momen spesial atau di malam hari, dan memiliki karakter yang <strong>mewah</strong>. 
      Karena konsentrasinya yang tinggi, harganya biasanya paling mahal dibandingkan dengan tipe lainnya.
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
      Eau de Parfum adalah jenis parfum modern yang paling banyak digunakan di pasaran. Konsentrasinya sedikit lebih rendah dibandingkan extrait, sekitar 15% hingga 20%. Aroma ini tetap bertahan lama — sekitar 6 hingga 12 jam — tetapi tidak sekuat extrait.
    </p>
    <p className="text-gray-700 text-lg leading-relaxed mt-4">
      EDP memiliki keseimbangan yang sempurna: aromanya cukup kuat untuk bertahan lama,
      tetapi tidak terlalu menyengat, sehingga nyaman untuk digunakan sehari-hari.
      Tipe ini sering menjadi pilihan favorit karena masih membawa
      nuansa <strong>keanggunan</strong> dan <strong>kemewahan</strong>,
      sambil cukup fleksibel untuk digunakan di berbagai suasana, baik siang maupun malam.
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
      Dibandingkan dengan dua jenis sebelumnya, 
      Eau de Toilette memiliki konsentrasi minyak parfum yang lebih ringan, 
      yaitu sekitar 5% hingga 15%. Karena lebih ringan, aromanya terasa lebih segar dan lebih cepat menguap — 
      biasanya hanya bertahan sekitar 3 hingga 6 jam.
    </p>
    <p className="text-gray-700 text-lg leading-relaxed mt-4">
      EDT sering digunakan untuk wewangian yang cocok untuk dipakai di siang hari,
      cuaca panas, atau saat Anda menginginkan aroma yang tidak terlalu menyengat. Aromanya lebih cerah, lebih ringan,
      dan seringkali mengandung nuansa citrus atau floral yang segar. Harganya juga umumnya lebih <strong>terjangkau</strong>.
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
