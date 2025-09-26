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
      className="fixed inset-0 flex items-center justify-center z-50"
      style={{
        background:
          "linear-gradient(180deg, #003172 0%, #003D90 16%, #9AC5FF 100%)",
      }}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 px-6">
        {/* Logo hitam */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex-shrink-0"
        >
          <Image
            src="/images/ambputih.png"
            alt="Logo PT. Ansel"
            width={400}
            height={400}
            className="object-contain"
            priority
          />
        </motion.div>

        {/* Teks + Progress bar */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-center md:text-left w-full max-w-md"
        >
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4">
            PT. ANSEL MUDA BERKARYA
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-whit mb-6">
            Your idea our execution
          </p>

          <div className="w-full h-2 bg-white /30 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-yellow-500"
              initial={{ width: 100 }}
              animate={{ width: "100%" }}
              transition={{ duration: 3, ease: "easeInOut" }}
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
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Blue Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#123c70] to-[#0a1a2f] z-0" />

      {/* Main Content Grid */}
      <div className="container mx-auto px-6 relative z-5 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side: Product Image */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex justify-center order-2 lg:order-1"
        >
          <div className="relative w-[500px] h-[300px] sm:w-[800px] sm:h-[750px]">
            <Image
              src="/images/scincer.png"
              alt="Produk kosmetik PT. Ansel Muda Berkarya"
              fill
              className="object-contain"
            />
          </div>
        </motion.div>

        {/* Right Side: Text and Button */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-center lg:text-left text-white order-1 lg:order-2"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase mb-6 leading-tight">
            PT. Ansel Muda Berkarya
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-8 leading-relaxed">
            “Mitra strategis Anda di industri kecantikan. 
            Kami adalah spesialis manufaktur kosmetik yang berkomitmen pada kualitas, 
            keamanan, dan efisiensi di setiap tahap produksi.”
          </p>

          {/* Hubungi Kami Button */}
          <a
            href="https://wa.me/6282114631415"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-black font-semibold py-3 px-5 rounded-full shadow-lg hover:bg-gray-transition duration-300"
          >
            Hubungi Kami
          </a>
        </motion.div>
      </div>
    </section>
  );
}

// About Section
function AboutSection() {
  return (
    <section className="relative w-full h-screen pt-24">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/lab.jpg')" }}
      ></div>

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#004AAD]/15 to-[#123C80]/90"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-end h-full px-5 ">
        <div className="max-w-3xl text-white text-right">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-snug">
            PT. Ansel Muda Berkarya <br /> Adalah mitra strategis Anda di industri kecantikan.
          </h1>
          <p className="text-lg md:text-xl leading-relaxed text-gray-100">
            Kami menggabungkan alam, sains, dan presisi untuk memproduksi produk kosmetik berkualitas tinggi yang mencerminkan keanggunan, keamanan, dan inovasi.
          </p>
        </div>
      </div>
    </section>
  );
}

//  Section
function OperatingHoursSection() {
  return (
    <section className="relative bg-[#0a1a2f] bg-center py-2">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Box kanan */}
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  type ServiceItem = {
    title: string;
    video?: string;
    image?: string;
  };

  const services: ServiceItem[] = [
    {
      title: "Ruang Pengemasan",
      video: "/vidio/Pengemasan.mp4", // pakai video
    },
    {
      title: "Project Development",
      image: "/images/meteng.jpg",
    },
    {
      title: "Lab Kimia Fisika",
      video: "/vidio/labara.mp4",
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
          Kami menyediakan solusi komprehensif dalam pengembangan produk kecantikan: dari
          formulasi dan produksi hingga pengemasan.
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
                {item.video ? (
                  <video
                    src={item.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : item.image ? (
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : null}
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
          Mitra Kami
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
            <div
              key={index}
              className="flex-shrink-0 flex items-center justify-center h-70 w-65"
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
