"use client";

import Navigation from "@/components/Navigation/Navigation";
import Footer from "@/components/Footer/Footer";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function SkincarePage() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="relative">
        <div className="relative h-[60vh] w-full">
          <Image
            src="/images/beauty.jpeg"
            alt="Skincare Product"
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
            Temukan Koleksi Perawatan Kulit Premium Kami
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
            Skincare untuk Kulit Sehat & Bersinar
          </h2>
          <p className="text-lg text-gray-600 mb-16 text-center">
            Rangkaian produk perawatan kulit yang diformulasikan dengan teknologi canggih, konsep yang menarik,
            dan bahan berkualitas tinggi yang unik. Dijamin aman dan terbukti efektif, memberikan manfaat sesuai dengan
            standar pengujian ilmiah terbaru.
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
              src="/images/eau de.png"
              alt="Skincare Product Detail"
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
              Rangkaian Perawatan Wajah Lengkap
            </h3>
            <p className="text-gray-600 mb-6">
              Dari pembersih wajah dan serum hingga tabir surya — semua tersedia dalam satu koleksi premium.
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>
                <strong>Cleansing:</strong> Face Wash, Cleansing Oil, Micellar
                Water
              </li>
              <li>
                <strong>Facial Care:</strong> Lotion, Essence, Toner, Serum,
                Moisturizer
              </li>
              <li>
                <strong>Sun Protection:</strong> Sunscreen & Sun Gel
              </li>
              <li>
                <strong>Body Care:</strong> Body Lotion, Hand Cream
              </li>
            </ul>
          </motion.div>
        </div>

      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
