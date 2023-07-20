import React from "react";
import { FiShoppingCart } from "react-icons/fi"
import { HiOutlineUser } from "react-icons/hi"
import { FiSearch } from "react-icons/fi"
import { Roboto, Rubik } from 'next/font/google'
import { Badge } from "@mui/material";





const Navbar = () => {
    return <div className="h-16 sticky top-0 flex items-center justify-between mx-2 sm:mx-8">
        <div className="hidden sm:block">
            <h2 className=" font-logo text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ">OnlineStore</h2>
        </div>

        <div className="relative flex items-center text-gray-400 focus-within:text-gray-600">
            <input type="text" placeholder="Search" className="outline-none bg-gray-200 rounded-md ring-1 ring-gray-300 focus:ring-gray-500  placeholder-gray-500 pl-10  py-1 " />
            <FiSearch size={20} color="gray" className="absolute  pointer-events-none font-semibold ml-2" />
        </div>
        <div className="flex  justify-between">
            <Badge badgeContent={4} color="primary">
                <FiShoppingCart size={22} />
            </Badge>
            <HiOutlineUser size={22} className="ml-10" />
        </div>
    </div>;
};

export default Navbar;
