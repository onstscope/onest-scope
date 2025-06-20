// src/app/components/ScrollUpButton.tsx
'use client';

import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ScrollUpButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: 'smooth' });

  if (!visible) return null;

  return (
    <motion.button
      aria-label="العودة للأعلى"
      onClick={scrollToTop}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: 'backOut' }}
      whileHover={{ scale: 1.1 }}
      className="fixed bottom-6 right-6 z-50 focus:outline-none"
    >
      {/* الدائرة الرئيسية */}
      <div className="relative w-14 h-14 rounded-full bg-yellow-500 shadow-lg flex items-center justify-center">
        <ArrowUp size={26} className="text-white" />

        {/* نبضة */}
        <motion.span
          className="absolute inset-0 rounded-full bg-yellow-500 opacity-30"
          animate={{ scale: [1, 1.8], opacity: [0.4, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeOut' }}
        />
      </div>
    </motion.button>
  );
}
