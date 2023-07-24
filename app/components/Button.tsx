import React from 'react'
import { useDispatch } from "react-redux"
import { addToCartReducer } from '@/app/redux-toolkit/features/cart/cartSlice'

const Button = ({ ring, hvrbg, text, hvrtext, width = "w-auto", data,count=1}: any) => {
    const dispatch = useDispatch();
    const { id, image, title, price } = data
    const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.stopPropagation()
        e.preventDefault()
        const playload = {
            id, title, image, price,count
        }

        const action = addToCartReducer(playload); // Create an action object

        dispatch(action); // Dispatch the action
    };
    return (
        <div>
            <button
                type='submit'
                onClick={handleAddToCart}
                className={`font-semibold text-sm ring-1  px-4 py-2 rounded-full ${ring} ${text} ${hvrtext} ${hvrbg} ${width}`}>
                Add to Cart
            </button>
        </div>
    )
}

export default Button
