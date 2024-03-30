import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards'
import { LampDemo } from '@/components/ui/lamp'
import { StickyScroll } from '@/components/ui/sticky-scroll-reveal';
import Image from 'next/image';

import store from "@/public/discover.jpg"
import quality from "@/public/quality.jpg"
import packaging from "@/public/package.jpg"
import { items } from './scrollData';
import React from 'react'


const content = [
  {
    title: "Our History",
    description: "In Phnom Penh, 2022, Istad.co ignited a spark. Discover, not just a store, but a style portal. Clothing, jewelry, bags - treasures waiting. A generation resonated, seeking expression, not outfits. Discover became a haven for the bold and diverse. Today, Discover empowers everyone to find their unique style. A testament to Istad.co's inclusivity. Discover: Your style story unfolds.",
    content: <Image src={store} alt='store' layout='contain'/>,
  },
  {
    title: "What we provide",
    description: "Discover doesn't compromise on quality. We use carefully selected materials and expert craftsmanship to ensure our clothing, jewelry, and bags are built to last.",
    content: <Image src={quality} alt='store' layout='contain'/>,
  },
  {
    title: "Our Services",
    description: "From the moment you place your order at Discover, you're in control. Track your package every step of the way with our convenient tracking system and enjoy the peace of mind of knowing exactly when your new treasures will arrive.",
    content: <Image src={packaging} alt='store' layout='contain'/>,
  },

];
  


export default function page() {
  return (
    <main className='bg-slate-950'>
      <LampDemo/>
      <section className=''>
        <StickyScroll content={content}/>
      </section>
      <section className='py-16'>
        <h2 className='text-slate-50 xl:text-4xl text-3xl font-bold uppercase text-center mb-4'>What our customer say about us</h2>
        <InfiniteMovingCards items={items}
          direction="right"
          speed="normal"
          pauseOnHover={true}
          
        />
      </section>
      
    </main>
  )
}
