'use client';

import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Almarai } from 'next/font/google';
import { Phone, Send } from 'lucide-react';
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

const almarai = Almarai({
  subsets: ['arabic'],
  weight: ['400', '700'],
  display: 'swap',
});

const PROPERTY_OPTIONS = [
  ' دور أرضي',
  ' دور أول',
  'شقة ',
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    propertyType: '',
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

  const handleSelectProperty = (value: string) => {
    setFormData(prev => ({ ...prev, propertyType: value }));
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
      window.open('tel:0501402723', '_self');
    } catch {
      alert('حدث خطأ أثناء الإرسال، حاول مرة أخرى.');
    } finally {
      setLoading(false);
    }
  };

  const sendToWhatsApp = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const { fullName, phoneNumber, message, propertyType } = formData;
    const msg = encodeURIComponent(
      `الاسم: ${fullName}\nالهاتف: ${phoneNumber}\nالعقار: ${propertyType}\nرسالتك: ${message}`
    );
    window.open(`https://wa.me/966501402723?text=${msg}`, '_blank');
  };

  return (
    <section id="contact" className="bg-gray-50 py-20" dir="rtl">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        {/* العنوان مع الخط المتحرك */}
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

            {/* اختيار نوع العقار */}
            <div className="sm:col-span-2">
              <label htmlFor="propertyType" className={`${almarai.className} block text-gray-700 mb-2`}>
                اختر العقار المناسب
              </label>
              <Menu as="div" className="relative inline-block w-full text-left">
                <MenuButton
                  className="inline-flex w-full justify-between items-center rounded-md bg-white px-4 py-3 text-sm font-semibold text-gray-900 shadow-xs ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  disabled={loading}
                >
                  {formData.propertyType || '-- اختر --'}
                  <ChevronDownIcon className="ml-2 h-5 w-5 text-gray-400" aria-hidden="true" />
                </MenuButton>
                <MenuItems className="absolute right-0 z-10 mt-1 w-full origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                  <div className="py-1">
                    {PROPERTY_OPTIONS.map(option => (
                      <MenuItem key={option}>
                        {({ active }) => (
                          <button
                            type="button"
                            onClick={() => handleSelectProperty(option)}
                            className={`${
                              active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                            } block w-full px-4 py-2 text-sm text-right`}
                          >
                            {option}
                          </button>
                        )}
                      </MenuItem>
                    ))}
                  </div>
                </MenuItems>
              </Menu>
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
