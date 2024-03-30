"use client"

import CardProductComponent from '@/components/card/CardProduct';
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'  
import logo from "@/public/logo.png"
import Image from 'next/image';

const ENDPOINT = "https://fakestoreapi.com/products/"



export default function Service() {
  const [products, setProducts] = useState([]);
  const router = useRouter();

  useEffect(() => {
    fetch(ENDPOINT)
    .then((res) => res.json()
    ).then((data) => setProducts(data));
    
  },[])

  return (
    <main className='pt-28 '>  
    <section className='space-y-4'>
      <h1 className='xl:text-3xl text-center font-semibold'> Level Up Your Look with <Image className='inline ml-4' src={logo} width={140} height={70} alt='logo' /></h1>
        <p className='text-lg text-center px-16 '> Feeling fashion FOMO? Shop our hottest trends in clothes, jewelry & bags for men & women. Rock your style!</p>
        
    </section>
     
     
      <section className=' flex flex-wrap gap-4 justify-center py-8 '>
        {products.map((product: any,index) => (
          <CardProductComponent onClick={() => router.push(`/service/${product.id}`)} key={index} title={product.title} image={product.image} price={product.price}          
          />
        ))}

    </section>
    </main>
    
  )
}
