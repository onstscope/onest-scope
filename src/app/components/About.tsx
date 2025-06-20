// src/app/components/About.tsx
'use client';

import React from 'react';
import Image from 'next/image';
import { Almarai } from 'next/font/google';
import { motion } from 'framer-motion';
import {
  DeviceTabletIcon,
  ChartBarIcon,
  UserGroupIcon,
  CurrencyDollarIcon,
} from '@heroicons/react/24/outline';

const almarai = Almarai({
  subsets: ['arabic'],
  weight: ['400', '700'],
  display: 'swap',
});

export default function About() {
  const imageUrl = '/img/img2.webp';

  return (
    <section id="about" className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center gap-12">
        {/* ====== الجزء الأيسر: نص ومزايا ====== */}
        <div className="w-full lg:w-1/2">
          <div className="inline-block">
            <h2 className={`text-4xl lg:text-5xl font-bold text-gray-900 ${almarai.className}`}>
              من نحن
            </h2>
            <div className="mt-2">
              <motion.svg
                className="w-32 h-6"
                viewBox="0 0 120 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <motion.path
                  d="M5 10 C 25 20, 45 0, 65 10 S 105 20, 115 10"
                  stroke="#FBBF24"
                  strokeWidth={4}
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: 'reverse',
                    ease: 'easeInOut',
                  }}
                />
              </motion.svg>
            </div>
          </div>

          <p className={`${almarai.className} mt-4 text-lg text-gray-600 leading-relaxed`}>
            هي شركة متخصصة في بيع الوحدات الجاهزة عالية الجودة. نوفر لعملائنا وحدات سكنية وتجارية
            جاهزة للتسليم الفوري، مصممة بأحدث المعايير الهندسية والمعمارية. نحرص على تقديم حلول سريعة
            وموثوقة تناسب مختلف الاحتياجات، مع التركيز على الراحة والمتانة والتكلفة المنافسة.
          </p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* بطاقة 1 */}
            <div className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-shadow">
              <DeviceTabletIcon className="h-8 w-8 text-yellow-500 flex-none" />
              <div>
                <h3 className={`text-xl font-semibold text-gray-800 ${almarai.className}`}>
                  تسليم فوري
                </h3>
                <p className={`${almarai.className} mt-1 text-gray-500 text-sm`}>
                  جميع الوحدات جاهزة ومخزنة، ويتم تسليمها خلال الأيام المحددة دون تأخير.
                </p>
              </div>
            </div>

            {/* بطاقة 2 */}
            <div className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-shadow">
              <ChartBarIcon className="h-8 w-8 text-yellow-500 flex-none" />
              <div>
                <h3 className={`text-xl font-semibold text-gray-800 ${almarai.className}`}>
                  جودة عالية
                </h3>
                <p className={`${almarai.className} mt-1 text-gray-500 text-sm`}>
                  تصنع وحداتنا بمواصفات هندسية صارمة ومواد بناء مقاومة، لضمان متانة طويلة الأمد.
                </p>
              </div>
            </div>

            {/* بطاقة 3 */}
            <div className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-shadow">
              <UserGroupIcon className="h-8 w-8 text-yellow-500 flex-none" />
              <div>
                <h3 className={`text-xl font-semibold text-gray-800 ${almarai.className}`}>
                  دعم ما بعد البيع
                </h3>
                <p className={`${almarai.className} mt-1 text-gray-500 text-sm`}>
                  نقدم خدمة صيانة وضمان للوحدات بعد التسليم لضمان رضى العميل الكامل.
                </p>
              </div>
            </div>

            {/* بطاقة 4 */}
            <div className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-shadow">
              <CurrencyDollarIcon className="h-8 w-8 text-yellow-500 flex-none" />
              <div>
                <h3 className={`text-xl font-semibold text-gray-800 ${almarai.className}`}>
                  أسعار تنافسية
                </h3>
                <p className={`${almarai.className} mt-1 text-gray-500 text-sm`}>
                  نوفر حلول وحدات جاهزة تناسب جميع الميزانيات، مع المحافظة على أفضل معايير الجودة.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ====== الجزء الأيمن: صورة دائرية محسنة للـ LCP ====== */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64">
            <Image
              src={imageUrl}
              alt="وحدات جاهزة"
              fill
              className="rounded-full object-cover object-center shadow-xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
