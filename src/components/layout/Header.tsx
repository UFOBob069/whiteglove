'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Plan Trip', href: '/plan-trip' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white shadow-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8" aria-label="Global">
        <div className="flex flex-1 items-center">
          <Link href="/" className="text-2xl font-serif font-bold text-green-900">
            White Glove Golf Trip
          </Link>
        </div>
        {/* Desktop nav */}
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-base font-semibold text-green-900 hover:text-amber-600 transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>
        {/* Hamburger for mobile only */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2.5 text-green-900 hover:bg-green-50 focus:outline-none"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open main menu"
          >
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </nav>

      {/* Mobile menu: full screen overlay, only on mobile */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex flex-col bg-white lg:hidden">
          <div className="flex items-center justify-between p-4 border-b border-green-100">
            <Link href="/" className="text-2xl font-serif font-bold text-green-900" onClick={() => setMobileMenuOpen(false)}>
              White Glove Golf Trip
            </Link>
            <button
              type="button"
              className="rounded-md p-2.5 text-green-900"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-2xl font-semibold text-green-900 hover:text-amber-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
