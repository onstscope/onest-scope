// src/app/components/Navbar.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Almarai } from 'next/font/google';
import { Dialog, DialogPanel } from '@headlessui/react';
import { motion } from 'framer-motion';

const almarai = Almarai({
  subsets: ['arabic'],
  weight: ['400', '700'],
  display: 'swap',
});

type NavLink = { href: string; label: string; isButton?: boolean };

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const links: NavLink[] = [
    { href: '/#', label: 'الصفحة الرئيسية' },
    { href: '#projects', label: 'مشاريعنا' },
    { href: '#contact', label: 'تواصل معنا' },
  ];
  const ctaLink: NavLink = { href: '#contact', label: 'سجل اهتمامك', isButton: true };

  const topLineVariants = {
    closed: { rotate: 0, y: 0 },
    open: { rotate: 45, y: 8 },
  };
  const middleLineVariants = {
    closed: { opacity: 1 },
    open: { opacity: 0 },
  };
  const bottomLineVariants = {
    closed: { rotate: 0, y: 0 },
    open: { rotate: -45, y: -8 },
  };

  return (
    <>
      <header className={`${almarai.className} fixed z-50 w-full bg-gray-900`}>
        <nav
          aria-label="Global"
          className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8"
        >
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5 bg-transparent">
              <span className="sr-only">DetailsRE</span>
              <Image
                src="/img/logo.webp"
                alt="DetailsRE"
                width={160}
                height={70}
                 className="h-12 w-auto object-contain bg-transparent"
                priority
              />
            </Link>
          </div>

          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="relative w-8 h-8 flex flex-col justify-center items-start space-y-1"
              aria-label="Open main menu"
            >
              <motion.span
                className="block h-0.5 bg-yellow-500 rounded"
                style={{ width: '2.5rem' }}
                variants={topLineVariants}
                initial="closed"
                animate={mobileMenuOpen ? 'open' : 'closed'}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              />
              <motion.span
                className="block h-0.5 bg-yellow-500 rounded"
                style={{ width: '3rem' }}
                variants={middleLineVariants}
                initial="closed"
                animate={mobileMenuOpen ? 'open' : 'closed'}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              />
              <motion.span
                className="block h-0.5 bg-yellow-500 rounded"
                style={{ width: '2rem' }}
                variants={bottomLineVariants}
                initial="closed"
                animate={mobileMenuOpen ? 'open' : 'closed'}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              />
            </button>
          </div>

          <div className="hidden lg:flex lg:gap-x-12">
            {links.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-base font-semibold text-white hover:text-yellow-300 transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link
              href={ctaLink.href}
              className="flex items-center bg-yellow-500 text-gray-900 font-semibold px-5 py-2 rounded-lg shadow-sm hover:bg-yellow-400 transition-colors duration-200"
            >
              <span className="inline-block w-3 h-3 bg-yellow-700 rounded-full mr-2" />
              {ctaLink.label}
            </Link>
          </div>
        </nav>
      </header>

      {/* مسافة تعويض ارتفاع الهيدر */}
      <div className="h-[72px]" />

      <Dialog
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-40 bg-black/40" aria-hidden="true" />

        <DialogPanel className="fixed inset-0 z-50 bg-gray-900 px-6 py-6 overflow-y-auto">
          <div className="flex items-center justify-between mb-6">
            <Link href="/" className="-m-1.5 p-1.5 bg-transparent">
              <span className="sr-only">Onest Scope</span>
              <Image
                src="/img/logo.webp"
                alt="DetailsRE"
                width={160}
                height={60}
                className="h-12 w-auto object-contain bg-transparent"
                priority
              />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-md p-2.5 text-white hover:text-gray-300"
              aria-label="Close menu"
            >
              <motion.div className="relative w-8 h-8 flex flex-col justify-center items-start space-y-1">
                <motion.span
                  className="absolute h-0.5 bg-yellow-500 rounded"
                  style={{ width: '2.5rem' }}
                  animate={{ rotate: 45, y: 8 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                />
                <motion.span
                  className="absolute h-0.5 bg-yellow-500 rounded"
                  style={{ width: '3rem' }}
                  animate={{ opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                />
                <motion.span
                  className="absolute h-0.5 bg-yellow-500 rounded"
                  style={{ width: '2rem' }}
                  animate={{ rotate: -45, y: -8 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                />
              </motion.div>
            </button>
          </div>

          <nav className="flex flex-col space-y-4">
            {links.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block rounded-lg px-3 py-2 text-base font-medium text-white hover:bg-gray-800 transition-colors duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="mt-6 border-t border-gray-700 pt-6">
            <Link
              href={ctaLink.href}
              className="flex items-center justify-center rounded-lg bg-yellow-500 px-3 py-2 text-base font-semibold text-gray-900 hover:bg-yellow-400 transition-colors duration-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="inline-block w-3 h-3 bg-yellow-700 rounded-full mr-2" />
              {ctaLink.label}
            </Link>
          </div>
        </DialogPanel>
      </Dialog>
    </>
  );
}
