import React from 'react'

import ContactComponent from './component/contactInfo'

export default function Contact() {
  return (
   <main className='p-8 h-screen bg-red-60 flex justify-center items-center'>
      <section className='max-w-[1080px] grid xl:grid-cols-2 grid-col-1 grid-flow-row'>
        <section >
          <h1 className='uppercase xl:text-8xl text-3xl text-slate-900'>Let&apos;s Connect with discover</h1>
        </section>
        <section >
          <ContactComponent/>
        </section>
      </section>
   </main>
  )
}
