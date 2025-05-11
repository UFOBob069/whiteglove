const destinations = [
  {
    name: 'Pebble Beach',
    description: 'Experience the iconic coastal courses of California\'s Monterey Peninsula',
    image: '/images/pebble-beach.jpg',
  },
  {
    name: 'St Andrews',
    description: 'Play the historic Old Course and discover the home of golf',
    image: '/images/st-andrews.jpg',
  },
  {
    name: 'Bandon Dunes',
    description: 'World-class links golf on Oregon\'s stunning Pacific coast',
    image: '/images/bandon-dunes.jpg',
  },
];

export default function FeaturedDestinations() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-serif font-bold tracking-tight text-gray-900 sm:text-4xl">
            Featured Destinations
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Discover our handpicked selection of world-class golf destinations
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {destinations.map((destination) => (
            <article key={destination.name} className="flex flex-col items-start">
              <div className="relative w-full">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
              </div>
              <div className="max-w-xl">
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                  <h3 className="text-xl font-semibold leading-6 text-gray-900">
                    {destination.name}
                  </h3>
                </div>
                <p className="mt-4 text-base leading-7 text-gray-600">
                  {destination.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
} 