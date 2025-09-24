import Hero from '@/components/ui/Hero';
import LakeMap from '@/components/ui/LakeMap';
import ResortHighlights from '@/components/ui/ResortHighlights';
import Testimonials from '@/components/ui/Testimonials';

export default function Home() {
  return (
    <main>
      <Hero />
      <ResortHighlights />
      <LakeMap />
      <Testimonials />
    </main>
  );
}
