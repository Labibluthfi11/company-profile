"use client";

import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaTiktok,
} from "react-icons/fa";
import { PiThreadsLogoBold } from "react-icons/pi"; // Icon Threads

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4 grid md:grid-cols-5 gap-8 text-sm">
        {/* Our Company */}
        <div>
          <h4 className="font-bold mb-4">OUR COMPANY</h4>
          <ul className="space-y-2 text-gray-400">
            <li><a href="/about/who-we-are">Who we are</a></li>
            <li><a href="/about/history">PT Ansel History</a></li>
            <li><a href="/Certification">Certification</a></li>
            <li><a href="/about/location">Where we are</a></li>
            <li><a href="/about/partners">Our Partners</a></li>
          </ul>
        </div>

        {/* What We Offer */}
        <div>
          <h4 className="font-bold mb-4">WHAT WE OFFER</h4>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#">Product</a></li>
            <li><a href="#">Service</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-bold mb-4">GET IN TOUCH</h4>
          <ul className="space-y-2 text-gray-400">
            <li><a href="/Contact">Contact Us</a></li>
          </ul>
        </div>

        {/* Location */}
        <div className="md:col-span-2">
          <h4 className="font-bold mb-4">LOCATION</h4>
          <p className="text-gray-400 leading-relaxed">
            PT. ANSEL MUDA BERKARYA  
            <br />
            RT.002/RW.004, Jatisari, Kec. Jatiasih,  
            <br />
            Kota Bekasi, Jawa Barat 17426
          </p>
        </div>
      </div>

      {/* Logo dan Sosmed */}
      <div className="mt-12 text-center border-t border-white/10 pt-6">
        <div className="flex items-center justify-center space-x-3 mb-4">
          <Image
            src="/images/amb-putih.png"
            alt="Logo AMBA"
            width={40}
            height={40}
            className="object-contain"
          />
          <span className="text-xl font-semibold">PT. Ansel Muda Berkarya</span>
        </div>

        {/* Sosmed Icons */}
        <div className="flex justify-center space-x-4 mb-4 text-white text-lg">
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <FaFacebookF className="hover:text-blue-400 transition" />
          </a>
          <a href="hhttps://www.instagram.com/ansel.mudaberkarya?igsh=MW9uOXo0ZWppZWw3&utm_source=qr" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="hover:text-pink-400 transition" />
          </a>
          <a href="https://x.com/AMB_PT_Ansel" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="hover:text-sky-400 transition" />
          </a>  
          <a href="https://www.tiktok.com/@amb.manufacturing?_t=ZS-8xpBmEyOHnb&_r=1" target="_blank" rel="noopener noreferrer">
            <FaTiktok className="hover:text-gray-300 transition" />
          </a>
          <a href="hhttps://www.threads.com/@ansel.mudaberkarya?igshid=NTc4MTIwNjQ2YQ==" target="_blank" rel="noopener noreferrer">
            <PiThreadsLogoBold className="hover:text-white transition" />
          </a>
        </div>

        <p className="text-gray-400 text-xs">
          © 2025 PT. Ansel Muda Berkarya. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
