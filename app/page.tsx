import HomeHero from '@/components/home/HomeHero';
import ChooseTransport from '@/components/home/ChooseTransport';
import WhyChoose from '@/components/home/WhyChoose';
import HowItWorks from '@/components/home/HowItWorks';
import Testimonials from '@/components/home/Testimonials';
import Partners from '@/components/home/Partners';
import NewsTeaser from '@/components/home/NewsTeaser';

export default function Home() {
  return (
    <main className="page-enter">
      <HomeHero />
      <ChooseTransport />
      <WhyChoose />
      <HowItWorks />
      <Testimonials />
      <Partners />
      <NewsTeaser />
    </main>
  );
}
