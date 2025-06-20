'use client'

import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { Almarai } from 'next/font/google'

const almarai = Almarai({
  subsets: ['arabic'],
  weight: ['400', '700'],
  display: 'swap',
})

const images = [
  '/img/img5.webp',
]

const fadeDuration = 1.5   // مدة الفيد/أوت
const displayDuration = 3  // مدة عرض كل صورة قبل الترانزيشن

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const [prev, setPrev] = useState<number | null>(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      setPrev(current)
      setCurrent((current + 1) % images.length)
    }, displayDuration * 1000)

    return () => clearTimeout(timer)
  }, [current])

  // متغيّرات الحركة للمحتوى الأمامي (العنوان والفقرة والزر)
  const contentVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  }

  // دالة تمرير سلس إلى قسم About
  const scrollToAbout = (e: React.MouseEvent) => {
    e.preventDefault()
    const aboutSection = document.getElementById('about')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="relative h-screen overflow-hidden">
      <AnimatePresence initial={false}>
        {/* الصورة السابقة بتاريخ حركة fade-out */}
        {prev !== null && (
          <motion.div
            key={`prev-${images[prev]}`}
            className="absolute inset-0"
            initial={{ opacity: 1, scale: 1 }}
            animate={{ opacity: 0, scale: 1.1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: fadeDuration, ease: 'easeInOut' }}
          >
            <Image
              src={images[prev]}
              alt={`background-${prev}`}
              fill
              sizes="100vw"
              style={{ objectFit: 'cover' }}
              priority
            />
          </motion.div>
        )}

        {/* الصورة الحالية بتاريخ حركة fade-in */}
        <motion.div
          key={`curr-${images[current]}`}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: fadeDuration, ease: 'easeInOut' }}
        >
          <Image
            src={images[current]}
            alt={`background-${current}`}
            fill
            sizes="100vw"
            style={{ objectFit: 'cover' }}
            priority
          />
        </motion.div>
      </AnimatePresence>

      {/* طبقة التعتيم فوق الصورة */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/20 z-10 pointer-events-none" />

      <div
        className={`${almarai.className} relative z-20 container mx-auto flex flex-col items-center justify-center h-full px-4 text-center`}
      >
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight text-white drop-shadow-2xl"
          variants={contentVariants}
          initial="hidden"
          animate="visible"
          viewport={{ once: true }}
        >
          نحن نبني أحلامك العقارية
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl mb-8 max-w-2xl text-white/90 leading-relaxed"
          variants={contentVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
        >
          أفضل الحلول العقارية لإدارة وبيع وتأجير الممتلكات بأعلى معايير الجودة والثقة.
        </motion.p>

        <motion.a
          href="#about"
          onClick={scrollToAbout}
          className="inline-block bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-500 text-white font-bold px-8 py-3 rounded-full shadow-xl transition-all duration-300 hover:scale-105"
          variants={contentVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.4 }}
        >
          ابدأ الآن
        </motion.a>
      </div>
    </section>
  )
}
