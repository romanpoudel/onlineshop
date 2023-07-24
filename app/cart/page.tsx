"use client"

import React from 'react'
import { useSelector,useDispatch} from 'react-redux'
import { removeFromCart } from '@/app/redux-toolkit/features/cart/cartSlice'
import Navbar from '../components/navbar/Navbar'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Image from 'next/image';
import { BiRightArrowAlt } from 'react-icons/bi';
import Link from 'next/link';
import { MdRemoveCircleOutline } from 'react-icons/md'

const page = () => {
    const dispatch=useDispatch();
    const data = useSelector((state: any) => state.cart.cartProducts)
    console.log(data)
    const handleRemove=(id:number)=>{
        dispatch(removeFromCart(id))
    }
    return (
        <div>
            <Navbar />
            <div>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 550 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">Image</TableCell>
                                <TableCell align="left">Title</TableCell>
                                <TableCell align="center">Count</TableCell>
                                <TableCell align="right">Price</TableCell>
                                <TableCell align="right">Remove</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.length == 0 ? <TableRow key="1" sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell align="center" colSpan={5} style={{color:"red"}}>Cart is Empty.</TableCell>
                            </TableRow> :data.map((row: any) => (
                                <TableRow
                                    key={row.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell style={{display:"flex",alignItems:"center",justifyContent:"center"}}><Image src={row.image} alt="image" width={20} height={20}/></TableCell>
                                    <TableCell align="left" >{row.title}</TableCell>
                                    <TableCell align="center">{row.count}</TableCell>
                                    <TableCell align="right">{row.price}</TableCell>
                                    <TableCell style={{ display: "flex", alignItems: "center", justifyContent: "end",cursor:"pointer" }} onClick={()=>handleRemove(row.id)}><MdRemoveCircleOutline size={20}/></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
            <div className='flex justify-center py-2'>
                <Link href="/">
                    <div className='py-2 flex items-center justify-center w-48'>
                        <p className='font-semibold '>Continue Shopping</p>
                        <BiRightArrowAlt color='green' />
                    </div>
                </Link>
            </div>


        </div>
    )
}

export default page
