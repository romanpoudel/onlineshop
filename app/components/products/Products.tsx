import React from 'react'
import SingleProduct from './SingleProduct'
import { useQuery } from '@tanstack/react-query'

interface CartProduct {
    id: number;
    image: string;
    title: string;
    price:number;
    description: string;
    rating: {
        rate: number;
        count: number;
    };
}

const Products = () => {
    const fetchProducts = async () => {
        const res = await fetch('https://fakestoreapi.com/products')
        return res.json()
    }
    const { data, status } = useQuery(["products"], fetchProducts);
    console.log(data)
    return (
        <div className='max-w-[1400px]  mx-auto px-4 my-4 w-full'>
            <div className='text-xl font-bold mb-5'>Products You Might Like</div>
            <div className='w-full'>
                {status === "error" && <p>Error fetching data</p>}
                {status === "loading" && <p>Fetching data...</p>}
                {status === "success" && (
                    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8'>
                        {
                            data.map((item: CartProduct) => (
                                <SingleProduct key={item.id} {...item} />
                            ))
                        }
                    </div>
                )}
            </div>
            <div>
                <hr className='border-2 border-gray-300'/>
            </div>
        </div>
    )
}

export default Products
