'use client';

import React from 'react';
import Link from 'next/link';
import { X as XIcon, Instagram } from 'lucide-react';
import { SiTiktok } from 'react-icons/si';
import { motion } from 'framer-motion';
import { Almarai } from 'next/font/google';

const almarai = Almarai({
  subsets: ['arabic'],
  weight: ['400', '700'],
  display: 'swap',
});

const navigation = {
  main: [
    { name: '0501402723', href: 'tel:0501402723' },
    { name: 'Onstscop1@gmail.com', href: 'mailto:Onstscop1@gmail.com' },
  ],
  social: [
    { name: 'TikTok', href: 'https://www.tiktok.com/@onestscope' },
    { name: 'X', href: 'https://x.com/onstscope' },
    { name: 'Instagram', href: 'https://www.instagram.com/onstscop' },
  ],
};

export default function Footer() {
  return (
    <footer className={`${almarai.className} relative overflow-hidden`}>
      <div className="absolute inset-0 -z-10 bg-gray-900" />
      <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8">

        {/* روابط الاتصال */}
        <nav
          aria-label="Footer"
          className="-mb-6 flex flex-wrap justify-center gap-x-12 gap-y-3 text-sm/6"
        >
          {navigation.main.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-200 hover:text-white transition-colors duration-200"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* أيقونات التواصل الاجتماعي */}
        <div className="mt-20 sm:mt-16 flex items-center justify-center space-x-4">
          {navigation.social.map((item, idx) => {
            const Icon = [SiTiktok, XIcon, Instagram][idx];
            return (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mx-[10px] flex items-center justify-center text-white shadow-lg shadow-black/50 rounded-full sm:p-3 p-2 mt-4 focus:ring-4 focus:outline-none focus:ring-gray-500 hover:opacity-90 transition-opacity duration-200 bg-gradient-to-r from-black via-gray-800 to-gray-900"
              >
                <Icon className="md:w-6 md:h-6 w-5 h-5" />
              </a>
            );
          })}
        </div>

        {/* رابط صفحة سياسة الخصوصية */}
        <div className="mt-10 flex justify-center">
          <Link
            href="/privacy"
            className="text-gray-200 hover:text-white transition-colors duration-200"
          >
            سياسة الخصوصية
          </Link>
        </div>

        {/* حقوق النشر */}
        <motion.p
          className="mt-10 text-center text-sm/6 text-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          © {new Date().getFullYear()} شركة اونست سكوب العقارية. جميع الحقوق محفوظة.
        </motion.p>
      </div>
    </footer>
  );
}
