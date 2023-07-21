import React from "react";
import { FiShoppingCart } from "react-icons/fi"
import { HiOutlineUser } from "react-icons/hi"
import { FiSearch } from "react-icons/fi"
import { Badge } from "@mui/material";
import Link from "next/link";
import Search from "../search/Search";


const Navbar = () => {
    return <div className="h-16 sticky top-0 flex items-center justify-between px-2 sm:px-8 z-20 bg-gray-50 bg-opacity-95">
        <div className="hidden sm:block">
            <Link href="/"> <h2 className=" font-logo text-2xl font-extrabold text-transparent bg-clip-text  bg-gradient-to-r from-green-400 via-yellow-400 to-pink-400">OnlineStore</h2> </Link>
        </div>
        <div>
            <Search />
        </div>
        <div className="flex  justify-between">
            <Badge badgeContent={4} color="success">
                <FiShoppingCart size={22} />
            </Badge>
            <HiOutlineUser size={22} className="ml-10" />
        </div>
    </div>;
};

export default Navbar;
