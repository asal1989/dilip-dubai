import Hero from '@/components/Hero';
import ServicesMarquee from '@/components/ServicesMarquee';
import Reveal from '@/components/Reveal';
import CtaBand from '@/components/CtaBand';

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesMarquee />
      <Reveal>
        <CtaBand />
      </Reveal>
    </>
  );
}
