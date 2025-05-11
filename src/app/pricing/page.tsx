'use client';

import { CheckIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';

const tiers = [
  {
    name: 'Essentials',
    id: 'tier-essentials',
    price: { monthly: '$499' },
    description: 'Perfect for golfers who want a hassle-free trip with basic planning.',
    features: [
      'Luxury accommodation booking',
      'Tee time reservations',
      'Basic itinerary planning',
      'Email support',
      'Course recommendations',
      'Group size up to 4',
    ],
    cta: 'Start My Trip',
    featured: false,
  },
  {
    name: 'Premium',
    id: 'tier-premium',
    price: { monthly: '$1,499' },
    description: 'Comprehensive planning with full concierge service.',
    features: [
      'Everything in Essentials',
      'Full trip coordination',
      'Restaurant reservations',
      'Transportation arrangements',
      'Priority support',
      'Group size up to 8',
      'Welcome package',
      'Golf club shipping',
    ],
    cta: 'Start My Trip',
    featured: true,
  },
  {
    name: 'Platinum',
    id: 'tier-platinum',
    price: { monthly: '$2,499+' },
    description: 'Ultimate luxury experience with dedicated trip manager.',
    features: [
      'Everything in Premium',
      'Dedicated trip manager',
      '24/7 concierge support',
      'Spa & wellness bookings',
      'Private dining experiences',
      'VIP course access',
      'Helicopter transfers',
      'Group size unlimited',
      'Custom merchandise',
    ],
    cta: 'Start My Trip',
    featured: false,
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function PricingPage() {
  return (
    <div className="bg-gradient-to-b from-white via-green-50/50 to-green-100/30 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-serif font-bold tracking-tight text-green-900 sm:text-5xl">
            Service Tiers That Fit Every Golfer
          </h1>
          <p className="mt-6 text-lg leading-8 text-green-700">
            Choose the perfect level of service for your dream golf getaway. From basic planning to full luxury concierge, we&apos;ve got you covered.
          </p>
        </div>
        <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={classNames(
                tier.featured 
                  ? 'ring-2 ring-amber-500 bg-white shadow-xl' 
                  : 'ring-1 ring-green-200 bg-white/80 backdrop-blur-sm',
                'rounded-3xl p-8 xl:p-10 transition-all duration-300 hover:shadow-lg'
              )}
            >
              <div className="flex items-center justify-between gap-x-4">
                <h2
                  id={tier.id}
                  className={classNames(
                    tier.featured ? 'text-amber-500' : 'text-green-900',
                    'text-lg font-semibold leading-8'
                  )}
                >
                  {tier.name}
                </h2>
                {tier.featured && (
                  <span className="rounded-full bg-amber-500/10 px-2.5 py-1 text-xs font-semibold leading-5 text-amber-500">
                    Most popular
                  </span>
                )}
              </div>
              <p className="mt-4 text-sm leading-6 text-green-700">{tier.description}</p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight text-green-900">{tier.price.monthly}</span>
                <span className="text-sm font-semibold leading-6 text-green-600">/trip</span>
              </p>
              <Link
                href="/contact"
                className={classNames(
                  tier.featured
                    ? 'bg-amber-500 text-white hover:bg-amber-600'
                    : 'bg-green-600 text-white hover:bg-green-700',
                  'mt-6 block rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500 transition-colors duration-200'
                )}
              >
                {tier.cta}
              </Link>
              <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-green-700">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckIcon className={classNames(
                      tier.featured ? 'text-amber-500' : 'text-green-600',
                      'h-6 w-5 flex-none'
                    )} aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      
      {/* FAQ Section */}
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-4xl divide-y divide-green-200">
          <h2 className="text-2xl font-serif font-bold leading-10 tracking-tight text-green-900">
            Frequently asked questions
          </h2>
          <dl className="mt-10 space-y-6 divide-y divide-green-200">
            <div className="pt-6">
              <dt className="text-base font-semibold leading-7 text-green-900">
                What&apos;s included in the base price?
              </dt>
              <dd className="mt-2 text-base leading-7 text-green-700">
                All our packages include accommodation booking, tee time reservations, and basic itinerary planning. The higher tiers add more personalized services and luxury amenities.
              </dd>
            </div>
            <div className="pt-6">
              <dt className="text-base font-semibold leading-7 text-green-900">
                Can I customize my package?
              </dt>
              <dd className="mt-2 text-base leading-7 text-green-700">
                Absolutely! We can tailor any package to your specific needs. Contact us to discuss your requirements and we&apos;ll create a custom quote.
              </dd>
            </div>
            <div className="pt-6">
              <dt className="text-base font-semibold leading-7 text-green-900">
                How far in advance should I book?
              </dt>
              <dd className="mt-2 text-base leading-7 text-green-700">
                We recommend booking at least 3-6 months in advance for the best availability, especially for premium courses and peak season travel.
              </dd>
            </div>
          </dl>
        </div>
      </div>

      {/* Force Tailwind to generate amber classes */}
      <div className="hidden bg-amber-500 hover:bg-amber-600 text-amber-500 ring-amber-500 ring-amber-600"></div>
    </div>
  );
} 