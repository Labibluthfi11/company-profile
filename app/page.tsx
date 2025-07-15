"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
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
          Selamat Datang di Maklon Terbaik Di Bumi
        </motion.p>

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="mt-8"
        >
          <div className="w-16 h-1 bg-white mx-auto rounded-full">
            <motion.div
              className="h-full bg-yellow-400 rounded-full"
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
      className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center relative pt-24 md:pt-0"
      style={{ backgroundImage: "url('/images/ansel.jpg')" }}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              PT. Ansel Muda Berkarya
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white mb-6 leading-relaxed">
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
                className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-3xl"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY }}
              />
              <motion.div
                className="absolute inset-4 bg-white rounded-2xl flex flex-col items-center justify-center text-center px-4"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
              >
                <Image
                  src="/images/cihuy.png"
                  alt="Logo AMBA"
                  width={100}
                  height={100}
                  className="mb-2 object-contain"
                />
                <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                  PT. Ansel Muda Berkarya
                </h3>
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
              src="/images/lab.jpg"
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
      className="relative bg-cover bg-center py-16"
      style={{ backgroundImage: "url('/images/botol.jpg')" }}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Teks kiri */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-white text-2xl font-semibold mb-6 md:mb-0 md:max-w-md"
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
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
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

// Services Section
function ServicesSection() {
  const services = [
    {
      title: "Web Development",
      desc: "Modern, responsive websites built with cutting-edge technology.",
    },
    {
      title: "Mobile Apps",
      desc: "Native and cross-platform mobile applications for iOS and Android.",
    },
    {
      title: "Cloud Solutions",
      desc: "Scalable cloud infrastructure and deployment solutions.",
    },
    {
      title: "AI Integration",
      desc: "Artificial intelligence solutions to automate and optimize processes.",
    },
    {
      title: "Digital Marketing",
      desc: "Comprehensive digital marketing strategies to grow your business.",
    },
    {
      title: "Consulting",
      desc: "Expert consultation to guide your digital transformation journey.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive solutions tailored to meet your unique
            business needs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 bg-white">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg mb-6"></div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
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
