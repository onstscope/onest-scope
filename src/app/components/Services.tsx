'use client';

import React from 'react';
import Image from 'next/image';
import { CheckCircleIcon } from '@heroicons/react/20/solid';
import { Almarai } from 'next/font/google';
import { motion } from 'framer-motion';

const almarai = Almarai({
  subsets: ['arabic'],
  weight: ['400', '700'],
  display: 'swap',
});

interface Service {
  title: string;
  desc: string;
}

const services: Service[] = [
  {
    title: 'بيع الوحدات السكنية',
    desc: 'شقق بمساحات متنوعة 2-4 غرف، تشطيب عصري ومرافق متكاملة.',
  },
  {
    title: 'ضمانات كاملة',
    desc: 'ضمانات بنائية وصيانة لضمان راحة العميل.',
  },
  {
    title: 'بنية تحتية حديثة',
    desc: 'خدمات مياه وكهرباء واتصالات متقدمة.',
  },
  {
    title: 'موقع استراتيجي وخدمات متكاملة',
    desc: 'قرب المسار الرياضي، المطار، القناة المائية، وطريق الأمير محمد بن سلمان.',
  },
];

export default function ServicesExample() {
  return (
    <section id="services" className="relative bg-gray-50 py-20" dir="ltr">
      {/* صور مصغرة للأجهزة الصغيرة */}
      <div className="flex xl:hidden justify-center mb-8">
        <div className="flex -space-x-6">
          <div className="w-20 h-20 rounded-full border-2 border-white shadow-md overflow-hidden relative">
            <Image
              src="/img/img1.webp"
              alt="خدماتنا 1"
              fill
              sizes="(max-width: 640px) 80px, 80px"
              quality={75}
              className="object-cover object-center"
              loading="lazy"
            />
          </div>
          <div className="w-24 h-24 rounded-full border-2 border-white shadow-md overflow-hidden relative">
            <Image
              src="/img/img2.webp"
              alt="خدماتنا 2"
              fill
              sizes="(max-width: 640px) 96px, 96px"
              quality={75}
              className="object-cover object-center"
              loading="lazy"
            />
          </div>
          <div className="w-28 h-28 rounded-full border-2 border-white shadow-md overflow-hidden relative">
            <Image
              src="/img/img3.webp"
              alt="خدماتنا 3"
              fill
              sizes="(max-width: 640px) 112px, 112px"
              quality={75}
              className="object-cover object-center"
              loading="lazy"
            />
          </div>
          <div className="w-32 h-32 rounded-full border-2 border-white shadow-md overflow-hidden relative">
            <Image
              src="/img/img4.webp"
              alt="خدماتنا 4"
              fill
              sizes="(max-width: 640px) 128px, 128px"
              quality={75}
              className="object-cover object-center"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* صور كبيرة متداخلة للأجهزة الكبيرة */}
      <div className="hidden xl:flex absolute right-0 top-1/2 transform -translate-y-1/2 pr-8">
        <div className="flex -space-x-12">
          <div className="w-40 h-40 rounded-full border-4 border-white shadow-lg overflow-hidden relative">
            <Image
              src="/img/img1.webp"
              alt="خدماتنا 1"
              fill
              sizes="(min-width: 1280px) 160px, 100vw"
              quality={75}
              className="object-cover object-center"
              loading="lazy"
            />
          </div>
          <div className="w-48 h-48 rounded-full border-4 border-white shadow-lg overflow-hidden relative -ml-12">
            <Image
              src="/img/img2.webp"
              alt="خدماتنا 2"
              fill
              sizes="(min-width: 1280px) 192px, 100vw"
              quality={75}
              className="object-cover object-center"
              loading="lazy"
            />
          </div>
          <div className="w-56 h-56 rounded-full border-4 border-white shadow-lg overflow-hidden relative -ml-12">
            <Image
              src="/img/img3.webp"
              alt="خدماتنا 3"
              fill
              sizes="(min-width: 1280px) 224px, 100vw"
              quality={75}
              className="object-cover object-center"
              loading="lazy"
            />
          </div>
          <div className="w-64 h-64 rounded-full border-4 border-white shadow-lg overflow-hidden relative -ml-12">
            <Image
              src="/img/img4.webp"
              alt="خدماتنا 4"
              fill
              sizes="(min-width: 1280px) 256px, 100vw"
              quality={75}
              className="object-cover object-center"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* المحتوى النصي */}
      <div className="max-w-7xl mx-auto flex flex-col xl:flex-row items-center xl:gap-20">
        {/* عمود النص */}
        <div dir="rtl" className="w-full xl:w-1/2 px-6 xl:px-8">
          <h2 className={`text-4xl xl:text-5xl font-bold text-gray-900 ${almarai.className} text-right`}>خدماتنا</h2>
          <div className="mt-2 flex justify-start">
            <motion.svg className="w-40 h-6" viewBox="0 0 120 20" fill="none">
              <motion.path
                d="M5 10 C 25 20, 45 0, 65 10 S 105 20, 115 10"
                stroke="#FBBF24"
                strokeWidth="4"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
              />
            </motion.svg>
          </div>
          <p className={`${almarai.className} mt-4 text-lg text-gray-600 leading-relaxed text-right`}>نقدم لك أفضل خيارات بيع الوحدات السكنية مع:</p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {services.map((service) => (
              <div key={service.title} className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-shadow">
                <CheckCircleIcon className="h-8 w-8 text-yellow-500 flex-none" />
                <div className="space-y-1 text-right">
                  <h3 className={`text-xl font-semibold text-gray-800 ${almarai.className}`}>{service.title}</h3>
                  <p className={`${almarai.className} text-gray-500 text-sm`}>{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
