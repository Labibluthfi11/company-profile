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
            Exclusive Perfumes with Distinct Character and Long-Lasting Performance
          </h2>
          <p className="text-lg text-gray-600 mb-16 text-center">
            Our fragrance collection is designed with a diverse aroma concentration, ranging from light and refreshing to intense and long-lasting. 
            Find the type of perfume that suits your personality and lifestyle.
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
              Categories of Perfume by Concentration
            </h3>
            <p className="text-gray-600 mb-6">
              The difference in perfumes lies in the concentration of aromatic oils.
              The higher the concentration, the stronger and longer the fragrance
              lasts.
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>
                <strong>Eau de Toilette (EDT):</strong> Light and
                refreshing. Lasts about 3–5 hours. Suitable for daytime use.
                siang hari.
              </li>
              <li>
                <strong>Eau de Parfum (EDP):</strong> Stronger and longer-lasting.
                Lasts up to 6–8 hours. Suitable for formal events and evening wear.
              </li>
              <li>
                <strong>Extrait de Parfum:</strong> Has the highest concentration, 
                lasting 10–24 hours. Its scent is intense and luxurious.
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
      Often referred to as <strong>pure perfume</strong> or simply <strong>parfum</strong>, 
      this is the form of fragrance with the highest concentration of perfume oils, usually between 20% and 40%. 
      Due to its highly concentrated essential oils, the scent feels deeper, richer, and can last very long on the skin — even up to a full day, 
      sometimes as long as 24 hours depending on skin condition and weather.
    </p>
    <p className="text-gray-700 text-lg leading-relaxed mt-4">
      This type does not require a lot of sprays because its aroma is very intense. 
      It is usually worn for special moments or at night, and has a <strong>luxurious</strong> character. 
      Because of its high concentration, the price is usually the most expensive compared to other types.
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
      Eau de Parfum is the most widely used type of modern perfume available in the market. Its concentration is slightly lower than extrait, around 15% to 20%. The scent still lasts long — about 6 to 12 hours — but is not as strong as extrait.
    </p>
    <p className="text-gray-700 text-lg leading-relaxed mt-4">
      EDP has the perfect balance: its aroma is strong enough to last long,
      but not too overpowering, making it comfortable for everyday use.
      This type is often the favorite choice because it still carries 
      an air of <strong>elegance</strong> and <strong>luxury</strong>, 
      while being flexible enough to wear in various settings, both day and night.
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
      Compared to the previous two types, Eau de Toilette has a lighter perfume oil concentration, 
      around 5% to 15%. Because it is lighter, the scent is fresher and evaporates more quickly — 
      usually lasting only about 3 to 6 hours.
    </p>
    <p className="text-gray-700 text-lg leading-relaxed mt-4">
      EDT is often used for fragrances that are suitable for daytime wear,
      hot weather, or when you want a scent that is not too overpowering. Its aroma is brighter, lighter, 
      and often carries fresh citrus or floral notes. It is also generally more <strong>affordable</strong> in price.
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
