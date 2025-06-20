'use client';

import React from 'react';
import { Almarai } from 'next/font/google';
import { motion } from 'framer-motion';

const almarai = Almarai({ subsets: ['arabic'], weight: ['400','700'], display: 'swap' });

export default function PrivacyPage() {
  return (
    <main className={`${almarai.className} relative bg-gray-900`}>
      <div className="absolute inset-0 -z-10 bg-gray-900" />
      <div className="container mx-auto px-6 pt-20 pb-0">
        <motion.div
          className="mx-auto bg-gray-800/70 backdrop-blur-sm rounded-lg p-8 max-w-3xl text-center text-gray-200"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h1
            className="text-2xl font-bold mb-4"
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            سياسة الخصوصية
          </motion.h1>
          <motion.div
            className="prose prose-invert max-w-none leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <p>
              نحن نحترم خصوصيتكم ونلتزم بحماية معلوماتكم. نجمع فقط البيانات الضرورية لتحسين خدماتنا،
              ولا نشاركها مع أي طرف ثالث إلا للالتزام بالقوانين. يمكنكم طلب حذف بياناتكم أو تعديلها في أي وقت من خلال التواصل معنا عبر{' '}
              <a href="mailto:Onstscop1@gmail.com" className="underline">Onstscop1@gmail.com</a>.
            </p>
            <p>
              تُخزن المعلومات على خوادم آمنة ونستخدم تشفير HTTPS لحماية النقل. للمزيد من التفاصيل، تواصلوا معنا في أي وقت.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}
