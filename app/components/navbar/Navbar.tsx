import React from "react";
import { FiShoppingCart } from "react-icons/fi"
import { HiOutlineUser } from "react-icons/hi"
import { Badge } from "@mui/material";
import Link from "next/link";
import Search from "../search/Search";
import { useSelector } from "react-redux"


const Navbar = () => {
    const data = useSelector((state: any) => state.cart.itemsNumber);
    // const cart = useSelector((state: any) => state.cart.cartProducts);
    console.log("🚀 ~ file: Navbar.tsx:12 ~ Navbar ~ data:", data)
    return <div className="max-w-[1400px] mx-auto h-16 sticky top-0 flex items-center justify-between px-4 sm:px-8 md:px-4 z-20 bg-gray-50 bg-opacity-95">
        <div className="hidden sm:block">
            <Link href="/"> <h2 className=" font-logo text-2xl font-extrabold text-transparent bg-clip-text  bg-gradient-to-r from-green-400 via-yellow-400 to-pink-400">OnlineStore</h2> </Link>
        </div>
        <div>
            <Search />
        </div>
        <div className="flex  justify-between">
            <Badge badgeContent={data} color="success">
                <Link href="/cart">
                    <FiShoppingCart size={22} color="green" />
                </Link>
            </Badge>
            <HiOutlineUser size={22} color="green" className="ml-10" />
        </div>
    </div>;
};

export default Navbar;
