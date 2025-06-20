'use client';

import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Almarai } from 'next/font/google';
import { Phone, Send } from 'lucide-react';

const almarai = Almarai({
  subsets: ['arabic'],
  weight: ['400', '700'],
  display: 'swap',
});

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const submitForm = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('https://formspree.io/f/mrbkapdw', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error('Failed to send');
      // فتح الاتصال بالهاتف مباشرة دون تفريغ الحقول
      window.open('tel:0501402723', '_self');
    } catch {
      alert('حدث خطأ أثناء الإرسال، حاول مرة أخرى.');
    } finally {
      setLoading(false);
    }
  };

  const sendToWhatsApp = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const { fullName, phoneNumber, message } = formData;
    const msg = encodeURIComponent(
      `الاسم: ${fullName}\nالهاتف: ${phoneNumber}\nرسالتك: ${message}`
    );
    window.open(`https://wa.me/966501402723?text=${msg}`, '_blank');
  };

  return (
    <section id="contact" className="bg-gray-50 py-20" dir="rtl">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-6">
          <h2 className={`${almarai.className} text-4xl font-bold text-gray-900`}>
            سجل اهتمامك
          </h2>
          <div className="mt-2 flex justify-center">
            <motion.svg
              className="w-40 h-6"
              viewBox="0 0 120 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.path
                d="M5 10 C 25 20, 45 0, 65 10 S 105 20, 115 10"
                stroke="#FBBF24"
                strokeWidth="4"
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
        <p className={`${almarai.className} text-center text-gray-600 mb-8`}>
          املأ البيانات وسنتواصل معك قريبًا
        </p>
        <div className="bg-white shadow-lg rounded-2xl p-8">
          <form
            ref={formRef}
            onSubmit={submitForm}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2"
          >
            {/* الاسم الكامل */}
            <div className="sm:col-span-2">
              <label htmlFor="fullName" className={`${almarai.className} block text-gray-700 mb-2`}>
                الاسم الكامل
              </label>
              <input
                id="fullName"
                type="text"
                placeholder="مثال: أحمد محمد"
                value={formData.fullName}
                onChange={handleChange}
                required
                disabled={loading}
                className="w-full bg-gray-100 text-gray-800 placeholder-gray-500 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            {/* رقم الهاتف */}
            <div className="sm:col-span-2">
              <label htmlFor="phoneNumber" className={`${almarai.className} block text-gray-700 mb-2`}>
                رقم الهاتف
              </label>
              <input
                id="phoneNumber"
                type="tel"
                placeholder="مثال: 0501234567"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
                disabled={loading}
                className="w-full bg-gray-100 text-gray-800 placeholder-gray-500 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-right"
              />
            </div>

            {/* رسالتك */}
            <div className="sm:col-span-2">
              <label htmlFor="message" className={`${almarai.className} block text-gray-700 mb-2`}>
                رسالتك
              </label>
              <textarea
                id="message"
                placeholder="اكتب رسالتك هنا"
                value={formData.message}
                onChange={handleChange}
                required
                disabled={loading}
                rows={4}
                className="w-full bg-gray-100 text-gray-800 placeholder-gray-500 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            {/* الأزرار */}
            <div className="sm:col-span-2 flex flex-col gap-4 pt-4 sm:flex-row">
              <button
                type="submit"
                disabled={loading}
                className="flex-1 bg-gray-900 hover:bg-gray-800 text-white font-semibold py-3 rounded-lg transition flex justify-center items-center"
              >
                <Phone className="w-5 h-5 ml-2" />
                اتصل بنا
              </button>
              <button
                type="button"
                onClick={sendToWhatsApp}
                disabled={loading}
                className="flex-1 bg-green-600 hover:bg-green-500 text-white font-semibold py-3 rounded-lg transition flex justify-center items-center"
              >
                <Send className="w-5 h-5 ml-2" />
                إرسال إلى واتساب
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
