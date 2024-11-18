import React from 'react'
import getProducts from '@/api/gallery'
import Image from 'next/image'


async function page() {
    const product = await getProducts()
  return (
    <div className='flex flex-wrap gap-10 justify-center mt-20 '>
         {product&& product.map(prod=>
           <div key={prod._id}>
            <Image
             alt={`${prod.name}`}
            src={`https://imazineblue.onrender.com/images/uploads/${prod.image}`}
            width={250}
            height={50}
             />
           </div>
        )}
    </div>
  )
}

export default page