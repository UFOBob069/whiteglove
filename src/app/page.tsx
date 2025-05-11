import HeroSection from '@/components/home/HeroSection';
import Testimonials from '@/components/home/Testimonials';
import HowItWorks from '@/components/home/HowItWorks';
import FeaturedDestinations from '@/components/home/FeaturedDestinations';
import EmailCapture from '@/components/home/EmailCapture';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Testimonials />
      <HowItWorks />
      <FeaturedDestinations />
      <EmailCapture />
    </main>
  );
}
