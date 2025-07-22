"use client";

import Navigation from "@/components/Navigation/Navigation";
import Footer from "@/components/Footer/Footer";
import { motion } from "framer-motion";

export default function WhoWeArePage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero section atas dengan animasi */}
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
            SIAPA KAMI ?
          </motion.h1>
          <motion.p
            className="text-black text-lg max-w-3xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            PT. Ansel Muda Berkarya adalah industri kreativitas tanpa batas
            terutama di bidang wangi-wangian. Kami memiliki layanan dalam bidang
            produksi dan pengembangan produk kreatif, otentik dan unik dengan
            penggunaan bahan baku alami di Indonesia.
          </motion.p>
        </motion.div>
      </section>

      {/* Section tambahan: Perjalanan Kami */}
      <section className="py-20 px-6 bg-gray-50 text-gray-800">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* Gambar kiri */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src="/images/lab-nu.jpg"
              alt="Lab Ansel"
              className="w-full h-auto rounded-xl shadow-lg object-cover"
            />
          </motion.div>

          {/* Konten kanan */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-snug">
              Perjalanan Kami Berawal dari Ide Sederhana
            </h2>
            <p className="mb-4 text-gray-700">
              menjadi mitra terpercaya bagi merek-merek yang bermimpi
              meluncurkan produk kosmetik berkualitas tinggi tanpa perlu
              membangun pabrik atau mengelola proses produksi yang rumit. PT.
              Ansel Muda Berkarya didirikan dengan misi yang jelas — menyediakan
              solusi manufaktur kosmetik menyeluruh yang tidak hanya efisien,
              tetapi juga menjunjung tinggi standar keamanan, kreativitas, dan
              keunggulan.
            </p>
            <p className="text-gray-700">
              Kami percaya bahwa setiap merek memiliki kisah yang unik, dan
              peran kami adalah mewujudkan kisah tersebut melalui produk-produk
              yang dibuat khusus seperti sampo, sabun mandi, toner, parfum, dan
              masih banyak lagi. Dengan memadukan teknologi manufaktur modern
              dengan pemahaman mendalam tentang pasar kecantikan, kami
              memastikan setiap formula yang kami hasilkan selaras dengan
              nilai-nilai merek Anda dan harapan pelanggan Anda.
            </p>

            {/* Statistik */}
            <div className="mt-8 grid grid-cols-2 gap-6">
              <div>
                <h3 className="text-4xl font-bold text-black-600">1</h3>
                <p className="text-sm text-gray-600 mt-1">Years in Business</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-black-600">3k+</h3>
                <p className="text-sm text-gray-600 mt-1">Clients Served</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section: Visi dan Misi */}
      <section className="py-20 px-6 bg-white text-gray-800">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* Gambar Logo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src="/images/cihuy.png"
              alt="Logo Ansel"
              className="w-full max-w-xs mx-auto h-auto object-contain"
            />
          </motion.div>

          {/* Visi dan Misi */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black-700 leading-snug">
              Visi & Misi
            </h2>

            {/* Visi */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">VISI</h3>
              <p className="text-gray-600">
                Menciptakan industri kreatifitas tanpa batas terutama di bidang
                wangi-wangian
              </p>
            </div>

            {/* Misi */}
            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">MISI</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>Penggunaan bahan baku alami Indonesia</li>
                <li>
                  Mengedukasi dan mengadvokasi customer dalam berkreasi di
                  bidang wangi-wangian
                </li>
                <li>
                  Menciptakan pemasaran global tanpa batas dan/atau limitasi
                </li>
                <li>
                  Menjaga keberlangsungan lingkungan mulai dari development
                  dalam upaya keberlangsungan lingkungan di masa depan
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section: Sister Collaboration */}
      <section className="py-20 px-6 bg-white text-gray-800">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* Gambar kolaborasi */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src="/images/collab.jpg"
              alt="Sister Collaboration"
              className="w-full h-auto rounded-xl shadow-md object-cover"
            />
          </motion.div>

          {/* Deskripsi Kolaborasi */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black leading-snug">
              Sister Collaboration
            </h2>

            <p className="mb-4 text-gray-700 leading-relaxed">
              <strong>PT. Ansel Muda Berkarya</strong> merupakan bagian dari{" "}
              <strong>Sister Collaboration</strong> bersama{" "}
              <strong>PT.Followme Indonesia</strong> dan{" "}
              <strong>PT.Indonesia Premium Goods Group</strong>,sebagai pemimpin
              global di bidang kosmetika dan wangi-wangian. Kami adalah tiga
              entitas yang bersinergi untuk menghadirkan solusi inovatif di
              industri kosmetika dan wangi-wangian. Kolaborasi ini lahir dari
              semangat bersama untuk mengembangkan industri yang berkelanjutan,
              kreatif, dan berstandar .
            </p>

            <p className="text-gray-700 leading-relaxed">
              Melalui kemitraan strategis ini, kami berkomitmen untuk
              
              menyediakan produk dan layanan terbaik, memadukan keunggulan
              teknologi, kreativitas lokal, serta nilai-nilai keberlanjutan yang
              mendalam. Bersama, kami melangkah lebih jauh untuk memenuhi
              kebutuhan pasar local dan Internasional, sambil tetap menjunjung
              tinggi integritas, kualitas, dan keberagaman budaya.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
