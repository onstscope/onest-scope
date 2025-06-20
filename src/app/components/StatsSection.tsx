'use client';

import React from 'react';
import { Almarai } from 'next/font/google';

const almarai = Almarai({ subsets: ['arabic'], weight: ['400', '700'], display: 'swap' });

export interface Stat { id: string; name: string; value: string; }

// خريطة لتحويل الأرقام اللاتينية إلى عربية
const arabicIndicMap: Record<string, string> = {
  '0': '٠', '1': '١', '2': '٢', '3': '٣', '4': '٤',
  '5': '٥', '6': '٦', '7': '٧', '8': '٨', '9': '٩'
};

// مكون بطاقة الإحصائية مع دعم الأرقام العربية والتشكيل
function StatCard({ stat }: { stat: Stat }) {
  const raw = stat.value;
  const isLatin = /^[0-9]+$/.test(raw);
  const isArabicIndic = /^[٠-٩]+$/.test(raw);

  let num: number | null = null;
  let displayNum = raw;

  if (isLatin) {
    num = parseInt(raw, 10);
    displayNum = raw.split('').map(d => arabicIndicMap[d] ?? d).join('');
  } else if (isArabicIndic) {
    num = raw
      .split('')
      .map(ch => ch.charCodeAt(0) - 0x0660)
      .reduce((acc, d) => acc * 10 + d, 0);
    displayNum = raw;
  }

  let text: string;
  if (num !== null) {
    // صيغة المفرد للجمع حسب الرقم
    const unit = (num === 1 || stat.id === '3' || stat.id === '4') ? ' دقيقة' : ' دقايق';
    text = displayNum + unit;
  } else {
    text = raw;
  }

  return (
    <div
      className="relative p-4 sm:p-6 rounded-lg overflow-hidden flex flex-col items-center justify-center text-center text-white
                 bg-gradient-to-br from-gray-900 to-gray-800 animate-subtlePulse"
    >
      <div className="relative z-10">
        <span className="block text-4xl sm:text-5xl font-bold mb-1">
          {text}
        </span>
        <span className={`text-lg ${almarai.className}`}>{stat.name}</span>
      </div>
    </div>
  );
}

// المكون الرئيسي لقسم المميزات
export default function StatsSection({ stats }: { stats: Stat[] }) {
  return (
    <section dir="rtl" className={`mt-12 mb-16 ${almarai.className}`}>
      <div className="max-w-5xl mx-auto px-4 lg:px-6 text-center">
        <h3 className="text-3xl font-semibold text-white bg-gray-900 mb-8 p-2 rounded-lg">
          مميزات الموقع
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {stats.map(stat => (
            <StatCard key={stat.id} stat={stat} />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes subtlePulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.02); }
        }
        .animate-subtlePulse {
          animation: subtlePulse 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
