import Hero from '@/components/Hero';
import Section2 from '@/components/Section2';
import Section3 from '@/components/Section3';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="container mx-auto pb-48">
      <Hero />
      <Section2 />
      <Section3 />
    </main>
  );
}
