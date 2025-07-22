"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Mail,
  MapPin,
  Phone,
  Users,
  Target,
  Award,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Footer from "@/components/Footer/Footer";
    

import Navigation from "@/components/Navigation/Navigation";

// Splash Screen Component
function SplashScreen({ onComplete }: { onComplete: () => void }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 3000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 bg-cover bg-center bg-no-repeat flex items-center justify-center z-50"
      style={{ backgroundImage: "url('/images/ansel.jpg')" }}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="text-center mt-10 px-4">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-8"
        >
          <Image
            src="/images/amb.png"
            alt="Logo PT. Ansel"
            width={500}
            height={500}
            className="mx-auto w-[200px] sm:w-[300px] md:w-[400px] lg:w-[500px] object-contain"
            priority
          />
        </motion.div>

        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4"
        >
          PT. Ansel Muda Berkarya
        </motion.h1>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-base sm:text-lg md:text-xl text-blue-100"
        >
          Selamat datang Di Maklon Terbaik Indonesia 
        </motion.p>

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="mt-8"
        >
          <div className="w-16 h-1 bg-white mx-auto rounded-full">
            <motion.div
              className="h-full bg-yellow-700 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 1.5, duration: 1 }}
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}


// Hero Section
function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen bg-[#D7C4A3] bg-cover bg-center bg-no-repeat flex items-center relative pt-24 md:pt-0"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4 leading-tight">
              PT. Ansel Muda Berkarya
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-black mb-6 leading-relaxed">
              Mitra strategis Anda dalam industri kecantikan. Kami adalah spesialis
              manufaktur kosmetik yang berkomitmen pada kualitas, keamanan,
              dan efisiensi dalam setiap proses produksi.
            </p>
          </motion.div>

          <motion.div
  initial={{ x: 100, opacity: 0 }}
  animate={{ x: 0, opacity: 1 }}
  transition={{ duration: 1, delay: 0.4 }}
  className="w-full max-w-md mx-auto"
>
  <div className="relative h-80 sm:h-96">
    <motion.div
      className="absolute inset-0 bg-gradient-to-r from-yellow-700 to-yellow-600 rounded-xloverflow-hidden"
      animate={{ rotate: [0, 5, -5, 0] }}
      transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY }}
    />
    <motion.div
      className="absolute inset-4 bg-white rounded-2xl overflow-hidden" // tambahkan overflow-hidden
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
    >
      <Image
        src="/images/skincare.png"
        alt="Logo AMBA"
        fill  // otomatis akan membuat w-full dan h-full
        className="object-cover" // ubah dari object-contain
      />
    </motion.div>
  </div>
</motion.div>

        </div>
      </div>
    </section>
  );
}

// About Section
function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Gambar kiri */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src="/images/lab-nu.jpg"
              alt="Lab PT Ansel"
              className="rounded-xl w-full h-auto object-cover"
            />
          </motion.div>

          {/* Teks kanan */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              PT. Ansel Muda Berkarya is your strategic partner in the beauty industry.
            </h2>
            <p className="text-lg text-gray-600">
              We combine nature, science, and precision to produce high-quality cosmetic products that reflect elegance, safety, and innovation.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Operating Hours Section
function OperatingHoursSection() {
  return (
    <section
      className="relative bg-[#D7C4A3] bg-center py-16"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Teks kiri */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-black text-2xl font-semibold mb-6 md:mb-0 md:max-w-md"
          >
            <p>Pelayanan Kita Dari Jam 8 Pagi</p>
            <p>Sampai 5 Sore</p>
          </motion.div>

          {/* Box kanan */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl px-6 py-4 shadow-lg flex items-center space-x-4"
          >
            <div className="w-12 h-12 bg-[#D7C4A3] rounded-full flex items-center justify-center">
              <Phone className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-gray-900 font-bold text-lg">
                +62821-2869-4625
              </p>
              <p className="text-gray-500 text-sm">8am to 5pm</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  const services = [
    {
      title: "Ruang Pengemasan",
      image: "/images/filing2.jpg",
    },
    {
      title: "Project Development",
      image: "/images/meeting.jpg",
    },
    {
      title: "Lab Kimia Fisika",
      image: "/images/labun.jpg",
    },
  ];

  return (
    <section className="py-20 px-6 bg-white text-center">
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Layanan Kami</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Kami hadir memberikan solusi menyeluruh dalam pengembangan produk kecantikan: dari formulasi, produksi, hingga pengemasan.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {services.map((item, index) => (
          <motion.div
            key={index}
            className="rounded-xl overflow-hidden shadow-lg cursor-pointer group"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Link href="/Service">
              <div className="relative w-full h-[300px]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition" />
                <div className="absolute bottom-4 left-4 text-left text-white z-10">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// Brands Section
function BrandsPartnersSection() {
  const brands = [
    { src: "/brands/elvicto.png", alt: "Elvicto" },
    { src: "/brands/ganzi-x.png", alt: "Ganzi X", skipScale: true },
    { src: "/brands/heylocal.png", alt: "Heylocal" },
    { src: "/brands/naisday.png", alt: "Naisday" },
    { src: "/brands/onix.png", alt: "Onix" },
  ];

  return (
    <section id="brands" className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 text-center mb-10">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Our Brand Partners
        </h2>
      </div>

      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex space-x-16 animate-marquee whitespace-nowrap"
          initial={{ x: "100%" }}
          animate={{ x: "-100%" }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear",
          }}
        >
                        {brands.map((brand, index) => (
                <div key={index} className="flex-shrink-0 flex items-center justify-center h-70 w-65"
>
                  <img
                    src={brand.src}
                    alt={brand.alt}
                    className="h-full w-full object-contain"
                  />
                </div>
              ))}


        </motion.div>
      </div>
    </section>
  );
}



// Main Component
export default function Component() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <div className="min-h-screen">
      <AnimatePresence>
        {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}
      </AnimatePresence>

      {!showSplash && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Navigation />
          <HeroSection />
          <AboutSection />
          <OperatingHoursSection />
          <ServicesSection />
          <BrandsPartnersSection />
          <Footer />
        </motion.div>
      )}
    </div>
  );
}
