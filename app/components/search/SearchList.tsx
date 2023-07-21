import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Star from '../products/Star'

interface DataProps {
    id: number
    title: string
    image: string
    price: number
    rating: {
        rate: number;
        count: number;
    }
}

const SearchList = (props: DataProps) => {
    const { id, title, image, rating, price } = props
    return (
        <Link href={`/productDetail/${id}`}>
            <div>
                <div className='bg-gray-100 flex items-center justify-between px-4 py-2 h-18 w-full '>
                    <div className='flex items-center'>
                        <div className='flex items-center bg-white relative w-9 h-9  rounded'><Image src={image} alt="product-image" fill objectFit='contain' className='p-1' /></div>
                        <div className='overflow-hidden font-semibold text-sm w-28 md:w-36 truncate ml-2'>{title}</div>
                    </div>
                    <div className='hidden sm:block text-sm'>
                        <Star rating={rating} />
                    </div>
                    <div className='text-sm font-bold'>
                        <sup >$</sup>{price}
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default SearchList