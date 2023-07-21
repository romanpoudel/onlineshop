import React from 'react'
import Image from "next/image"
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';
import Star from './Star';
import Link from 'next/link';

interface Products {
    id: number;
    image: string;
    title: string;
    description: string;
    price: number;
    rating: {
        rate: number;
        count: number;
    };
}

const SingleProduct = ({ id, image, title, description, price, rating }: Products) => {
    return (
        <Link href={`/productDetail/${id}`}>
            <div className='flex flex-col items-center w-full'>
                <div className='flex items-center justify-center bg-gray-100 rounded-lg w-full aspect-square hover:shadow-lg'>
                    <Image src={image} alt="product-image" className='w-44 h-56  object-contain' width={176} height={224} priority />
                </div>
                <div className='flex w-full'>
                    <div className='w-3/4'>
                        <div className='font-bold sm:text-lg line-clamp-2 h-12 sm:h-14'>{title}</div>
                        <div className='line-clamp-1 text-sm font-medium text-gray-600'>{description}</div>
                        <div className='line-clamp-1 text-sm font-medium text-gray-600'><Star rating={rating} /></div>
                        <div className='my-2'>
                            <button type='submit' className='font-semibold text-sm ring-1 ring-gray-500 px-4 py-2 rounded-full hover:bg-green-700 hover:text-gray-100'>Add to Cart</button>
                        </div>
                    </div>
                    <div className='w-1/4 text-lg font-bold flex flex-row items-baseline justify-center'><sup className='text-xs'>$</sup>{price}</div>
                </div>
            </div>
        </Link>
    )
}

export default SingleProduct
