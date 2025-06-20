// src/app/components/WhatsAppButton.tsx
'use client';

import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const phone = '966501402723';
  return (
    <motion.a
      href={`https://wa.me/${phone}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="تواصل واتساب"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: .6, ease: 'backOut' }}
      whileHover={{ scale: 1.1 }}
      className="fixed bottom-6 left-6 z-50"
    >
      <div className="w-14 h-14 rounded-full bg-green-500 shadow-lg flex items-center justify-center">
        <MessageCircle size={26} className="text-white" />
      </div>

      {/* نبضة متكررة */}
      <motion.span
        className="absolute inset-0 rounded-full bg-green-500 opacity-30"
        animate={{ scale: [1, 1.8], opacity: [0.4, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: 'easeOut' }}
      />
    </motion.a>
  );
}
