import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import WhyChooseUs from '@/components/WhyChooseUs';
import Team from '@/components/Team';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { primaryPhoneHref } from '@/data/content';
import { Phone } from '@/icons';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <Team />
        <Projects />
        <Contact />
      </main>
      <Footer />

      {/* Mobile sticky call button for fast contact on small screens */}
      <a
        href={primaryPhoneHref}
        className="lg:hidden fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-teal text-cream shadow-lg shadow-black/30"
        aria-label="Call Trio Built Gulf"
      >
        <Phone size={22} />
      </a>
    </>
  );
}
