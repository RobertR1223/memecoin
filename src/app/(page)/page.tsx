'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { Landing } from "./sections/landing";
import { Lucky } from "./sections/lucky";
import { Tutorials } from "./sections/tutorials";
import { Faq } from "./sections/faq";
import { Footer } from "./sections/footer";
import { Lucknomics } from './sections/luckynomics'
import { smoothScroll } from '@/lib/utils';
import { LuckySpin } from './sections/spin';

export default function Home() {
  const pathname = usePathname()

  useEffect(() => {
    // Check if the URL has a hash
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      smoothScroll(id);
    }
  }, [pathname]);

  return (
    <main className="flex min-h-screen flex-col">
      <Landing />
      <LuckySpin/>
      <Lucky />
      <Lucknomics />
      <Tutorials />
      <Faq />
      <Footer />
    </main>
  );
}