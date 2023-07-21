"use client"

import Navbar from '@/app/components/navbar/Navbar'
// import Star from '@/app/components/Star'
// import React from 'react'
// import { useQuery } from '@tanstack/react-query'
// import Image from 'next/image'
// import { useEffect } from 'react'
// import { useDispatch } from 'react-redux'
// import { useSelector } from "react-redux"
// import { addToCartReducer } from '@/app/redux-toolkit/features/cart/cartSlice'

// interface SingleProductProps {
//     params: {
//         id: number;
//     };
// }

// const SingleProduct = ({ params }: SingleProductProps) => {
//     const { id } = params
//     console.log("🚀 ~ file: page.tsx:9 ~ SingleProduct ~ id:", id)
//     const dispatch = useDispatch();
//     const fetchSingleProduct = async (id: number) => {
//         const res = await fetch(`https://fakestoreapi.com/products/${id}`)
//         return res.json()
//     }
//     const { data, isLoading } = useQuery<any, Error>(["singleProduct", id], () => fetchSingleProduct(id));
//     console.log("🚀 ~ file: page.tsx:13 ~ SingleProduct ~ data:", data)

//     if (isLoading) {
//         return <p className='text-center font-semibold'>Loading...</p>
//     }
//     const { id: alias, image, title, rating, price, description, category } = data;

//     const handleAddToCart = () => {
//         const payload = {
//             alias,
//             image,
//             price
//         };

//         const action = addToCartReducer(payload); // Create an action object

//         dispatch(action); // Dispatch the action
//     };
//     return (
//         <div className='relative -top-16  flex  h-screen   items-center max-w-4xl mx-auto bg-white'>
//             <div className='relative w-1/2 flex justify-center h-96 mr-6 border-2 ml-6'>
//                 <Image src={image} alt="item" fill style={{ objectFit: 'contain' }} className='p-4' />
//             </div>
//             <div className='w-1/2  pr-12 h-96'>
//                 <div >
//                     <p className='font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-900'>{title}</p>
//                     <Star rating={rating} />
//                     <p className='font-bold text-blue-500 my-6'>Rs. {price}</p>
//                     <p className='mb-6 text-justify text-xs sm:text-sm md:text-base lg:text-lg h-24 sm:h-full overflow-hidden sm:overflow-visible'>{description ? description.charAt(0).toUpperCase() + description.slice(1) : ''}</p>
//                     <p className='font-serif text-base sm:text-lg font-normal text-blue-600'><span className='font-semibold font-sams'>Category:</span> {category ? category.charAt(0).toUpperCase() + category.slice(1) : ''}</p>

//                 </div>
//                 <div className='mt-6 '>
//                     <button onClick={handleAddToCart} className='border bg-blue-500 p-2 rounded-full hover:shadow-lg hover:bg-blue-600'><p className='uppercase sm:font-semibold text-sm sm:text-base text-white'>Add to cart</p></button>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default SingleProduct


import React from 'react'
import { useQuery } from '@tanstack/react-query'
import Image from 'next/image';
import Star from '@/app/components/products/Star';
import { IoMdAdd, IoMdRemove } from 'react-icons/io'
import { TbTruckDelivery, TbClipboard } from 'react-icons/tb'

interface SingleProductProps {
    params: {
        id: number;
    };
}

const page = ({ params }: SingleProductProps) => {
    const { id } = params

    const fetchSingleProduct = async (id: number) => {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`)
        return res.json()
    }
    const { data, isLoading } = useQuery<any, Error>(["singleProduct", id], () => fetchSingleProduct(id));
    if (isLoading) {
        return <p className='text-center font-semibold'>Loading...</p>
    }
    console.log("🚀 ~ file: page.tsx:13 ~ SingleProduct ~ data:", data)
    const { id: alias, image, title, rating, price, description, category } = data;
    return (
        <div>
            <Navbar />
            <div className='m-10'>
                <div className='text-gray-400 text-sm mb-4'>BrowseProducts &gt; Women &gt; Jackets</div>
                <div className='grid grid-cols-2 gap-10'>
                    <div className='w-full h-[450px] relative bg-gray-100'>
                        <Image src={image} alt="image" layout='fill' objectFit='contain' />
                    </div>
                    <div className='w-full '>
                        <div>
                            <div className='font-bold text-3xl w-1/2'>{title}</div>
                            <div className='text-xs w-1/2 my-4 text-gray-500'>{description}</div>
                            <div className='text-xs'><Star rating={rating} /></div>
                            <div className='w-3/4 my-4'>
                                <hr />
                            </div>
                        </div>
                        <div>
                            <div className='font-semibold text-xl'>${price}</div>
                            <div className='text-xs  text-gray-500'>You can have cash on delivery</div>
                            <div className='w-3/4 my-4'>
                                <hr />
                            </div>
                        </div>
                        <div>
                            <div className='flex items-center'>
                                <div className='flex items-center bg-gray-100 rounded-full w-fit text-gray-600 py-2'>
                                    <IoMdRemove className='w-12' /><div className='font-mono'>10</div><IoMdAdd className='w-12' />
                                </div>
                                <div className='flex flex-col text-xs font-bold text-gray-500 ml-6'><p>Only <span className='text-orange-400'>12 Items Left!</span></p><p>Don't miss it</p></div>
                            </div>
                            <div className='flex gap-4 my-4'>
                                <div>
                                    <button type='submit' className='font-semibold text-sm ring-1 ring-gray-500 px-4 py-2 rounded-full bg-green-700 text-gray-50  hover:bg-green-900 w-36'>Buy Now</button>
                                </div>
                                <div>
                                    <button type='submit' className='font-semibold text-sm ring-1 ring-green-700 px-4 py-2 rounded-full  text-green-700 hover:bg-gray-100 w-36'>Add to Cart</button>
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
                                        <div className='text-xs font-medium text-gray-700'>Free 3-days Delivery Returns.<span className='underline cursor-pointer'> Details</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page
