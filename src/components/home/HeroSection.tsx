import Link from 'next/link';

export default function HeroSection() {
  return (
    <div className="relative min-h-[80vh]">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/hero-golf-course.jpg')",
        }}
      />
      {/* Dark overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/50" />
      
      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8">
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl font-serif font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              From Tee Time to Turndown
            </h1>
            <p className="mt-6 text-xl text-white/90 sm:text-2xl">
              Your Personal Golf Concierge
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/plan-trip"
                className="rounded-md bg-gold-500 px-8 py-3 text-lg font-semibold text-white shadow-sm hover:bg-gold-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500"
              >
                AI Trip Planner
              </Link>
              <Link
                href="/contact"
                className="rounded-md border border-white/20 bg-white/10 px-8 py-3 text-lg font-semibold text-white shadow-sm hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Start Your White Glove Trip
              </Link>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -right-4 -top-4 h-72 w-72 rounded-full bg-gold-500/20 blur-3xl" />
            <div className="absolute -bottom-4 -left-4 h-72 w-72 rounded-full bg-green-500/20 blur-3xl" />
            <div className="relative rounded-2xl bg-white/10 p-8 backdrop-blur-sm">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-gold-500/20" />
                  <div>
                    <h3 className="text-lg font-semibold text-white">Luxury Accommodations</h3>
                    <p className="text-sm text-white/70">5-star hotels and resorts</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-gold-500/20" />
                  <div>
                    <h3 className="text-lg font-semibold text-white">Premium Courses</h3>
                    <p className="text-sm text-white/70">World-class golf experiences</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-gold-500/20" />
                  <div>
                    <h3 className="text-lg font-semibold text-white">Personal Concierge</h3>
                    <p className="text-sm text-white/70">24/7 dedicated support</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 