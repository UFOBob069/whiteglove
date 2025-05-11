export default function ContactPage() {
  return (
    <div className="bg-gradient-to-b from-white to-green-50 min-h-screen pb-16">
      {/* 1. About Section */}
      <section className="max-w-3xl mx-auto text-center px-6 pt-16 pb-8">
        <h2 className="text-3xl font-serif font-bold text-green-900">Start Your White Glove Trip</h2>
        <p className="mt-4 text-green-700 text-lg">
          Ready to plan your dream golf getaway? Fill out the form below and our concierge team will reach out to craft your perfect experience.
        </p>
      </section>

      {/* 2. Enhanced Contact Form */}
      <form className="max-w-2xl mx-auto bg-white shadow-md rounded-lg px-6 py-8 space-y-6">
        <h3 className="text-xl font-semibold text-green-900 mb-4">Trip Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-green-800">Name</label>
            <input type="text" name="name" id="name" required className="mt-1 block w-full rounded-md border-green-300 shadow-sm focus:ring-amber-500 focus:border-amber-500" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-green-800">Email</label>
            <input type="email" name="email" id="email" required className="mt-1 block w-full rounded-md border-green-300 shadow-sm focus:ring-amber-500 focus:border-amber-500" />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-green-800">Phone</label>
            <input type="tel" name="phone" id="phone" required className="mt-1 block w-full rounded-md border-green-300 shadow-sm focus:ring-amber-500 focus:border-amber-500" />
          </div>
          <div>
            <label htmlFor="groupSize" className="block text-sm font-medium text-green-800">Group Size</label>
            <select name="groupSize" id="groupSize" required className="mt-1 block w-full rounded-md border-green-300 shadow-sm focus:ring-amber-500 focus:border-amber-500">
              <option value="">Select group size</option>
              <option value="Solo">Solo</option>
              <option value="2–4">2–4</option>
              <option value="5–8">5–8</option>
              <option value="9+">9+</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="dates" className="block text-sm font-medium text-green-800">Preferred Dates</label>
            <input type="text" name="dates" id="dates" placeholder="e.g. 2024-09-10 to 2024-09-15" className="mt-1 block w-full rounded-md border-green-300 shadow-sm focus:ring-amber-500 focus:border-amber-500" />
          </div>
          <div>
            <label htmlFor="pricePerPerson" className="block text-sm font-medium text-green-800">Budget Per Person</label>
            <select name="pricePerPerson" id="pricePerPerson" required className="mt-1 block w-full rounded-md border-green-300 shadow-sm focus:ring-amber-500 focus:border-amber-500">
              <option value="">Select budget</option>
              <option value="$1,000–$2,000">$1,000–$2,000</option>
              <option value="$2,000–$5,000">$2,000–$5,000</option>
              <option value="$5,000+">$5,000+</option>
            </select>
          </div>
        </div>
        <div>
          <label htmlFor="package" className="block text-sm font-medium text-green-800">Service Package</label>
          <div className="flex flex-wrap gap-3 mt-2">
            <label className="px-4 py-2 rounded-full border cursor-pointer shadow-sm transition-all duration-150 bg-white border-green-200 text-green-900 hover:bg-green-50">
              <input type="radio" name="package" value="Essentials" className="mr-2" required /> Essentials
            </label>
            <label className="px-4 py-2 rounded-full border cursor-pointer shadow-sm transition-all duration-150 bg-white border-green-200 text-green-900 hover:bg-green-50">
              <input type="radio" name="package" value="Premium" className="mr-2" /> Premium
            </label>
            <label className="px-4 py-2 rounded-full border cursor-pointer shadow-sm transition-all duration-150 bg-white border-green-200 text-green-900 hover:bg-green-50">
              <input type="radio" name="package" value="Platinum" className="mr-2" /> Platinum
            </label>
          </div>
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-green-800">Additional Details</label>
          <textarea name="message" id="message" rows={4} className="mt-1 block w-full rounded-md border-green-300 shadow-sm focus:ring-amber-500 focus:border-amber-500"></textarea>
        </div>
        <button type="submit" className="bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2 px-4 rounded-md transition">
          Start Your White Glove Trip
        </button>
      </form>

      {/* 3. Schedule a Call (Calendly Embed) */}
      <section className="max-w-3xl mx-auto mt-16 px-6">
        <h3 className="text-xl font-semibold text-green-900 text-center mb-4">Prefer to Talk?</h3>
        <p className="text-center text-green-700 mb-8">Schedule a quick call with our concierge team below:</p>
        <div className="w-full h-[650px]">
          <iframe
            src="https://calendly.com/your-link/intro-call"
            width="100%"
            height="100%"
            className="border-0"
            allowFullScreen
          ></iframe>
        </div>
      </section>
    </div>
  );
} 