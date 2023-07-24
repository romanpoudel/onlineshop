"use client"

import React, { Suspense, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import Image from 'next/image';
import Star from '@/app/components/products/Star';
import { IoMdAdd, IoMdRemove } from 'react-icons/io'
import { TbTruckDelivery, TbClipboard } from 'react-icons/tb'
import Link from 'next/link';
import Loading from '@/app/components/Loading';
import Button from '@/app/components/Button';
import Navbar from '@/app/components/navbar/Navbar';
// import { useDispatch } from "react-redux"
// import { addToCartReducer } from '@/app/redux-toolkit/features/cart/cartSlice'

interface SingleProductProps {
    params: {
        id: number;
    };
}

const page = ({ params }: SingleProductProps) => {
    const { id } = params
    // const dispatch=useDispatch()
    const [count, setCount] = useState(1)
    const increment = () => {
        setCount((prev) => prev + 1);
    }
    const decrement = () => {
        count > 1 && setCount((prev) => (prev - 1));
    }

    const fetchSingleProduct = async (id: number) => {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`)
        return res.json()
    }
    const { data, isLoading } = useQuery<any, Error>(["singleProduct", id], () => fetchSingleProduct(id));
    if (isLoading) {
        return <div className='flex items-center justify-center h-96'> <Loading /> </div>
    }
    console.log("🚀 ~ file: page.tsx:13 ~ SingleProduct ~ data:", data)
    const { id: alias, image, title, rating, price, description, category } = data;

    // const handleAddToCart = () => {

    //     const action = addToCartReducer(); // Create an action object

    //     dispatch(action); // Dispatch the action
    // };
    return (
        <div>
            <Navbar />
            <div className='m-10'>
                <div className='text-gray-400 text-sm mb-4'><Link href="/"><span className='text-gray-500 font-medium'>BrowseProducts</span></Link> &gt; {category}</div>
                <Suspense>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                        <div className='w-full h-[250px] md:h-[450px] relative bg-gray-100'>
                            <Image src={image} alt="image" layout='fill' objectFit='contain' />
                        </div>
                        <div className='w-full '>
                            <div>
                                <div className='font-bold text-3xl md:w-1/2'>{title}</div>
                                <div className='text-xs md:w-1/2 my-4 text-gray-500'>{description}</div>
                                <div className='text-xs'><Star rating={rating} /></div>
                                <div className='md:w-3/4 my-4'>
                                    <hr />
                                </div>
                            </div>
                            <div>
                                <div className='font-semibold text-xl'>${price}</div>
                                <div className='text-xs  text-gray-500'>You can have cash on delivery</div>
                                <div className='md:w-3/4 my-4'>
                                    <hr />
                                </div>
                            </div>
                            <div>
                                <div className='flex items-center'>
                                    <div className='flex items-center bg-gray-100 rounded-full w-fit text-gray-600 py-2'>
                                        <IoMdRemove className='w-12 cursor-pointer' onClick={decrement} /><div className='font-mono cursor-default'>{count}</div><IoMdAdd className='w-12 cursor-pointer' onClick={increment} />
                                    </div>
                                    <div className='flex flex-col text-xs font-bold text-gray-500 ml-6'><p>Only <span className='text-orange-400'>12 Items Left!</span></p><p>Don't miss it</p></div>
                                </div>
                                <div className='flex gap-4 my-4'>
                                    <div>
                                        <button type='submit' className='font-semibold text-sm ring-1 ring-gray-500 px-4 py-2 rounded-full bg-green-700 text-gray-50  hover:bg-green-900 w-36'>Buy Now</button>
                                    </div>
                                    <div>
                                        {/* <button type='submit' onClick={handleAddToCart} className='font-semibold text-sm ring-1 ring-green-700 px-4 py-2 rounded-full  text-green-700 hover:bg-gray-100 w-36'>Add to Cart</button> */}
                                        <Button ring="ring-green-700" hvrbg="hover:bg-gray-100" text="text-green-700" hvrtext="hover:text-green-700" width="w-36" data={data} count={count}/>
                                    </div>
                                </div>
                                <div className='border rounded w-fit'>
                                    <div className='flex'>
                                        <div className='m-2'><TbTruckDelivery color='orange' /></div>
                                        <div className='m-2'>
                                            <div className='text-xs font-bold text-gray-700'>Free Delivery</div>
                                            <div className='underline text-xs text-gray-700 font-medium cursor-pointer'>Enter your Postal code for delivery Availability</div>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className='flex'>
                                        <div className='m-2'><TbClipboard color='orange' /></div>
                                        <div className='m-2'>
                                            <div className='text-xs font-bold text-gray-700'>Return Delivery</div>
                                            <div className='text-xs font-medium text-gray-700'>Free 3-days Delivery Returns. <span className='underline cursor-pointer'>Details</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Suspense>
            </div>
        </div>
    )
}

export default page
