import React, { useEffect, useRef, useState } from 'react'
import { FiSearch } from "react-icons/fi"
import { useQuery } from '@tanstack/react-query'
import SearchList from './SearchList'

interface Data {

    id: number
    title: string
    price: number
    description: string
    category: string
    image: string
    rating: {
        rate: number
        count: number
    }
}
const Search = () => {
    const [search, setSearch] = useState("")
    const fetchProducts = async () => {
        const res = await fetch('https://fakestoreapi.com/products')
        return res.json()
    }
    const { data, status, isLoading } = useQuery(["products"], fetchProducts);
    console.log("🚀 ~ file: HomePage.tsx:6 ~ fetchData ~ res:", data)
    const myRef = useRef<HTMLInputElement>(null)
    const [showList, setShowList] = useState(false)
    const handleInputFocus = () => {
        setShowList(true)
    }
    useEffect(() => {
        const handleoutsideClick = (event: MouseEvent) => {
            if (myRef.current && !myRef.current.contains(event.target as Node) && !(event.target as HTMLElement).tagName.toLowerCase().match(/input|textarea/)) {
                setShowList(false);
            }
        }

        document.addEventListener("click", handleoutsideClick)
        return () => {
            document.removeEventListener("click", handleoutsideClick)
        }
    })
    if (isLoading) {
        return <p>Loading</p>
    }
    const filteredData = data.slice(0, 6).filter((item: Data) => {
        if (item.title.toLowerCase().includes(search.toLowerCase())) {
            return item;
        }
    })
    return (

        <div className={`sm:block relative `}>
            <div>
                <div className="relative flex items-center text-gray-400 focus-within:text-gray-600">
                    <input type="text" placeholder="Search" onChange={(e) => setSearch(e.target.value)} onFocus={handleInputFocus} className="outline-none bg-gray-200 rounded-md ring-1 ring-gray-300 focus:ring-gray-500  placeholder-gray-500 pl-10  py-1 " />
                    <FiSearch size={20} color="gray" className="absolute  pointer-events-none font-semibold ml-2" />
                </div>
            </div>
            {
                showList && !isLoading && search !== "" && <div className='absolute w-[280px] sm:w-[500px] mt-1 left-0 sm:left-1/2 sm:-translate-x-1/2 border-2 rounded' ref={myRef}>
                    {filteredData.length > 0 ? (filteredData.map((item: Data, index: number) => (
                        //to make <hr /> appear only between two <searchList />
                        <React.Fragment key={item.id}>
                            <SearchList {...item} />
                            {index < filteredData.length - 1 && (
                                <div className='px-4 w-[500px] bg-gray-100'>
                                    <hr className='border-gray-400 w-full' />
                                </div>
                            )}
                        </React.Fragment>
                    ))) : (<div className='px-4 py-2 text-center font-semibold bg-gray-100 '>
                        <p>No match found. <span className='text-xs underline'>Try other keywords</span></p>
                    </div>)}
                </div>
            }

        </div>
    )
}

export default Search
