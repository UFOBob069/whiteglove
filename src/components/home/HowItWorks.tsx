import { CalendarIcon, MapPinIcon, TrophyIcon } from '@heroicons/react/24/outline';

const steps = [
  {
    name: 'Plan',
    description: 'Tell us your dream golf trip details and preferences',
    icon: CalendarIcon,
    features: ['Destination preferences', 'Group size', 'Budget range', 'Special requests'],
  },
  {
    name: 'Book',
    description: 'We handle all reservations and logistics',
    icon: MapPinIcon,
    features: ['Course bookings', 'Hotel reservations', 'Transportation', 'Dining arrangements'],
  },
  {
    name: 'Play',
    description: 'Enjoy your perfectly planned golf experience',
    icon: TrophyIcon,
    features: ['24/7 concierge support', 'On-site assistance', 'Special experiences', 'Memories made'],
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-gradient-to-b from-green-50 to-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-serif font-bold tracking-tight text-gray-900 sm:text-4xl">
            How It Works
          </h2>
          <div className="mx-auto mt-2 mb-8 h-1 w-24 rounded-full bg-gold-500" />
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Planning your dream golf trip has never been easier
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-4xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
            {steps.map((step) => (
              <div
                key={step.name}
                className="group relative flex flex-col items-center rounded-2xl bg-white shadow-xl transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl p-8"
              >
                <div className="relative mb-6 flex items-center justify-center">
                  <span className="absolute inline-flex h-20 w-20 items-center justify-center rounded-full bg-gold-100 shadow-lg ring-4 ring-gold-300 group-hover:ring-amber-500 transition-all">
                    <step.icon className="h-10 w-10 text-green-700" aria-hidden="true" />
                  </span>
                </div>
                <h3 className="mt-16 text-xl font-bold text-gray-900 text-center font-serif">
                  {step.name}
                </h3>
                <p className="mt-4 text-base text-gray-600 text-center">
                  {step.description}
                </p>
                <ul className="mt-6 space-y-2 text-sm text-gray-500 text-left">
                  {step.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-x-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-gold-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 