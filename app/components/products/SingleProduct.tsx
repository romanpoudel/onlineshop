import React from 'react'
import Image from "next/image"
import Star from './Star';
import Link from 'next/link';
import Button from '../Button';
// import { useDispatch } from "react-redux"
// import { addToCartReducer } from '@/app/redux-toolkit/features/cart/cartSlice'

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

const SingleProduct = (props: Products) => {
    const { id, image, title, description, price, rating }=props
    // const dispatch = useDispatch();
    // const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    //     e.stopPropagation()
    //     e.preventDefault()
    
    //     const action = addToCartReducer(); // Create an action object

    //     dispatch(action); // Dispatch the action
    // };
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
                            {/* <button type='submit' onClick={(e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>handleAddToCart(e)} className='font-semibold text-sm ring-1 ring-gray-500 px-4 py-2 rounded-full hover:bg-green-700 hover:text-gray-100'>Add to Cart</button> */}
                            <Button ring="ring-gray-900" hvrbg="hover:bg-green-700" text="text-gray-900" hvrtext="hover:text-gray-100" data={props}/>
                        </div>
                    </div>
                    <div className='w-1/4 text-lg font-bold flex flex-row items-baseline justify-center'><sup className='text-xs'>$</sup>{price}</div>
                </div>
            </div>
        </Link>
    )
}

export default SingleProduct
