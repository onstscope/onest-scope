// src/app/components/RealEstateGallery.tsx
'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Almarai } from 'next/font/google';
import { X, ChevronLeft, ChevronRight, CheckCircle } from 'lucide-react';
import StatsSection, { Stat } from './StatsSection';

const almarai = Almarai({
  subsets: ['arabic'],
  weight: ['400', '700'],
  display: 'swap',
});

interface Listing {
  id: string;
  title: string;
  coverImageUrl: string;
  imageUrls: string[];
  location: string;
  features: string[];
}

const listings: Listing[] = [
  {
    id: '1',
    title: 'دور أرضي مدخلين',
    coverImageUrl: '/img/imgdown/imgdowntitle.webp',
    imageUrls: [
      '/img/imgdown/imgdown10.webp',
      '/img/imgdown/imgdown1.webp',
      '/img/imgdown/imgdown2.webp',
      '/img/imgdown/imgdown3.webp',
      '/img/imgdown/imgdown4.webp',
      '/img/imgdown/imgdown5.webp',
      '/img/imgdown/imgdown6.webp',
      '/img/imgdown/imgdown7.webp',
      '/img/imgdown/imgdown8.webp',
      '/img/imgdown/imgdown9.webp',
    ],
    location: 'الرياض، حي الرمال',
    features: [
      'مجلس رجال',
      'صالة نساء',
      'مطبخ ومسودع',
      'غرفة عادية',
      'غرفتين دبل ماستر',
      '3 دورات مياه',
    ],
  },
  {
    id: '2',
    title: 'دور أول كامل',
    coverImageUrl: '/img/imgup1/imguptitle.webp',
    imageUrls: [
      '/img/imgup1/imgup1.webp',
      '/img/imgup1/imgup2.webp',
      '/img/imgup1/imgup3.webp',
      '/img/imgup1/imgup4.webp',
      '/img/imgup1/imgup5.webp',
      '/img/imgup1/imgup6.webp',
      '/img/imgup1/imgup7.webp',
      '/img/imgup1/imgup8.webp',
      '/img/imgup1/imgup9.webp',
      '/img/imgup1/imgup10.webp',
      '/img/imgup1/imgup11.webp',
    ],
    location: 'الرياض، حي الرمال',
    features: [
      'مجلس رجال',
      'صالة نساء',
      'مطبخ',
      'غرفتين نوم',
      'غرفتين دبل ماستر',
      '2 دورات مياه',
    ],
  },
  {
    id: '3',
    title: 'شقة دور علوي',
    coverImageUrl: '/img/imgupvip/imgupviptitle.webp',
    imageUrls: [
      '/img/imgupvip/imgvip1.webp',
      '/img/imgupvip/imgvip2.webp',
      '/img/imgupvip/imgvip3.webp',
      '/img/imgupvip/imgvip4.webp',
      '/img/imgupvip/imgvip5.webp',
      '/img/imgupvip/imgvip6.webp',
      '/img/imgupvip/imgvip7.webp',
    ],
    location: 'الرياض، حي الرمال',
    features: [
      'مجلس رجال',
      'صالة نساء',
      'مطبخ',
      'غرفتين دبل ماستر',
      '2 دورات مياه',
    ],
  },
];

const stats: Stat[] = [
  { id: '1', name: 'طريق الأمير محمد بن سلمان', value: 'دقيقتان' },
  { id: '2', name: 'المسار الرياضي', value: '4 دقائق' },
  { id: '3', name: 'محطة مترو الرياض', value: '15 دقيقة' },
  { id: '4', name: 'المطار', value: '19 دقيقة' },
];

function PropertyCard({ item }: { item: Listing }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);

  const openModal = (i: number) => {
    setModalIndex(i);
    setIsModalOpen(true);
  };
  const closeModal = () => setIsModalOpen(false);
  const showPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setModalIndex((p) => (p - 1 + item.imageUrls.length) % item.imageUrls.length);
  };
  const showNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setModalIndex((p) => (p + 1) % item.imageUrls.length);
  };

  return (
    <>
      <motion.div
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
        className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg overflow-hidden flex flex-col"
      >
        <div className="relative w-full h-64 cursor-pointer" onClick={() => openModal(0)}>
          <Image
            src={item.coverImageUrl}
            alt={`${item.title} - غلاف`}
            fill
            loading="lazy"
            sizes="(min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover object-top rounded-t-2xl"
          />
        </div>
        <div className="flex flex-row-reverse overflow-x-auto p-4 space-x-2 space-x-reverse">
          {item.imageUrls.map((url, idx) => (
            <div
              key={idx}
              className="relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden border border-gray-200 cursor-pointer"
              onClick={() => openModal(idx)}
            >
              <Image
                src={url}
                alt={`${item.title} - صورة ${idx + 1}`}
                fill
                loading="lazy"
                sizes="80px"
                className="object-cover"
              />
            </div>
          ))}
        </div>
        <div className="px-6 pb-6 flex-1 flex flex-col">
          <h3 className={`text-lg font-semibold text-gray-800 ${almarai.className}`}>{item.title}</h3>
          <p className={`text-sm text-gray-600 ${almarai.className}`}>{item.location}</p>
          <div className="flex flex-wrap gap-2 mt-auto">
            {item.features.map((feat, i) => (
              <span
                key={i}
                className="inline-flex items-center bg-gradient-to-br from-gray-900/60 to-gray-900/30 text-white px-3 py-1 rounded-full text-xs"
              >
                <CheckCircle className="w-4 h-4 ml-1" />
                {feat}
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-3xl max-h-[90vh] p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={item.imageUrls[modalIndex]}
                alt={`${item.title} - مكبرة`}
                width={800}
                height={600}
                className="object-contain rounded-lg mx-auto max-h-[80vh]"
              />
              <button
                onClick={showPrev}
                className="absolute top-1/2 left-4 -translate-y-1/2 p-2 bg-white bg-opacity-70 rounded-full hover:bg-opacity-100"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={showNext}
                className="absolute top-1/2 right-4 -translate-y-1/2 p-2 bg-white bg-opacity-70 rounded-full hover:bg-opacity-100"
              >
                <ChevronRight size={24} />
              </button>
              <X
                onClick={closeModal}
                className="absolute top-4 right-4 w-8 h-8 text-white cursor-pointer"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default function RealEstateGallery() {
  return (
    <section id="projects" dir="rtl" className={`bg-gray-50 py-20 ${almarai.className}`}>
      <div className="container mx-auto px-6 lg:px-8 text-center mb-12">
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">مشاريعنا</h2>
        <motion.svg viewBox="0 0 120 20" className="w-40 h-6 mx-auto mt-4" fill="none">
          <motion.path
            d="M5 10 C25 20,45 0,65 10 S105 20,115 10"
            stroke="#FBBF24"
            strokeWidth={4}
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
          />
        </motion.svg>
        <p className="mt-3 text-gray-700 max-w-xl mx-auto italic">
          موقعنا في حي الرمال استراتيجي جدًا؛ قريب من المسار الرياضي والمطار وطريق الأمير محمد بن سلمان.
        </p>
      </div>

      <StatsSection stats={stats} />

      <div className="mt-16 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-6 lg:px-8">
        {listings.map((item) => (
          <PropertyCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
