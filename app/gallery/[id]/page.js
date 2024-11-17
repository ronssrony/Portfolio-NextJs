import React from 'react'
import { getProduct } from '@/api/gallery'
import Image from 'next/image'
async function page({params}) {
   const product = await getProduct( params.id)
   
  return (
    <div className='flex justify-center items-center gap-10 mt-20'>

         <Image
             alt={`${product.name}`}
            src={`http://localhost:3100/images/uploads/${product.image}`}
            width={250}
            height={50}
             />
        <div className='flex flex-col gap-4 text-slate-300'>

            <h2>Name: {product.name}</h2>   
            <h2>Gender: {product.panelcolor}</h2>
            <h2>Price: {product.price}</h2>
            <h2>Category: {product.bgcolor}</h2>

        </div>
    </div>
  )
}

export default page