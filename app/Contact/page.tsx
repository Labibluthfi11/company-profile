"use client";

import Navigation from "@/components/Navigation/Navigation";
import Footer from "@/components/Footer/Footer";
import { motion } from "framer-motion";
import { PhoneIcon, MapPinIcon } from "@heroicons/react/24/solid";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactPage() {
  const form = useRef<HTMLFormElement>(null);
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm("service_fzc176m", "template_s1lwv6v", form.current, "AY-qaS9DqXLc43WWH")
      .then(
        () => {
          setIsSent(true);
          form.current?.reset();
          alert("Message sent successfully!");
        },
        (error) => {
          console.error("FAILED...", error);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero section atas */}
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
            Contact
          </motion.h1>
        </motion.div>
      </section>

      {/* Section Pelayanan */}
      <section className="py-20 px-6 bg-white text-gray-800">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Info Pelayanan */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              Our team is available for your beauty solutions
            </h2>
            <p className="text-gray-600 mb-8">
              PT. Ansel Muda Berkarya is your trusted private label
              manufacturing partner in the cosmetics and fragrance industry. We
              are ready to support you from ideation to production, delivering
              high-quality products with a distinctive Indonesian touch.
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
              {/* WhatsApp */}
              <div className="flex items-center gap-3">
                <a
                  href="https://wa.me/qr/LKLDZXXHP526F1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white-600 hover:bg-blue-700 text-black p-3 rounded-lg transition"
                >
                  <PhoneIcon className="w-6 h-6" />
                </a>
                <div>
                  <p className="font-semibold">+62 821-2869-4625</p>
                  <p className="text-sm text-gray-500">
                    Available from 8:00 AM to 5:00 PM
                  </p>
                </div>
              </div>

              {/* Alamat */}
              <div className="flex items-center gap-3">
                <a
                  href="https://maps.app.goo.gl/cUDa2bCJvTLFKLBn7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white-600 hover:bg-blue-700 text-black p-3 rounded-lg transition"
                >
                  <MapPinIcon className="w-6 h-6" />
                </a>
                <a
                  href="https://maps.app.goo.gl/cUDa2bCJvTLFKLBn7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <p className="font-semibold hover:underline">Bekasi, Jawa Barat</p>
                  <p className="text-sm text-gray-500">Indonesia</p>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Foto */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src="/images/Mba-ara.jpg"
              alt="Customer Service Ansel"
              className="w-100 h-100 object-cover rounded-xl mx-auto"
            />
          </motion.div>
        </div>
      </section>
{/* Contact Form */}
<section className="bg-gray-50 py-20 px-6 text-center">
  <motion.div
    className="max-w-xl mx-auto"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
  >
    <h2 className="text-3xl text-black font-bold mb-4">Contact form</h2>
    <p className="text-gray-600 mb-8">
      Contact us today to schedule a consultation and experience the difference that
      passion, creativity, and expertise can make in your beauty and fragrance journey.
    </p>

    <motion.form
      ref={form}
      onSubmit={sendEmail}
      className="space-y-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Name */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <input
            type="text"
            name="name"
            required
            placeholder=" "
            className="w-full p-3 pt-6 border border-gray-300 rounded-lg text-black placeholder-transparent focus:outline-none focus:border-black peer"
          />
          <label
            htmlFor="name"
            className="absolute left-3 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-3 peer-focus:text-sm peer-focus:text-black"
          >
            Name
          </label>
        </motion.div>

        {/* Email */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <input
            type="email"
            name="email"
            required
            placeholder=" "
            className="w-full p-3 pt-6 border border-gray-300 rounded-lg text-black placeholder-transparent focus:outline-none focus:border-black peer"
          />
          <label
            htmlFor="email"
            className="absolute left-3 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-3 peer-focus:text-sm peer-focus:text-black"
          >
            Email
          </label>
        </motion.div>
      </div>

      {/* Message */}
      <motion.div
        className="relative mt-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <textarea
          name="message"
          rows={5}
          required
          placeholder=" "
          className="w-full p-3 pt-6 border border-gray-300 rounded-lg text-black placeholder-transparent focus:outline-none focus:border-black peer"
        />
        <label
          htmlFor="message"
          className="absolute left-3 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-3 peer-focus:text-sm peer-focus:text-black"
        >
          Message
        </label>
      </motion.div>

      {/* Button */}
      <motion.button
        type="submit"
        className="bg-black text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Send message
      </motion.button>
    </motion.form>
  </motion.div>
</section>

{/* Lokasi Kami */}
<section className="py-20 px-4 bg-white">
  <div className="max-w-6xl mx-auto text-black text-center">
    <motion.h3
      className="text-2xl font-semibold mb-6"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      Lokasi Kami
    </motion.h3>

    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="rounded-xl overflow-hidden shadow-xl border border-gray-200"
    >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.4497131814937!2d106.94316567499128!3d-6.335745393653896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e699300022c735f%3A0x1791bb0f6a0448d4!2sPT%20ANSEL%20MUDA%20BERKARYA!5e0!3m2!1sid!2sid!4v1752631383928!5m2!1sid!2sid"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </motion.div>
  </div>
</section>


      <Footer />
    </div>
  );
}
