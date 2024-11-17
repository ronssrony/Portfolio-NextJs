import React from 'react'
import {getProducts} from '@/api/gallery'
import Image from 'next/image'
import Link from 'next/link'

async function page() {
    const product = await getProducts()
    
  return (
    <div className='flex flex-wrap gap-10 justify-center mt-20 '>
        {product.map(prod=>
           <div key={prod._id}>
            <Link href={`/gallery/${prod._id}`}>
            <Image
             alt={`${prod.name}`}
            src={`http://localhost:3100/images/uploads/${prod.image}`}
            width={250}
            height={50}
             />
            </Link>
           </div>
        )}
    </div>
  )
}

export default page