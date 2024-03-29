'use client'

import CardProductComponent from '@/components/card/CardProduct';
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const ENDPOINT = "https://fakestoreapi.com/products/"



export default function page() {
  const [products, setProducts] = useState([]);
  const router = useRouter();

  useEffect(() => {
    fetch(ENDPOINT)
    .then((res) => res.json()
    ).then((data) => setProducts(data));
    
  },[])

  return (
    <div className=' flex flex-wrap gap-4 justify-center py-8'>
    
        {products.map((product: any,index) => (
          <CardProductComponent onClick={() => router.push(`/service/${product.id}`)} key={index} title={product.title} image={product.image} price={product.price}
          
          />
        ))}

    </div>
  )
}
